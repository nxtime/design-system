import { Icon } from "@iconify/react/dist/iconify.js";
import {
  CSSProperties,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { handleSelectKeyDown } from "./events";
import { debounce } from "../../../utils/helpers/debounce";

type TColorVariants =
  | "base-200"
  | "base-300"
  | "neutral"
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "info";

const modes = [
  {
    mode: "all",
    label: "Todos",
  },
  {
    mode: "selected",
    label: "Selecionados",
  },
  {
    mode: "not-selected",
    label: "Não selecionados",
  },
] as const;

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
  labelExtractor?: (_item: number[]) => string | number | ReactNode;
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

const MultiSelect = <
  T extends string | number | Record<string, string | number>,
>({
  items,
  selected,
  selector,
  onChange,
  labelExtractor,
  showQty = 10,
  style = {},
  position = "top",
  variant = "neutral",
  keyExtractor = defaultKeyExtractor<T>,
}: IMultiSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, changeInternalSelected] = useState(selected ?? []);
  const [mode, changeMode] = useState<"all" | "selected" | "not-selected">(
    "all",
  );
  const [filter, changeCurrentFilter] = useState("");

  useEffect(() => {
    if (selected && selected !== internalSelected) {
      changeInternalSelected(selected ?? []);
    }
  }, [selected, internalSelected]);

  const filteredItems = useCallback(() => {
    const currentItems = [] as number[];

    for (let i = 0; i < items.length; i++) {
      const currentItem = selector
        ? String(items[i]?.[selector])
        : String(items[i]);

      const foundFilter = currentItem.toLowerCase().includes(filter);

      console.log(currentItem, filter, foundFilter);

      if (!foundFilter) continue;

      if (mode === "all") {
        currentItems.push(i);
        continue;
      }

      const isItemSelected = internalSelected.includes(i);

      if (isItemSelected && mode === "selected") currentItems.push(i);
      if (!isItemSelected && mode === "not-selected") currentItems.push(i);
    }

    return currentItems;
  }, [items, filter, selector, mode, internalSelected]);

  const [currentFocused, changeCurrentFocused] = useState<number>(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const filterRef = useRef("");
  const itemsRef = useRef<HTMLButtonElement[]>([]);

  return (
    <div
      className={`select multiselect ${isOpen ? "shadow-md" : ""} ${position}`}
      onBlur={() => { }}
      style={style}
    >
      <button
        type="button"
        className={`btn btn-${variant} btn-select ${isOpen ? "active" : ""}`}
        onClick={() => {
          setIsOpen((s) => !s);
          changeCurrentFocused(0);
        }}
      >
        {
          <span className={internalSelected.length === 0 ? "not-selected" : ""}>
            {internalSelected.length === 0
              ? "Clique para selecionar"
              : labelExtractor?.(internalSelected) ??
              `${internalSelected.length} selecionados`}
          </span>
        }
        <Icon icon="eva:arrow-down-fill" vFlip={isOpen} />
      </button>
      {isOpen && (
        <ul
          className={`select-items${items.length > 4 ? " custom-scroll " : " "
            }bg-${variant} shadow-md`}
          style={{ "--select-items": showQty } as CSSProperties}
        >
          <li
            className="group rounded-box"
            style={{ width: "fit-content", padding: "var(--spacing-xs)" }}
          >
            {modes.map((currentMode) => {
              return (
                <button
                  key={currentMode.mode}
                  className={`btn no-bounce btn-${currentMode.mode === mode ? "primary" : "neutral"
                    } btn-sm`}
                  onClick={() => changeMode(currentMode.mode)}
                >
                  {currentMode.label}
                </button>
              );
            })}
          </li>
          <li className="search-bar">
            <input
              className="input"
              type="input"
              placeholder="Buscar..."
              onChange={debounce((e) => {
                changeCurrentFilter(e.target.value.toLowerCase());
              }, 300)}
            />
          </li>
          <li className="item">
            <button
              type="button"
              ref={(el) => (itemsRef.current[0] = el!)}
              className={`${internalSelected.length === items.length ? "active" : ""
                }`}
              onMouseEnter={(e) => {
                changeCurrentFocused(0);
                (e.target as HTMLButtonElement).focus();
              }}
              onClick={() => {
                if (internalSelected.length === items.length) {
                  changeInternalSelected([]);
                } else {
                  changeInternalSelected(items.map((_, index) => index));
                }
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
              tabIndex={0}
            >
              <input
                type="checkbox"
                className="checkbox checkbox-secondary"
                onChange={() => {
                  if (internalSelected.length === items.length) {
                    changeInternalSelected([]);
                  } else {
                    changeInternalSelected(items.map((_, index) => index));
                  }
                }}
                checked={internalSelected.length === items.length}
              />
              <span>Selecionar Tudo</span>
            </button>
          </li>

          {items.length === 0 ||
            (filteredItems().length === 0 && (
              <li className="item" style={{ padding: "var(--spacing-xs)"}}>
                <span>Nenhum item foi encontrado</span>
              </li>
            ))}
          {items.map((item, index) => {
            if (!filteredItems().includes(index)) return null;
            const itemIncluded = internalSelected.includes(index);
            return (
              <li key={index} className="item">
                <button
                  type="button"
                  className={`${itemIncluded ? "active" : ""}`}
                  ref={(el) => (itemsRef.current[index + 1] = el!)}
                  tabIndex={0}
                  onClick={() => {
                    changeInternalSelected((previous) => {
                      if (itemIncluded) {
                        return previous.filter((checked) => checked !== index);
                      }
                      return [...previous, index];
                    });
                    if (onChange !== undefined) {
                      onChange(index, items[index]);
                    }
                    if (inputRef.current && selector) {
                      inputRef.current.value = String(items[index][selector]);
                      // setIsOpen(false);
                    }
                    // setIsOpen(false);
                  }}
                  onMouseEnter={(e) => {
                    changeCurrentFocused(index);
                    (e.target as HTMLButtonElement).focus();
                  }}
                  onMouseLeave={() => {
                    changeCurrentFocused(0);
                  }}
                  onKeyDown={(e) =>
                    handleSelectKeyDown(
                      e,
                      currentFocused,
                      changeCurrentFocused,
                      filterRef,
                      itemsRef,
                      filteredItems().length + 1,
                    )
                  }
                >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-secondary"
                    checked={itemIncluded ?? false}
                    onChange={() => {
                      changeInternalSelected((previous) => {
                        if (itemIncluded) {
                          return previous.filter(
                            (checked) => checked !== index,
                          );
                        }
                        return [...previous, index];
                      });
                      if (onChange !== undefined) {
                        onChange(index, items[index]);
                      }
                      if (inputRef.current && selector) {
                        inputRef.current.value = String(items[index][selector]);
                      }
                    }}
                  />
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

export default MultiSelect;
