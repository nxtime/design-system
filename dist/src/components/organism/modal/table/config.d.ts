import type { TTableConfig } from "../../table";
import { Dispatch, SetStateAction } from "react";
declare const conditionsTypes: readonly ["none", "greater", "greaterOrEqual", "lesser", "lesserOrEqual", "equal", "different"];
export type TConditionTypes = (typeof conditionsTypes)[number];
declare const TableConfigModal: <T extends TTableConfig<T>>({ closeModal, config, updateConfig, hiddenColumns, updateHiddenColumns, hidden, translationPrefix, translation, }: {
    closeModal: () => void;
    config: TTableConfig<T>;
    updateConfig: Dispatch<SetStateAction<TTableConfig<T>>>;
    hidden: (keyof T)[];
    hiddenColumns: (keyof T)[];
    updateHiddenColumns: Dispatch<SetStateAction<(keyof T)[]>>;
    translation?: string | undefined;
    translationPrefix?: string | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default TableConfigModal;
//# sourceMappingURL=config.d.ts.map