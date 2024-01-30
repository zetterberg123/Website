import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
	site: "https://www.zetterberg123.com",
	integrations: [
		icon(),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap({
			filter: (page) => page !== "https://www.zetterberg123.com/about/",
		}),
	],
});
