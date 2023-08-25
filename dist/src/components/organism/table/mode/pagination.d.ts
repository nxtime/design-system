import { ReactNode } from "react";
interface ITablePagination<T> {
    children: (_options: {
        data: T[];
    }) => ReactNode;
    data: T[];
    itemsPerPage?: number;
}
declare const TablePagination: <T extends Record<string, string | number | (string | number)[] | Record<string, string | number>>>({ children, data, itemsPerPage, }: ITablePagination<T>) => import("react/jsx-runtime").JSX.Element;
export default TablePagination;
//# sourceMappingURL=pagination.d.ts.map