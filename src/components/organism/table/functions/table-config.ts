import { TTableConfig, TTableConstraints } from "..";
import { TConditionTypes } from "../../modal/table/config";

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

const evaluateCondition = (
  conditionType: TConditionTypes,
  conditionValue: number,
  actualValue: number,
): boolean => {
  switch (conditionType) {
    case "none":
      return true;
    case "greater":
      return actualValue > conditionValue;
    case "greaterOrEqual":
      return actualValue >= conditionValue;
    case "lesser":
      return actualValue < conditionValue;
    case "lesserOrEqual":
      return actualValue <= conditionValue;
    case "equal":
      return actualValue === conditionValue;
    case "different":
      return actualValue !== conditionValue;
    default:
      throw new Error("Invalid condition type");
  }
};

export { initializeTableConfig, evaluateCondition };
