import React from "react";
import { Sidebar } from "../../src/index";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";

const demoSidebarData = [
  {
    label: "Home",
    route: "/",
    icon: "fluent:home-20-filled",
  },
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: "bi:people-fill",
    submenus: [
      {
        label: "Services",
        route: "/services",
        icon: "typcn:group",
      },
      {
        label: "Calls",
        route: "/calls",
        icon: "majesticons:clock",
      },
      {
        label: "Reports",
        route: "/reports",
        icon: "majesticons:clock",
      },
    ],
  },
  {
    label: "Real Time",
    route: "/real-timee",
    icon: "ic:outline-preview",
  },
];

const SidebarPage = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <div style={{ height: "100%" }}>
      <Sidebar
        data={demoSidebarData}
        prefix="#hello/"
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
