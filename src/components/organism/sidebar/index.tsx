import { Icon } from "@iconify/react/dist/iconify.js";
import { Fragment, ReactNode, useRef, useState } from "react";
import { onKeyDown, onMenuOut, onMenuOver } from "./events";

interface ISidebarProps {
  /*
   * Sidebar data, expects a couple of props
   * To better experience it it should fullfill all of them
   */
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
  /*
   * If provided, will show a leave button at the bottom
   */
  onLogout?: () => void;
  /*
   * If provided, will show a settings button at the bottom
   */
  onSettings?: () => void;
  /*
   * Updated url pathname
   */
  pathname: string;
  /*
   * If there's a prefix,
   * Ex:. (Current App): /wfm
   */
  prefix?: string;
  /*
   * Custom ReactNode for the link on container
   * it receives a couple of props to better custom it
   */
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

const Sidebar = ({
  data,
  itemLink,
  onSettings,
  onLogout,
  prefix = "",
  pathname = "",
}: ISidebarProps) => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const itemHandlerRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const currentFocusedMenu = useRef(3);
  const [isOpen, setIsOpen] = useState(false);
  const [currentOpenSubmenus, changeCurrentOpenSubmenus] = useState<
    null | number
  >(null);

  return (
    <aside
      className="sidebar closed"
      ref={sidebarRef}
      onKeyDown={(event) => onKeyDown(event, currentFocusedMenu)}
    >
      <button
        type="button"
        className="btn btn-square btn-ghost ring-info"
        onClick={() => {
          if (sidebarRef.current === null) return;
          setIsOpen((s) => !s);
          sidebarRef.current.classList.toggle("closed");
        }}
      >
        <Icon icon="jam:menu" height={32} />
      </button>
      <ul
        className="sidebar-container"
        onMouseLeave={() =>
          onMenuOut(
            prefix,
            itemHandlerRef,
            tooltipRef,
            pathname,
            isOpen,
            data,
            currentOpenSubmenus,
          )
        }
      >
        <span ref={itemHandlerRef} className="sidebar-selector" />
        <div ref={tooltipRef} className="sidebar-tooltip" />
        {data.map((item, index) => {
          return (
            <Fragment key={index}>
              <li
                className="sidebar-item"
                onMouseEnter={() =>
                  onMenuOver(
                    itemHandlerRef,
                    tooltipRef,
                    pathname,
                    item,
                    currentOpenSubmenus !== null && index > currentOpenSubmenus
                      ? index + data[currentOpenSubmenus].submenus!.length
                      : index,
                    0,
                    isOpen,
                  )
                }
                onClick={() => {
                  if (item?.submenus) {
                    changeCurrentOpenSubmenus((p) =>
                      p === index ? null : index,
                    );
                  }
                }}
              >
                <div className="sidebar-item--icon">
                  {itemLink({
                    icon: item.icon,
                    label: item.label,
                    route: item.route,
                    isOpen,
                    props: {
                      className: item?.submenus ? "group" : "",
                      onClick: () => {
                        currentFocusedMenu.current = index + 2;
                        if (itemHandlerRef.current)
                          itemHandlerRef.current.classList.toggle("active");
                      },
                    },
                  })}
                </div>
                {item?.submenus && (
                  <div className="sidebar-item--submenu-handler">
                    {isOpen && (
                      <span className="sidebar-item--indicator">
                        {item.submenus.length}
                      </span>
                    )}
                    <Icon
                      icon="ic:round-arrow-right"
                      height={24}
                      rotate={index === currentOpenSubmenus ? 45 : 0}
                    />
                  </div>
                )}
              </li>
              {item?.submenus && index === currentOpenSubmenus && (
                <div className="sidebar-submenu">
                  {item.submenus.map((submenu, submenuIndex) => {
                    return (
                      <div
                        key={submenu.route}
                        className="sidebar-submenu-item"
                        onMouseEnter={() =>
                          onMenuOver(
                            itemHandlerRef,
                            tooltipRef,
                            pathname,
                            submenu,
                            index,
                            submenuIndex + 1,
                            isOpen,
                          )
                        }
                      >
                        {itemLink({
                          icon: submenu.icon,
                          label: submenu.label,
                          route: `${item.route}${submenu.route}`,
                          isOpen,
                          props: { className: "" },
                        })}
                      </div>
                    );
                  })}
                </div>
              )}
            </Fragment>
          );
        })}
      </ul>
      {onSettings && (
        <button
          type="button"
          className="sidebar-settings-action ring-info"
          onClick={onSettings}
        >
          <Icon icon="ph:gear-six-fill" height={16} />
          {isOpen && <span>Settings</span>}
        </button>
      )}
      {onLogout && (
        <button
          type="button"
          className="sidebar-exit-action ring-warning"
          onClick={onLogout}
        >
          <Icon icon="mingcute:exit-fill" height={16} />
          {isOpen && <span>Logout</span>}
        </button>
      )}
    </aside>
  );
};

export default Sidebar;
