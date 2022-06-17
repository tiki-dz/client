import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 8091,
    // port: 3000,
    proxy: {
      "/api/payment/purchase": {
        target: "http://192.168.15.37:7777/service-purchase/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api/admin/codepromo/check": {
        target: "http://192.168.15.37:7777/service-purchase/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api/common/forgetPasswordSendVerificationAccount": {
        target: "http://192.168.15.37:7777/service-auth/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api/client/profile": {
        target: "http://192.168.15.37:7777/service-auth/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api/client/verifyCode": {
        target: "http://192.168.15.37:7777/service-auth/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api/admin/event**": {
        target: "http://192.168.15.37:7777/service-event/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/home/api": {
        target: "http://192.168.15.37:7777/service-event/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/home/subList/api": {
        target: "http://192.168.15.37:7777/service-event/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home\/subList/, ""),
      },
      "/api/payment": {
        target: "http://192.168.15.37:7777/service-purchase/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home\/subList/, ""),
      },

      "/api/admin/event": {
        target: "http://192.168.15.37:7777/service-event/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/api": {
        target: "http://192.168.15.37:7777/service-auth/",
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
