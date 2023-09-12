import { ReactNode } from "react";
import { TKeyModes } from "./mode";
interface ITableProps<T> {
    headers?: Record<keyof T, string>[] | string[];
    data: T[];
    translation: TTableTranslation;
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
export type TTableConstraints<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends number ? number : T[K] extends boolean ? boolean : T[K] extends (infer U)[] ? U extends Record<string, string | number | boolean | string[] | number[]> ? TTableConstraints<U>[] : never : {
        [S in keyof T[K]]: string | number | Record<string, string | number | boolean | string[] | number[]> | Record<string, string | number | boolean | string[] | number[]>[];
    };
};
export type TTableTranslation = "services" | "workgroups" | "calls" | "scalegroups" | "workgroups" | "scales" | "users";
declare const Table: <T extends TTableConstraints<T>>({ headers, data, dataConfig, showObject, translation, action, loading, hideColumn, mode, }: ITableProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Table;
//# sourceMappingURL=index.d.ts.map