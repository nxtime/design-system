import { ReactNode } from "react";
declare const Modal: ({ children, currentName, variant, onClose, }: {
    children: ReactNode;
    currentName: string;
    variant?: string | undefined;
    onClose?: (() => void) | undefined;
}) => import("react").ReactPortal | null;
export default Modal;
//# sourceMappingURL=index.d.ts.map