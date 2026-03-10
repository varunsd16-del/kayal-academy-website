import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://kayalacademy.com",
    compressHTML: true,
    trailingSlash: "never",

    image: {
        service: {
            entrypoint: "astro/assets/services/sharp"
        }
    },

    integrations: [sitemap()]
});