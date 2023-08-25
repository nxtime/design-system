import { ReactNode, RefObject } from "react";
interface ITableScroll<T> {
    children: (_options: {
        data: T[];
    }) => ReactNode;
    data: T[];
    tableContainerRef: RefObject<HTMLDivElement>;
}
declare const TableScroll: <T extends Record<string, string | number | (string | number)[] | Record<string, string | number>>>({ children, data, tableContainerRef, }: ITableScroll<T>) => ReactNode;
export default TableScroll;
//# sourceMappingURL=scroll.d.ts.map