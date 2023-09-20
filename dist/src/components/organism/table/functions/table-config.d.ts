import { TTableConfig, TTableConstraints } from "..";
import { TConditionTypes } from "../../modal/table/config";
declare const initializeTableConfig: <T extends TTableConstraints<T>>(_items: T[], _hiddenColumns: (keyof T)[]) => TTableConfig<T>;
declare const evaluateCondition: (conditionType: TConditionTypes, conditionValue: number, actualValue: number) => boolean;
export { initializeTableConfig, evaluateCondition };
//# sourceMappingURL=table-config.d.ts.map