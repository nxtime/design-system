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
}
declare const Table: <T extends Record<string, string | number | Record<string, string | number>>>({ headers, data, dataConfig, mode, }: ITableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Table;
//# sourceMappingURL=index.d.ts.map