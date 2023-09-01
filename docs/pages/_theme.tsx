import React from "react";
import { createTheme, defaultSideNavs } from "vite-pages-theme-doc";
import "../../src/styles/global.scss";

import Component404 from "./404";

const theme = createTheme({
  logo: <div style={{ fontSize: "20px" }}>📘 Design System</div>,
  topNavs: [
    {
      label: "Index",
      path: "/",
      activeIfMatch: {
        // match all first-level paths
        path: "/:foo",
        end: true,
      },
    },
    {
      label: "Components",
      path: "/components/Button",
      activeIfMatch: "/components",
    },
  ],
  sideNavs: (ctx) => {
    return defaultSideNavs(ctx, {
      groupConfig: {
        components: {
          demos: {
            label: "Demos (dev only)",
            order: -1,
          },
          general: {
            label: "General",
            order: 1,
          },
          "data-display": {
            label: "Data Display",
            order: 2,
          },
        },
      },
    });
  },
  Component404,
});

export default theme;
