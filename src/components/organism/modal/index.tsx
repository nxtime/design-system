import { ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useModal from "../../../stores/useModal";

const Modal = ({
  children,
  currentName,
  variant = "neutral",
  onClose = () => { },
}: {
  children: ReactNode;
  currentName: string;
  variant?: string;
  onClose?: () => void;
}) => {
  const { isOpen, current, closeModal } = useModal();

  const modalRoot = document.querySelector("#modal-root");

  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalContentRef.current) {
      modalContentRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || currentName !== current) return null;

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
        <div className={`modal-body container rounded-box bg-${variant}`}>
          {children}
        </div>
      </div>,
      modalRoot,
    )
    : null;
};

export default Modal;
