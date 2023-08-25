import { ReactNode } from "react";
import { TTableConstraints } from "..";
interface ITablePagination<T> {
    children: (_options: {
        data: T[];
    }) => ReactNode;
    data: T[];
    itemsPerPage?: number;
}
declare const TablePagination: <T extends TTableConstraints<T>>({ children, data, itemsPerPage, }: ITablePagination<T>) => import("react/jsx-runtime").JSX.Element;
export default TablePagination;
//# sourceMappingURL=pagination.d.ts.map