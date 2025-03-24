import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const target = "https://prod-auction-backend.vercel.app";

export default defineConfig({
	plugins: [react()],
	server: {
		proxy: {
			"/api": {
				target,
				changeOrigin: true,
				secure: true,
				rewrite: (path) => path.replace(/^\/api/, ""),
			},
		},
	},
});
