import { TTableConfig, TTableConstraints } from "..";
declare const initializeTableConfig: <T extends TTableConstraints<T>>(_items: T[], _hiddenColumns: (keyof T)[]) => TTableConfig<T>;
export { initializeTableConfig };
//# sourceMappingURL=table-config.d.ts.map