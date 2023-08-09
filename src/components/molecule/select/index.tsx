import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

type TPotentialType = string | number | Record<string, string | number>;
type TColorVariants =
  | "base-200"
  | "base-300"
  | "neutral"
  | "primary"
  | "secondary"
  | "warning"
  | "danger"
  | "info";

interface ISelectProps {
  items: TPotentialType[];
  currentSelected: TPotentialType;
  variant?: TColorVariants;
  keyExtractor?: (_value: TPotentialType) => string | number;
}

const Select = ({
  items,
  currentSelected,
  variant = "neutral",
  keyExtractor = (value) => value as string | number,
}: ISelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, changeInternalSelected] = useState(currentSelected);

  return (
    <div
      className={`select ${isOpen ? "shadow-md" : ""}`}
      onBlur={() => {
        setTimeout(() => {
          setIsOpen(false);
        }, 100);
      }}
    >
      <button
        type="button"
        className={`btn btn-${variant} btn-select ${isOpen ? "active" : ""}`}
        onClick={() => setIsOpen((s) => !s)}
      >
        <span>{keyExtractor(internalSelected)}</span>
        <Icon icon="eva:arrow-down-fill" vFlip={isOpen} />
      </button>
      {isOpen && (
        <ul
          className={`select-items bg-${variant} shadow-md`}
          // onBlur={() => setIsOpen(false)}
        >
          {items.map((item, index) => {
            return (
              <li
                key={index}
                className="item"
                onClick={() => {
                  changeInternalSelected(item);
                }}
              >
                {keyExtractor(item)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
