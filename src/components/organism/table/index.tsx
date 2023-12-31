import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import TableMode, { TKeyModes } from "./mode";
import { Icon } from "@iconify/react/dist/iconify.js";
import TableConfigModal, { TConditionTypes } from "../modal/table/config";
import useModal from "../../../stores/useModal";
import Column from "./column";
import { sortByKey } from "./functions/sort";
import { debounce } from "../../../utils/helpers/debounce.tsx";
import { translate } from "translation-system";
import {
  initializeTableConfig,
  evaluateCondition,
} from "./functions/table-config.ts";

interface ITableProps<T> {
  /*
   * Default show headers, for each column
   */
  headers?: Record<keyof T, string>[] | string[];
  /*
   * A generic array of objects
   * Each key is a header by default
   */
  data: T[];
  translation?: TTableTranslation;
  translationPrefix?: string;
  /*
   * If a key from data is specified,
   * the whole column is going to be hidden
   */
  hideColumn?: (keyof T)[];
  /*
   * If property of a key is an object,
   * it's going to be destructured to be shown
   */
  showObject?: { [K in keyof T]: boolean };
  /*
   * Default config for the "td" display of the table
   */
  dataConfig?: {
    [K in keyof T]?: (_value: T[K], _row: T) => ReactNode | string | number;
  };
  /*
   * Will put a loading state
   */
  loading?: boolean;
  /*
   * Default config for the "th" display of the table
   */
  headersConfig?: {
    [K in keyof T]?: (_value: T[K]) => ReactNode | string | number;
  };
  /*
   * Defines the mode which the table is going to be rendered
   */
  mode?: TKeyModes;
  /*
   * Defines as the last column,
   * for custom actions, it receives a component as a child
   */
  action?: (item: T, index: number) => ReactNode;
  /*
   * Show compact headers
   */
  noWrap?: boolean;
  tableConfig?: TTableConfig<T>;
}

export type TTableConfig<T> = {
  [K in keyof T]: TTableConfigProps;
};

export type TTableConfigProps = {
  enabled: boolean;
  value: number | string;
  color: string;
  condition: TConditionTypes;
};

const ordersType = ["default", "asc", "desc"] as const;

export type TTableConstraints<T> = {
  [K in keyof T]: T[K] extends string
    ? string
    : T[K] extends number
    ? number
    : T[K] extends boolean
    ? boolean
    : T[K] extends (infer U)[]
    ? U extends Record<string, string | number | boolean | string[] | number[]>
      ? TTableConstraints<U>[]
      : never
    : {
        [S in keyof T[K]]:
          | string
          | number
          | Record<string, string | number | boolean | string[] | number[]>
          | Record<string, string | number | boolean | string[] | number[]>[];
      };
};
//
export type TTableTranslation = string;

