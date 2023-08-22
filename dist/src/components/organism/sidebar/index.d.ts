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
declare const Sidebar: ({ data, itemLink, onLogout }: ISidebarProps) => import("react/jsx-runtime").JSX.Element;
export default Sidebar;
//# sourceMappingURL=index.d.ts.map