import { ReactNode, useCallback, useRef, useState } from "react";
import TableMode, { TKeyModes } from "./mode";
import { Icon } from "@iconify/react/dist/iconify.js";
import { debounce } from "@/utils/helpers/debounce";
import TableConfigModal from "../modal/table/filter";
import useModal from "@/stores/useModal";
import Select from "@/components/molecule/select";
import Column from "./column";
import { sortByKey } from "./functions/sort";

interface ITableProps<T> {
  headers?: Record<keyof T, string>[];
  data: T[];
  hideColumn?: (keyof T)[];
  dataConfig?: {
    [K in keyof T]?: (_value: T[K]) => ReactNode | string | number;
  };
  headersConfig?: {
    [K in keyof T]?: (_value: T[K]) => ReactNode | string | number;
  };
  mode?: TKeyModes;
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

const Table = <
  T extends Record<string, number | string | Record<string, number | string>>,
>({
  headers,
  data,
  hideColumn = [],
  dataConfig,
  // headersConfig,
  mode = "pagination",
}: ITableProps<T>) => {
  const { openModal, closeModal } = useModal();
  const translation = (v: string) => {
    if (Object.hasOwnProperty.call(translations, v)) {
      return translations[v as keyof typeof translations];
    }
    return v;
  };
  const [currentMode, setCurrentMode] = useState<TKeyModes>(mode);
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
    return data.filter((row) => {
      if (currentFilter.trim() === "") return data;

      const filter = currentFilter.toLowerCase().trim();

      const rowIncludes = Object.entries(row).some(([keyName, item]) => {
        if (
          typeof item === "object" &&
          Object.hasOwnProperty.call(dataConfig, keyName)
        ) {
          return String(dataConfig?.[keyName]?.(item as T[string]))
            .toLowerCase()
            .includes(filter);
        }

        if (typeof item === "object") {
          return String(Object.values(item)[0]).toLowerCase().includes(filter);
        }

        return String(item).toLowerCase().includes(filter);
      });

      return rowIncludes;
    });
  }, [currentFilter, data, dataConfig]);

  const orderedItems = useCallback(() => {
    return sortByKey(filteredItems(), orderedHeader.current, ordersType[order]);
  }, [order, filteredItems, orderedHeader]);

  return (
    <>
      {/*<div className="group rounded-box no-print">
        <label className="bg-primary" htmlFor="find-all-table">
          Find
        </label>
        <input
          className="input input-neutral input-ring-info"
          id="find-all-table"
          placeholder="Type here to filter..."
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
        <Select
          items={["scroll", "pagination"]}
          currentSelected={mode}
          onChange={(_, item) => {
            if (item === undefined) return;
            setCurrentMode(item as TKeyModes);
          }}
        />
      </div>  */}
      <TableMode mode={currentMode} data={orderedItems()}>
        {({ data }) => {
          if (data.length === 0) return null;
          return (
            <table className="table">
              <thead>
                <tr>
                  {headers &&
                    headers.map((column, columnIndex) => {
                      return (
                        <th key={columnIndex}>{column as unknown as string}</th>
                      );
                    })}
                  {headers === undefined &&
                    Object.keys(data[0]).map((column, columnIndex) => {
                      return (
                        <Column
                          key={columnIndex}
                          tBodyRef={tBodyRef}
                          mousePosition={mousePosition}
                          orderedHeader={orderedHeader}
                          order={order}
                          setOrder={setOrder}
                          column={column}
                          index={columnIndex}
                          columns={Object.keys(data[0])}
                          ordersType={ordersType}
                          translation={translation}
                        />
                      );
                    })}
                </tr>
              </thead>
              <tbody ref={tBodyRef}>
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

                        if (
                          typeof item === "object" &&
                          dataConfig?.[column] === undefined
                        ) {
                          value = Object.values(item)[0];
                        } else if (
                          Object.hasOwnProperty.call(dataConfig ?? {}, column)
                        ) {
                          value = dataConfig?.[column]?.(item as T[keyof T]);
                        } else {
                          value = item as string | number;
                        }

                        return (
                          <td
                            title="Click to copy"
                            key={itemIndex}
                            style={{ width: "auto" }}
                          >
                            {typeof item !== "object" ? (
                              value
                            ) : (
                              <div className="cell-container">
                                <div className="cell-container--header">
                                  <span>{value}</span>
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
                    </tr>
                  );
                })}
              </tbody>
            </table>
          );
        }}
      </TableMode>
      <TableConfigModal config={Object.keys(data[0])} closeModal={closeModal} />
    </>
  );
};

export default Table;