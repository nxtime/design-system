import { TTableConfig, TTableConstraints } from "..";

const initializeTableConfig: <T extends TTableConstraints<T>>(
  _items: T[],
  _hiddenColumns: (keyof T)[],
) => TTableConfig<T> = (items, hiddenColumns) => {
  type T = (typeof items)[number];
  const tableConfig: TTableConfig<T> = {} as TTableConfig<
    (typeof items)[number]
  >;
  if (items.length === 0) return tableConfig;

  console.log("Current items: ", items, hiddenColumns);

  (Object.keys(items[0]) as (keyof T)[]).forEach((keyName) => {
    if (!hiddenColumns.includes(keyName)) {
      tableConfig[keyName] = {
        enabled: false,
        color: "info",
        value: 0,
        condition: "none",
      };
    }
  });

  return tableConfig;
};

export { initializeTableConfig };
