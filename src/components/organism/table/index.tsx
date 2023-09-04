import {
  MutableRefObject,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import TableMode, { TKeyModes } from "./mode";
import { Icon } from "@iconify/react/dist/iconify.js";
import TableConfigModal from "../modal/table/filter";
import useModal from "../../../stores/useModal";
import Column from "./column";
import { sortByKey } from "./functions/sort";
import { debounce } from "../../../utils/helpers/debounce.tsx";

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
}

const translations = {
  qty: "Quantidade",
  name: "Nome",
  product: "Produto",
  person: "Pessoa",
  address: "Endereço",
  age: "Idade",
  page: "Página",
  "per-page": "Por página",
  of: "de",
  items: "Itens",
};
const ordersType = ["default", "asc", "desc"] as const;

type TGenericRecord = Record<string, string | number>;
type TGenericRecordWArray = Record<string, string | number | TGenericRecord[]>;

export type TTableConstraints<T> = {
  [K in keyof T]:
  | string
  | number
  | { [S in keyof T[K]]: string | number }
  | Record<string, string | number | TGenericRecord | TGenericRecordWArray>;
};

const Table = <T extends TTableConstraints<T>>({
  headers,
  data,
  dataConfig,
  showObject,
  // headersConfig,
  action,
  loading = false,
  hideColumn = [],
  mode = "pagination",
}: ITableProps<T>) => {
  const { closeModal, openModal } = useModal();
  const translation = (v: string) => {
    if (Object.hasOwnProperty.call(translations, v)) {
      return translations[v as keyof typeof translations];
    }
    return v;
  };
  const [currentMode] = useState<TKeyModes>(mode);
  const [order, setOrder] = useState<number>(0);
  const orderedHeader = useRef<keyof (typeof data)[number] | null>(null);
  const tBodyRef = useRef<HTMLTableSectionElement>(null);
  const mousePosition = useRef({
    startPosition: 0,
    currentPosition: 0,
    endPosition: 0,
  });

  const [currentFilter, changeCurrentFilter] = useState("");

  const filteredItems = useCallback(() => {
    if (loading) return [];
    return data.filter((row) => {
      if (currentFilter.trim() === "") return data;

      const filter = currentFilter.toLowerCase().trim();

      const rowIncludes = Object.entries(row).some(([keyName, item]) => {
        if (hideColumn.includes(keyName as keyof T)) return false;

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
  }, [currentFilter, hideColumn, data, dataConfig, loading]);

  const orderedItems = useCallback(() => {
    return sortByKey(filteredItems(), orderedHeader.current, ordersType[order]);
  }, [order, filteredItems, orderedHeader]);

  return (
    <div className="table-full">
      <div className="group rounded-box no-print">
        <label className="bg-primary" htmlFor="find-all-table">
          Buscar
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
          <Icon icon="mdi:filter" />
        </button>
        {/*<Select
          items={["scroll", "pagination"]}
          currentSelected={mode}
          onChange={(_, item) => {
            if (item === undefined) return;
            setCurrentMode(item as TKeyModes);
          }}
        /> */}
      </div>
      <TableMode mode={currentMode} data={orderedItems()}>
        {({ data }) => {
          let columnIndex = 0;
          return (
            <table className="table">
              <thead>
                <tr>
                  {headers &&
                    headers.map((column, columnIndex) => {
                      if (hideColumn.includes(column as keyof T)) return null;
                      columnIndex++;
                      return (
                        <th key={columnIndex}>{column as unknown as string}</th>
                      );
                    })}
                  {headers === undefined &&
                    data.length > 0 &&
                    Object.keys(data[0]).map((column) => {
                      if (hideColumn.includes(column as keyof T)) return null;
                      columnIndex++;
                      return (
                        <Column
                          key={columnIndex - 1}
                          tBodyRef={tBodyRef}
                          mousePosition={mousePosition}
                          orderedHeader={
                            orderedHeader as MutableRefObject<string | null>
                          }
                          order={order}
                          setOrder={setOrder}
                          column={column}
                          index={columnIndex - 1}
                          columns={Object.keys(data[0])}
                          ordersType={ordersType}
                          translation={translation}
                        />
                      );
                    })}
                    {loading && (<th />)}
                  {action && <th>Ação</th>}
                </tr>
              </thead>
              <tbody ref={tBodyRef}>
                {loading && <h2 className="subtitle" style={{ margin: "auto", marginTop: "1rem", width: "fit-content"}}>Carregando...</h2>}
                {data.map((row, rowIndex) => {
                  return (
                    <tr tabIndex={0} key={rowIndex}>
                      {(
                        Object.entries(row) as [
                          keyof T,
                          number | string | Record<string, string | number>,
                        ][]
                      ).map(([column, item], itemIndex) => {
                        let value: ReactNode | string | number;

                        if (hideColumn.includes(column)) return null;

                        if (
                          typeof item === "object" &&
                          dataConfig?.[column] === undefined
                        ) {
                          value = Object.values(item)[0];
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
                            {typeof item !== "object" ||
                              !showObject?.[column] ? (
                              value
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

                                      if (currentCellContainer === null) return;

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
                                          listItem.innerText = `${translation(
                                            itemColumn,
                                          )}: ${itemValue}`;

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
      <TableConfigModal config={Object.keys(data[0])} closeModal={closeModal} />
    </div>
  );
};

export default Table;
