import { Dispatch, MutableRefObject, RefObject, SetStateAction } from "react";
import { TTableConstraints, TTableTranslation } from "..";
interface IColumnProps<T> {
    index: number;
    column: string;
    columns: string[];
    translation: TTableTranslation;
    ordersType: readonly ["default", "asc", "desc"];
    order: number;
    setOrder: Dispatch<SetStateAction<number>>;
    orderedHeader: MutableRefObject<keyof T | null>;
    tBodyRef: RefObject<HTMLTableSectionElement>;
    mousePosition: MutableRefObject<{
        startPosition: number;
        currentPosition: number;
        endPosition: number;
    }>;
}
declare const Column: <T extends TTableConstraints<T>>({ index, columns, translation, column, ordersType, orderedHeader, order, setOrder, tBodyRef, mousePosition, }: IColumnProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Column;
//# sourceMappingURL=index.d.ts.map