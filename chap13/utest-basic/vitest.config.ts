import {fileURLToPath, URL} from "url";
import {defineConfig} from "vite";
import Vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [
		Vue()
	],
	test: {
		globals: true,
		environment: "jsdom"
	},
	resolve: {
		alias: {
		  "@": fileURLToPath(new URL("./src", import.meta.url))
		}
	}
});
