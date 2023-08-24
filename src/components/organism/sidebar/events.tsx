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

const onKeyDown = (
  event: KeyboardEvent<HTMLElement>,
  currentFocusedMenu: MutableRefObject<number>,
) => {
  const sidebarRef = event.currentTarget as HTMLDivElement;
  const menus = sidebarRef.childNodes[1].childNodes;

  switch (event.key) {
    case "ArrowDown": {
      if (currentFocusedMenu.current === menus.length - 1) return;
      currentFocusedMenu.current += 1;

      const anchor = menus[currentFocusedMenu.current]?.firstChild
        ?.firstChild as HTMLAnchorElement;

      if (anchor !== null) anchor.focus();
      break;
    }
    case "ArrowUp": {
      if (currentFocusedMenu.current === 2) return;

      currentFocusedMenu.current -= 1;

      const anchor = menus[currentFocusedMenu.current]?.firstChild
        ?.firstChild as HTMLAnchorElement;

      if (anchor !== null) anchor.focus();
      break;
    }
    case " ": {
      const anchor = event.target as HTMLAnchorElement;

      if (anchor instanceof HTMLAnchorElement) {
        anchor.click();
      }
    }
  }
};

const onMenuOver = (
  itemHandlerRef: RefObject<HTMLSpanElement>,
  tooltipRef: RefObject<HTMLDivElement>,
  pathName: string,
  item: { icon: string; route: string; label: string },
  index: number,
  submenuIndex = 0,
  isOpen: boolean,
) => {
  if (itemHandlerRef.current === null || tooltipRef.current === null) return;

  if (item.route === pathName) {
    itemHandlerRef.current.classList.add("active");
  }

  if (
    itemHandlerRef.current.classList.contains("active") &&
    item.route !== pathName
  ) {
    itemHandlerRef.current.classList.remove("active");
  }
  if (!isOpen) {
    tooltipRef.current.innerHTML = `
      <div className="sidebar-tooltip-container">
        <span>${item.label}</span>
      </div>
    `;
    tooltipRef.current.style.opacity = "1";
    tooltipRef.current.style.top = `calc(48px * ${index + submenuIndex})`;
  }

  itemHandlerRef.current.style.top = `calc(48px * ${index + submenuIndex})`;
};

const onMenuOut = (
  itemHandlerRef: RefObject<HTMLSpanElement>,
  tooltipRef: RefObject<HTMLDivElement>,
  pathName: string,
  isOpen: boolean,
  data: TData[],
  currentOpenSubmenus: number | null,
) => {
  {
    if (itemHandlerRef.current === null || tooltipRef.current === null) return;

    let menuIndex = -1;

    if (!isOpen) {
      tooltipRef.current.innerHTML = "";
      tooltipRef.current.style.opacity = "0";
    }

    data.forEach((item, index) => {
      if (item.route === pathName) menuIndex = index;

      if (currentOpenSubmenus !== null) {
        menuIndex += data[currentOpenSubmenus].submenus!.length
      }

      if (!Object.hasOwnProperty.call(item, "submenus")) return;

      item.submenus!.forEach((submenu, submenuIndex) => {
        if (`${item.route}${submenu.route}` === pathName) {
          if (currentOpenSubmenus === index) {
            menuIndex = index + submenuIndex + 1;
          } else {
            menuIndex = index;
          }
        }
      });
    });

    (document.activeElement as HTMLElement)?.blur();

    if (menuIndex > -1) {
      itemHandlerRef.current.style.top = `calc(48px * ${menuIndex})`;
      itemHandlerRef.current.classList.add("active");
    }
  }
};

export { onMenuOver, onMenuOut, onKeyDown };
