import { ReactNode } from "react";
import { TKeyModes } from "./mode";
interface ITableProps<T> {
    headers?: Record<keyof T, string>[] | string[];
    data: T[];
    hideColumn?: (keyof T)[];
    showObject?: {
        [K in keyof T]: boolean;
    };
    dataConfig?: {
        [K in keyof T]?: (_value: T[K], _row: T) => ReactNode | string | number;
    };
    loading?: boolean;
    headersConfig?: {
        [K in keyof T]?: (_value: T[K]) => ReactNode | string | number;
    };
    mode?: TKeyModes;
    action?: (item: T, index: number) => ReactNode;
}
type TGenericRecord = Record<string, string | number>;
type TGenericRecordWArray = Record<string, string | number | TGenericRecord[]>;
export type TTableConstraints<T> = {
    [K in keyof T]: string | number | {
        [S in keyof T[K]]: string | number;
    } | Record<string, string | number | TGenericRecord | TGenericRecordWArray>;
};
declare const Table: <T extends TTableConstraints<T>>({ headers, data, dataConfig, showObject, action, loading, hideColumn, mode, }: ITableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Table;
//# sourceMappingURL=index.d.ts.map