import { ReactNode } from "react";
interface ISidebarProps {
    data: {
        label: string;
        icon: string;
        route: string;
        submenus?: {
            label: string;
            route: string;
            icon: string;
        }[];
    }[];
    onLogout?: () => void;
    onSettings?: () => void;
    pathname: string;
    itemLink: (_item: {
        icon: string;
        label: string;
        isOpen: boolean;
        route: string;
        props: {
            className: string;
            onClick?: () => void;
        };
    }) => ReactNode;
}
declare const Sidebar: ({ data, itemLink, onSettings, onLogout, pathname, }: ISidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
//# sourceMappingURL=index.d.ts.map