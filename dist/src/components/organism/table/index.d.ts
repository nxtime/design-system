import { ReactNode } from "react";
import { TKeyModes } from "./mode";
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
    action?: (item: T, index: number) => ReactNode;
}
export type TTableConstraints<T> = {
    [K in keyof T]: string | number | {
        [S in keyof T[K]]: string | number;
    } | Record<string, string | number>[];
};
declare const Table: <T extends TTableConstraints<T>>({ headers, data, hideColumn, dataConfig, action, mode, }: ITableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Table;
//# sourceMappingURL=index.d.ts.map