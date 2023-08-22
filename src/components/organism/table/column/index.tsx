import { Icon } from "@iconify/react/dist/iconify.js";
import { Dispatch, MutableRefObject, RefObject, SetStateAction } from "react";

interface IColumnProps<T> {
  index: number;
  column: string;
  columns: string[];
  translation: (_value: string) => string;
  ordersType: readonly ["default", "asc", "desc"];
  order: number;
  setOrder: Dispatch<SetStateAction<number>>;
  orderedHeader: MutableRefObject<keyof T | null>;
  tBodyRef: RefObject<HTMLTableSectionElement>;
  mousePosition: MutableRefObject<{
    startPosition: number;
    currentPosition: number;
    endPosition: number;
  }>;
}

const Column = <
  T extends Record<string, number | string | Record<string, number | string>>,
>({
  index,
  columns,
  translation,
  column,
  ordersType,
  orderedHeader,
  order,
  setOrder,
  tBodyRef,
  mousePosition,
}: IColumnProps<T>) => {
  return (
    <th>
      <div className="table-column">
        <span>{translation(column)}</span>
        <div className="group-vertical rounded-box no-print">
          <button
            className={`btn btn-square btn-xs ${
              ordersType[order] === "asc" && orderedHeader.current === column
                ? "active"
                : ""
            }`}
            onClick={() => {
              setOrder((p) =>
                p === 1 && orderedHeader.current === column ? 0 : 1,
              );
              orderedHeader.current = column;
            }}
          >
            <Icon icon="eva:arrow-up-fill" />
          </button>
          <button
            className={`btn btn-square btn-xs ${
              ordersType[order] === "desc" && orderedHeader.current === column
                ? "active"
                : ""
            }`}
            onClick={() => {
              setOrder((p) =>
                p === 2 && orderedHeader.current === column ? 0 : 2,
              );
              orderedHeader.current = column;
            }}
          >
            <Icon icon="eva:arrow-down-fill" />
          </button>
        </div>
        {columns.length - 1 !== index && (
          <button
            className="handler"
            title="Resize Column"
            onMouseDown={(e) => {
              mousePosition.current.startPosition = e.clientX;
            }}
            onMouseMove={(e) => {
              if (
                tBodyRef.current === null ||
                mousePosition.current.startPosition === 0
              )
                return;

              mousePosition.current.currentPosition = e.clientX;

              const cell = tBodyRef.current.firstChild?.childNodes[
                index
              ] as HTMLTableCellElement;

              if (cell === null) return;

              const currentWidth = cell.getBoundingClientRect().width;

              const movingPos =
                mousePosition.current.currentPosition -
                mousePosition.current.startPosition;

              cell.style.width = `${currentWidth + movingPos}px`;

              mousePosition.current.startPosition =
                mousePosition.current.currentPosition;
            }}
            onMouseUp={() => {
              mousePosition.current = {
                startPosition: 0,
                currentPosition: 0,
                endPosition: 0,
              };
            }}
            onMouseLeave={() => {
              mousePosition.current = {
                startPosition: 0,
                currentPosition: 0,
                endPosition: 0,
              };
            }}
            onClick={(e) => {
              if (e.detail < 2) return;

              if (tBodyRef.current === null) return;

              const cell = tBodyRef.current.firstChild?.childNodes[
                index
              ] as HTMLTableCellElement;

              if (cell === null) return;

              cell.style.width = "auto";
            }}
          >
            <span />
            <span />
          </button>
        )}
      </div>
    </th>
  );
};

export default Column;
