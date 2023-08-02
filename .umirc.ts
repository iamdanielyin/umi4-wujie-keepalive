import { defineConfig } from "umi";

export default defineConfig({
  hash: true,
  antd: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    { path: "/home", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/subapps/:id", component: "subapps" },
  ]
});
