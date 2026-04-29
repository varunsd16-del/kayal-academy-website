import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    site: "https://www.kayalacademy.com",
    compressHTML: true,

    trailingSlash: "always",

    adapter: cloudflare(),

    output: "static",

    image: {
        service: {
            entrypoint: "astro/assets/services/sharp"
        }
    },

    integrations: [
        sitemap({
            changefreq: "weekly",
            priority: 0.7,
        })
    ]
});