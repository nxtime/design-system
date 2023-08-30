import { KeyboardEvent, MutableRefObject, RefObject } from "react";
type TData = {
    label: string;
    icon: string;
    route: string;
    submenus?: {
        label: string;
        route: string;
        icon: string;
    }[];
};
declare const onKeyDown: (event: KeyboardEvent<HTMLElement>, currentFocusedMenu: MutableRefObject<number>) => void;
declare const onMenuOver: (itemHandlerRef: RefObject<HTMLSpanElement>, tooltipRef: RefObject<HTMLDivElement>, pathName: string, item: {
    icon: string;
    route: string;
    label: string;
}, index: number, submenuIndex: number | undefined, isOpen: boolean) => void;
declare const onMenuOut: (prefix: string, itemHandlerRef: RefObject<HTMLSpanElement>, tooltipRef: RefObject<HTMLDivElement>, pathName: string, isOpen: boolean, data: TData[], currentOpenSubmenus: number | null) => void;
export { onMenuOver, onMenuOut, onKeyDown };
//# sourceMappingURL=events.d.ts.map