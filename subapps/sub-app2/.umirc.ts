import { defineConfig } from "umi";

export default defineConfig({
  hash: true,
  routes: [
    // { path: '/', redirect: '/home' },
    { path: "/home", component: "index" },
    { path: "/docs", component: "docs" },
  ],
});
