// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [],
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["bootstrap"],
    },
  },
  plugins: [{ src: "@/plugins/bootstrap", mode: "client" }],
  css: ["bootstrap/dist/css/bootstrap.min.css", "~/assets/style/global.less"],
});