const Table = <T extends TTableConstraints<T>>({
  headers,
  data,
  dataConfig,
  tableConfig,
  showObject,
  noWrap = true,
  // headersConfig,
  action,
  loading = false,
  translation,
  translationPrefix = "data",
  hideColumn = [],
  mode = "pagination",
}: ITableProps<T>) => {
  const { closeModal, openModal } = useModal();
  const [currentMode] = useState<TKeyModes>(mode);
  const [order, setOrder] = useState<number>(0);
  const [hiddenColumns, updateHiddenColumns] = useState<
    (keyof (typeof data)[number])[]
  >([]);
  const orderedHeader = useRef<keyof (typeof data)[number] | null>(null);
  const tBodyRef = useRef<HTMLTableSectionElement>(null);
  const mousePosition = useRef({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0,
  });

  const [currentTableConfig, updateCurrentTableConfig] = useState<
    TTableConfig<T>
  >(
    tableConfig === undefined
      ? initializeTableConfig(data, hideColumn)
      : tableConfig,
  );

  const [currentFilter, changeCurrentFilter] = useState("");

  const filteredItems = useCallback(() => {
    if (loading) return [];
    return data.filter((row) => {
      if (currentFilter.trim() === "") return data;

      const filter = currentFilter.toLowerCase().trim();

      const rowIncludes = Object.entries(row).some(([keyName, item]) => {
        if (
          hideColumn.includes(keyName as keyof T) ||
          hiddenColumns.includes(keyName as keyof T)
        )
          return false;
        if (item === null) return false;

        if (
          typeof item === "object" &&
          Object.hasOwnProperty.call(dataConfig, keyName)
        ) {
          return String(
            dataConfig?.[keyName as keyof T]?.(item as T[keyof T], row),
          )
            .toLowerCase()
            .includes(filter);
        }

        if (typeof item === "object") {
          return String(Object.values(item as T[keyof T])[0])
            .toLowerCase()
            .includes(filter);
        }

        return String(item).toLowerCase().includes(filter);
      });

      return rowIncludes;
    });
  }, [currentFilter, hideColumn, hiddenColumns, data, dataConfig, loading]);

  const orderedItems = useCallback(() => {
    return sortByKey(filteredItems(), orderedHeader.current, ordersType[order]);
  }, [order, filteredItems, orderedHeader]);

  return (
    <div className="table-full">
      <div className="group rounded-box no-print">
        <label className="bg-primary" htmlFor="find-all-table">
          {translate("common.search")}
        </label>
        <input
          className="input input-neutral ring-info"
          id="find-all-table"
          placeholder="Filtrar por...."
          style={{ flex: "1" }}
          onChange={debounce((e) => {
            changeCurrentFilter(e.target.value);
          }, 300)}
        />
        <button
          className="btn btn-primary btn-icon"
          style={{ flex: "0" }}
          onClick={() => openModal("table-config-modal")}
        >
          <Icon icon="mdi:gear" />
        </button>
      </div>
      <TableMode mode={currentMode} data={orderedItems()}>
        {({ data }) => {
          let columnIndex = 0;
          return (
            <table className="table">
              <thead className={noWrap ? "no-wrap" : ""}>
                {loading || data.length === 0 ? null : (
                  <tr>
                    {headers &&
                      headers.map((column, index) => {
                        return (
                          <Column
                            key={index}
                            tBodyRef={tBodyRef}
                            mousePosition={mousePosition}
                            lastIndex={
                              Object.keys(data[0]).length -
                                hideColumn.length ===
                              index
                            }
                            orderedHeader={
                              orderedHeader as MutableRefObject<string | null>
                            }
                            order={order}
                            setOrder={setOrder}
                            column={column as string}
                            index={columnIndex - 1}
                            ordersType={ordersType}
                            translation={translation}
                            translationPrefix={translationPrefix}
                          />
                        );
                      })}
                    {headers === undefined &&
                      data.length > 0 &&
                      Object.keys(data[0]).map((column, index) => {
                        if (
                          hideColumn.includes(column as keyof T) ||
                          hiddenColumns.includes(column as keyof T)
                        )
                          return null;
                        columnIndex++;
                        return (
                          <Column
                            key={index}
                            tBodyRef={tBodyRef}
                            mousePosition={mousePosition}
                            lastIndex={
                              Object.keys(data[0]).length -
                                hideColumn.length ===
                              index
                            }
                            orderedHeader={
                              orderedHeader as MutableRefObject<string | null>
                            }
                            order={order}
                            setOrder={setOrder}
                            column={column}
                            index={columnIndex - 1}
                            ordersType={ordersType}
                            translation={translation}
                            translationPrefix={translationPrefix}
                          />
                        );
                      })}
                    {loading && <th />}
                    {action && <th>{translate("common.action")}</th>}
                  </tr>
                )}
              </thead>
              <tbody ref={tBodyRef}>
                {loading && (
                  <span
                    className="subtitle"
                    style={{
                      margin: "auto",
                      marginTop: "1rem",
                      width: "fit-content",
                    }}
                  >
                    {translate("common.loading")}...
                  </span>
                )}
                {!loading &&
                  data.map((row, rowIndex) => {
                    return (
                      <tr tabIndex={0} key={rowIndex}>
                        {(
                          Object.entries(row) as [
                            keyof T,
                            number | string | Record<string, string | number>,
                          ][]
                        ).map(([column, item], itemIndex) => {
                          let value: ReactNode | string | number;

                          if (
                            hideColumn.includes(column) ||
                            hiddenColumns.includes(column)
                          )
                            return null;

                          const isCustomEnabled =
                            currentTableConfig[column]?.enabled &&
                            evaluateCondition(
                              currentTableConfig[column]?.condition,
                              currentTableConfig[column]?.value as number,
                              item as number,
                            );

                          if (
                            typeof item === "object" &&
                            dataConfig?.[column] === undefined
                          ) {
                            if (item?.length) {
                              value = item.length;
                            } else if (item === null) {
                              value = 0;
                            } else {
                              value = Object.values(item)[0];
                            }
                          } else if (
                            Object.hasOwnProperty.call(dataConfig ?? {}, column)
                          ) {
                            value = dataConfig?.[column]?.(
                              item as T[keyof T],
                              row,
                            );
                          } else {
                            value = item as string | number;
                          }

                          return (
                            <td
                              title="Click to copy"
                              key={itemIndex}
                              style={{ width: "auto" }}
                            >
                              {typeof item !== "object" || !showObject ? (
                                isCustomEnabled ? (
                                  <span
                                    className="btn btn-xs no-bounce"
                                    style={{
                                      backgroundColor: `var(--${currentTableConfig[column].color})`,
                                      width: "fit-content",
                                      marginInline: "auto",
                                      cursor: "unset",
                                    }}
                                  >
                                    {value}
                                  </span>
                                ) : (
                                  value
                                )
                              ) : (
                                <div className="cell-container">
                                  <div className="cell-container--header">
                                    {value}
                                    <button
                                      className="btn btn-primary btn-icon btn-xs btn-square"
                                      onClick={(e) => {
                                        const currentCellContainer = (
                                          e.currentTarget as HTMLButtonElement
                                        ).parentNode
                                          ?.parentNode as HTMLDivElement;

                                        if (currentCellContainer === null)
                                          return;

                                        if (
                                          (
                                            currentCellContainer.lastChild as HTMLUListElement
                                          ).className === "content"
                                        ) {
                                          currentCellContainer.removeChild(
                                            currentCellContainer.lastChild!,
                                          );
                                          return;
                                        }

                                        const listContainer =
                                          document.createElement("ul");

                                        listContainer.className = "content";

                                        Object.entries(item).forEach(
                                          ([itemColumn, itemValue]) => {
                                            const listItem =
                                              document.createElement("li");
                                            listItem.innerText = `${
                                              translation ??
                                              translate(
                                                `data.${translation}.${itemColumn}` as unknown as "data.workgroups.name",
                                              )
                                            }: ${itemValue}`;

                                            listContainer.appendChild(listItem);
                                          },
                                        );

                                        currentCellContainer.appendChild(
                                          listContainer,
                                        );
                                      }}
                                    >
                                      <Icon icon="eva:arrow-down-fill" />
                                    </button>
                                  </div>
                                </div>
                              )}
                            </td>
                          );
                        })}
                        {action && action(row, rowIndex)}
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          );
        }}
      </TableMode>
      {!loading && data.length > 0 && (
        <TableConfigModal
          translation={translation}
          translationPrefix={translationPrefix}
          config={currentTableConfig}
          updateConfig={updateCurrentTableConfig}
          closeModal={closeModal}
          updateHiddenColumns={updateHiddenColumns}
          hiddenColumns={hiddenColumns}
          hidden={hideColumn}
        />
      )}
    </div>
  );
};

export default Table;
