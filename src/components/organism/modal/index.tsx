import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Icon } from "@iconify/react";
import useModal from "../../../stores/useModal";

const Modal = ({
  children,
  currentName,
  variant = "neutral",
  size = "normal",
  className = "",
  closeButton = false,
  onClose = () => {},
}: {
  children: ReactNode;
  currentName: string;
  variant?: string;
  onClose?: () => void;
  className?: string;
  closeButton?: boolean;
  size?: "normal" | "fill";
}) => {
  const { currentOpen, closeModal } = useModal();

  const modalRoot = document.querySelector("#modal-root") as HTMLDivElement;

  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentOpen.length > 0 && modalContentRef.current) {
      modalContentRef.current.focus();
      modalRoot.classList.add("shown");
    }
    if (
      currentOpen.length === 0 ||
      modalContentRef.current?.childNodes.length === 0
    ) {
      modalRoot.classList.remove("shown");
    }
  }, [currentOpen, modalRoot]);

  if (!currentOpen.includes(currentName)) return null;

  return modalRoot
    ? createPortal(
        <div
          tabIndex={0}
          ref={modalContentRef}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onClose();
              closeModal();
            }
          }}
          className="modal"
        >
          <div
            className="modal-overlay"
            onClick={() => {
              onClose();
              closeModal();
            }}
          />
          <div
            className={`modal-body container rounded-box bg-${variant} ${size} ${className}`}
          >
            {closeButton && (
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  onClose();
                  closeModal();
                }}
              >
                <Icon icon="mingcute:close-fill" height={16} />
              </button>
            )}
            {children}
          </div>
        </div>,
        modalRoot,
      )
    : null;
};

export default Modal;
