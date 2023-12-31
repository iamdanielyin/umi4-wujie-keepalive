import { defineConfig } from "umi";

export default defineConfig({
  hash: true,
  antd: {},
  model: {},
  initialState: {},
  request: {},
  routes: [
    { path: '/', redirect: '/home' },
    { path: "/home", component: "index" },
    { path: "/docs", component: "docs" },
    { path: "/subapps/:id", component: "subapps" },
  ]
});
