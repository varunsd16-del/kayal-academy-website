import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://kayalacademy.com",
    compressHTML: true,
    // Change to 'ignore' to prevent conflicts with host redirects
    trailingSlash: "ignore",

    image: {
        service: {
            entrypoint: "astro/assets/services/sharp"
        }
    },

    integrations: [
        sitemap({
            changefreq: "weekly",
            priority: 0.7,
            // Remove hardcoded Date so Google sees real updates
            // lastmod: new Date() 
        })
    ]
});