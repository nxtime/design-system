import { CSSProperties, ReactNode } from "react";
type TColorVariants = "base-200" | "base-300" | "neutral" | "primary" | "secondary" | "warning" | "danger" | "info";
interface IMultiSelectProps<T> {
    /**
     * Array list, if it's an Array of objects,
     * Should also use the prop 'selector',
     * along with keyExtractor for visualization
     */
    items: T[];
    selected?: number[];
    currentSelected?: T;
    position?: "top" | "bottom";
    onChange?: (_index: number, _value?: T, _list?: number[]) => void;
    onAllChange?: (_state: boolean) => void;
    showQty?: number;
    style?: CSSProperties;
    /**
     * Object key, for selecting what will show
     * after formSubmit
     */
    selector?: keyof T;
    /**
     * Create a variant for the current theme colors
     */
    variant?: TColorVariants;
    /**
     * A function to extract and format item visualization
     */
    keyExtractor?: (_item: T) => string | number | ReactNode;
    labelExtractor?: (_item: number[]) => string | number | ReactNode;
}
declare const MultiSelect: <T extends string | number | Record<string, string | number>>({ items, selected, selector, onChange, labelExtractor, onAllChange, showQty, style, position, variant, keyExtractor, }: IMultiSelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export default MultiSelect;
//# sourceMappingURL=index.d.ts.map