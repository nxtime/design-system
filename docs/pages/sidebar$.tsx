import React from "react";
import { Sidebar } from "../../src/index";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { initAppTranslation } from "translation-system";

const demoSidebarData = [
  {
    label: "home",
    route: "/",
    icon: "fluent:home-20-filled",
  },
  {
    label: "dashboard",
    route: "/dashboard",
    icon: "bi:people-fill",
    submenus: [
      {
        label: "services",
        route: "/services",
        icon: "typcn:group",
      },
      {
        label: "calls",
        route: "/calls",
        icon: "majesticons:clock",
      },
      {
        label: "general",
        route: "/reports",
        icon: "majesticons:clock",
      },
    ],
  },
  {
    label: "real-time",
    route: "/real-time",
    icon: "ic:outline-preview",
  },
];

const SidebarPage = () => {
  const { pathname } = useLocation();
  initAppTranslation({ language: "pt-BR" });

  console.log(pathname);
  return (
    <div style={{ height: "100%" }}>
      <Sidebar
        data={demoSidebarData}
        // prefix="#hello/"
        pathname={pathname}
        itemLink={({ route, icon, isOpen, label }) => {
          return (
            <a href={`#hello${route}`}>
              <Icon icon={icon} />
              {isOpen && <span>{label}</span>}
            </a>
          );
        }}
        onSettings={() => {}}
        onLogout={() => {
          console.log("Logging out")
        }}
      />
    </div>
  );
};

export default SidebarPage;
