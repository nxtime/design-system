type Entries<T> = {
    [K in keyof T]: [K, T[K]];
}[keyof T][];
export type { Entries };
//# sourceMappingURL=index.d.ts.map