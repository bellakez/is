// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        bestilis: resolve(__dirname, "src/bestilis.html"),
        bestiliskategori: resolve(__dirname, "src/bestilis-kategori.html"),
        bestilisliterboks: resolve(__dirname, "src/bestilis-literboks.html"),
        bestilisdinliterboks: resolve(
          __dirname,
          "src/bestilis-dinliterboks.html"
        ),
        bestilisoversigt: resolve(__dirname, "src/bestilis-oversigt.html"),
        kurvfyldt: resolve(__dirname, "src/kurv-fyldt.html"),
        kurvtom: resolve(__dirname, "src/kurv-tom.html"),
        betaling: resolve(__dirname, "src/betaling.html"),
        sortiment: resolve(__dirname, "src/sortiment.html"),
        indhold: resolve(__dirname, "src/indhold.html"),
        faq: resolve(__dirname, "src/faq.html"),
        gavekort: resolve(__dirname, "src/gavekort.html"),
        omismageriet: resolve(__dirname, "src/omismageriet.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        sitemap: resolve(__dirname, "src/sitmap.html"),
        aproved: resolve(__dirname, "src/betaling-aproved.html"),

        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
