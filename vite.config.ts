import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8090,
    // port: 3000,
    proxy: {
      "/api/payment/purchase": {
        target: "http://127.0.0.1:5003",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api/admin/codepromo/check": {
        target: "http://127.0.0.1:5003",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api/common/forgetPasswordSendVerificationAccount": {
        target: "http://127.0.0.1:5001",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api/admin/event**": {
        target: "http://127.0.0.1:5002",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/home/api": {
        target: "http://127.0.0.1:5002",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/home/subList/api": {
        target: "http://127.0.0.1:5002",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home\/subList/, ""),
      },

      "/api/admin/event": {
        target: "http://127.0.0.1:5002",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },

      "/api": {
        target: "http://127.0.0.1:5001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
