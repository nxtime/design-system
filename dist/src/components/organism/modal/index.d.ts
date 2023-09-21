import { ReactNode } from "react";
declare const Modal: ({ children, currentName, variant, size, className, closeButton, onClose, }: {
    children: ReactNode;
    currentName: string;
    variant?: string | undefined;
    onClose?: (() => void) | undefined;
    className?: string | undefined;
    closeButton?: boolean | undefined;
    size?: "fill" | "normal" | undefined;
}) => import("react").ReactPortal | null;
export default Modal;
//# sourceMappingURL=index.d.ts.map