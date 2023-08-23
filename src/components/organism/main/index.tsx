import { Icon } from "@iconify/react/dist/iconify.js";
import Header from "../header";
import Sidebar from "../sidebar";
import { ReactNode } from "react";
import Select from "../../molecule/select";

const sidebarData = [
  {
    label: "Home",
    route: "/home",
    icon: "fluent:home-20-filled",
  },
  {
    label: "Dashboard",
    route: "/dashboard",
    icon: "ic:round-dashboard",
  },
  {
    label: "Staffing",
    route: "/staffing",
    icon: "bi:people-fill",
    submenus: [
      {
        label: "Workgroups",
        route: "/workgroups",
        icon: "typcn:group",
      },
      {
        label: "Scales",
        route: "/scales",
        icon: "majesticons:clock",
      },
    ],
  },
  {
    label: "Forcast",
    route: "/forcast",
    icon: "ic:outline-preview",
  },
];

interface IMainProps {
  children: ReactNode;
}

const countriesFlag = {
  pt: "twemoji:flag-brazil",
  en: "emojione-v1:flag-for-united-states",
  es: "twemoji:flag-spain",
};

const HeaderItems = () => {
  return (
    <div className="container row">
      <Select
        style={{ width: "18ch" }}
        items={[
          {
            label: "Portuguese",
            id: "pt",
          },
          {
            label: "English",
            id: "en",
          },
          {
            label: "Spanish",
            id: "es",
          },
        ]}
        keyExtractor={(item) => (
          <div className="container row">
            <Icon icon={countriesFlag[item.id as "pt"]} />
            <span>{item.label}</span>
          </div>
        )}
      />
    </div>
  );
};

const Main = ({ children }: IMainProps) => {
  return (
    <div className="container no-gap bg-base-200">
      <Header
        logo={
          <h2>
            <a href="#/home">Intelligence</a>
          </h2>
        }
        items={<HeaderItems />}
      />
      <div className="container no-gap row" style={{ flex: 1 }}>
        <Sidebar
          data={sidebarData}
          itemLink={({ icon, label, isOpen, route, props }) => (
            <a key={route} href={`#${route}`} {...props}>
              <Icon icon={icon} />
              {isOpen && <span>{label}</span>}
            </a>
          )}
        />
        <div className="main custom-scroll">{children}</div>
      </div>
    </div>
  );
};

export default Main;
