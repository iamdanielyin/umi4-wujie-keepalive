import { defineConfig } from "umi";

export default defineConfig({
  hash: true,
  routes: [
    { path: "/home", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'npm',
});
