import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	server: {
		prerender: {
			crawlLinks: true,
			routes: ["/", "/chaos", "/experience", "/tools"],
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
