import { CSSProperties, ReactNode } from "react";
type TColorVariants = "base-200" | "base-300" | "neutral" | "primary" | "secondary" | "warning" | "danger" | "info";
interface ISelectProps<T> {
    /**
     * Array list, if it's an Array of objects,
     * Should also use the prop 'selector',
     * along with keyExtractor for visualization
     */
    items: T[];
    selected?: number;
    currentSelected?: T;
    required?: boolean;
    name?: string;
    position?: "top" | "bottom";
    onChange?: (_index: number, _value?: T) => void;
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
    labelExtractor?: (_item: T) => string | number | ReactNode;
}
type TPossibleObject<T> = {
    [K in keyof T]: T[K] extends string ? string : T[K] extends number ? number : T[K] extends (infer U)[] ? U extends Record<string, string | number> ? TPossibleObject<U>[] : never : {
        [S in keyof T[K]]: string | number | Record<string, string | number> | Record<string, string | number>[];
    };
};
declare const Select: <T extends TPossibleObject<T>>({ items, selected, currentSelected, selector, onChange, labelExtractor, required, showQty, style, name, position, variant, keyExtractor, }: ISelectProps<T>) => import("react/jsx-runtime").JSX.Element;
export default Select;
//# sourceMappingURL=index.d.ts.map