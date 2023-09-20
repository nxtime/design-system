import type { TTableConfig } from "../../table";
import { Dispatch, SetStateAction } from "react";
declare const TableConfigModal: <T extends TTableConfig<T>>({ closeModal, config, updateConfig, hidden, translation, }: {
    closeModal: () => void;
    config: TTableConfig<T>;
    updateConfig: Dispatch<SetStateAction<TTableConfig<T>>>;
    hidden: (keyof T)[];
    translation: string;
}) => import("react/jsx-runtime").JSX.Element;
export default TableConfigModal;
//# sourceMappingURL=filter.d.ts.map