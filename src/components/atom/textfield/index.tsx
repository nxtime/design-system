import { Icon } from "@iconify/react/dist/iconify.js";
import { FormEvent, HTMLProps, ReactNode } from "react";

type TColorVariants = "base-200" | "base-300" | "neutral" | "primary" | "secondary" | "warning" | "danger" | "info";

const generateUuid = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (character) => {
    const random = (Math.random() * 16) | 0;
    const value = character === "x" ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};

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

const Textfield = ({
  onChange,
  defaultValue,
  children,
  name,
  invalidText,
  placeholder,
  variant,
  icon,
  required = true,
  className = "",
  type = "text",
  id = generateUuid(),

  ...inputProps
}: ITextfieldProps) => {

  return (
    <div className={`textfield ${variant ? 'bg-'+variant : ''} ${className}`} >
      <label htmlFor={id}>{placeholder ?? name ?? id}</label>
      <input
        id={id}
        type={type}
        className="input"
        name={name ?? id}
        onChange={onChange}
        defaultValue={defaultValue}
        placeholder={placeholder ?? name ?? id ?? ""}
        required={required}
        {...inputProps}
      />
      {
        icon && (
          <Icon icon={icon} />
        )
      }
      {
        required && (
          <span className="required">
            {
              invalidText ??
              name ?
                `${name ?? id} should not be empty!`
                : "Should not be empty!"
            }
          </span>
        )
      }
      {children && children}
    </div>
  )
}

export default Textfield;
