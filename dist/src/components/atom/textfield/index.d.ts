import { FormEvent, HTMLProps, ReactNode } from "react";
type TColorVariants = "base-200" | "base-300" | "neutral" | "primary" | "secondary" | "warning" | "danger" | "info";
export interface ITextfieldProps extends HTMLProps<HTMLInputElement> {
    id?: string;
    optional?: boolean;
    /**
  *  Select an icon from 'icon-sets.iconify.design'
  *  It will be put on your left by default;
  *  To change icon position use: 'iconPosition'
  * */
    icon?: string;
    placeholder?: string;
    /**
  *     If true it will validate in case the input was empty,
  *     if it was, will show a default error message;
  *     For a custom text, use 'invalidText' prop;
  *     Better used along with a 'name' prop;
  * */
    required?: boolean;
    onChange?: (_event: FormEvent<HTMLInputElement>) => void;
    defaultValue?: string;
    /** Additional textfield classes */
    className?: string;
    children?: ReactNode;
    /** Change current textfield pallete */
    variant?: TColorVariants;
    /** Display a custom invalid error */
    invalidText?: string;
    name?: string;
}
declare const Textfield: ({ onChange, defaultValue, children, name, invalidText, placeholder, variant, icon, required, className, type, id, ...inputProps }: ITextfieldProps) => import("react/jsx-runtime").JSX.Element;
export default Textfield;
//# sourceMappingURL=index.d.ts.map