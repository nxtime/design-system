import { Icon } from "@iconify/react/dist/iconify.js";
import { CSSProperties, ReactNode, useRef, useState } from "react";
import { handleSelectKeyDown } from "./events";

type TColorVariants =
  | "base-200"
  | "base-300"
  | "neutral"
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "info";

interface ISelectProps<T> {
  /**
   * Array list, if it's an Array of objects,
   * Should also use the prop 'selector',
   * along with keyExtractor for visualization
   */
  items: T[];
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

const defaultKeyExtractor = <
  T extends number | string | Record<string, string | number>,
>(
  value: T,
) => {
  if (typeof value === "object") {
    return <span>{Object.values(value)[0]}</span>;
  }
  return <span>{value}</span>;
};

const Select = <T extends string | number | Record<string, string | number>>({
  items,
  currentSelected,
  selector,
  onChange,
  labelExtractor,
  required = true,
  showQty = 4,
  style = {},
  name = "",
  position = "top",
  variant = "neutral",
  keyExtractor = defaultKeyExtractor<T>,
}: ISelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, changeInternalSelected] = useState(
    items.findIndex((item) =>
      selector
        ? item[selector] === currentSelected?.[selector]
        : item === currentSelected,
    ),
  );
  const [currentFocused, changeCurrentFocused] =
    useState<number>(internalSelected);
  const inputRef = useRef<HTMLInputElement>(null);
  const filterRef = useRef("");
  const itemsRef = useRef<HTMLButtonElement[]>([]);

  return (
    <div
      className={`select ${isOpen ? "shadow-md" : ""} ${position}`}
      onBlur={() => { }}
      style={style}
    >
      <button
        type="button"
        className={`btn btn-${variant} btn-select ${isOpen ? "active" : ""}`}
        onClick={() => {
          setIsOpen((s) => !s);
          const selected = currentSelected === undefined ? 0 : internalSelected;
          changeCurrentFocused(selected);
          setTimeout(() => {
            if (!isOpen) {
              itemsRef.current[selected].focus();
            }
          }, 10);
        }}
      >
        {
          <span className={internalSelected === -1 ? "not-selected" : ""}>
            {internalSelected === -1
              ? "Select one of the options"
              : labelExtractor?.(items[internalSelected]) ??
              keyExtractor(items[internalSelected])}
          </span>
        }
        <Icon icon="eva:arrow-down-fill" vFlip={isOpen} />
      </button>
      <input
        style={{
          display: "block",
          position: "absolute",
          top: "100%",
          opacity: 0,
          height: 1,
          pointerEvents: "none",
        }}
        autoComplete="new-password"
        name={name}
        ref={inputRef}
        required={required}
      />
      {isOpen && (
        <ul
          className={`select-items${items.length > 4 ? " custom-scroll " : " "
            }bg-${variant} shadow-md`}
          style={{ "--select-items": showQty } as CSSProperties}
        >
          {items.map((item, index) => {
            return (
              <li key={index} className="item">
                <button
                  type="button"
                  className={`${index === internalSelected ? "active" : ""}`}
                  ref={(el) => (itemsRef.current[index] = el!)}
                  tabIndex={0}
                  onClick={() => {
                    changeInternalSelected(index);
                    if (onChange !== undefined) {
                      onChange(index, items[index]);
                    }
                    if (inputRef.current && selector) {
                      inputRef.current.value = String(items[index][selector]);
                    }
                    setIsOpen(false);
                  }}
                  onMouseEnter={(e) => {
                    changeCurrentFocused(index);
                    (e.target as HTMLButtonElement).focus();
                  }}
                  onMouseLeave={() => {
                    changeCurrentFocused(internalSelected);
                  }}
                  onKeyDown={(e) =>
                    handleSelectKeyDown(
                      e,
                      currentFocused,
                      changeCurrentFocused,
                      filterRef,
                      itemsRef,
                      items.length,
                    )
                  }
                >
                  {keyExtractor(item)}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
