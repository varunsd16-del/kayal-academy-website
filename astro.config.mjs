import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
    site: "https://kayalacademy.com",
    compressHTML: true,

    // FIX: Changed from 'ignore' to 'never'
    // 'ignore' was causing a redirect loop:
    //   Google crawls /about → host redirects to /about/ → Astro has no /about/ → redirect error
    // 'never' tells Astro to always build /about.html (no trailing slash)
    // and tells the host not to add one — loop eliminated.
    trailingSlash: "never",

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
