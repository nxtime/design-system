import { ReactNode, RefObject } from "react";
import { TTableConstraints } from "..";
interface ITableScroll<T> {
    children: (_options: {
        data: T[];
    }) => ReactNode;
    data: T[];
    tableContainerRef: RefObject<HTMLDivElement>;
}
declare const TableScroll: <T extends TTableConstraints<T>>({ children, data, tableContainerRef, }: ITableScroll<T>) => ReactNode;
export default TableScroll;
//# sourceMappingURL=scroll.d.ts.map