import { ReactNode, useRef } from "react";
import TablePagination from "./pagination";
import TableScroll from "./scroll";
import { TTableConstraints } from "..";

const modes = {
  scroll: TableScroll,
  pagination: TablePagination,
};

export type TKeyModes = keyof typeof modes;

interface ITableModeProps<T> {
  mode: TKeyModes;
  children: (_options: { data: T[] }) => ReactNode;
  data: T[];
}

const TableMode = <T extends TTableConstraints<T>>({
  mode,
  children,
  data,
}: ITableModeProps<T>) => {
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const SelectedMode = modes[mode];

  return (
    <div className={`table-container ${mode}`} ref={tableContainerRef}>
      <SelectedMode tableContainerRef={tableContainerRef} data={data}>
        {children}
      </SelectedMode>
    </div>
  );
};

export default TableMode;
