import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.zetterberg123.com",

	build: {
		assets: "assets",
	},

	integrations: [
		icon(),
		sitemap({
			filter: (page) => page !== "https://www.zetterberg123.com/about/",
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});
