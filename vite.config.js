import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), "@tailwindcss/postcss"],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@Components": path.resolve(__dirname, "./src/Components"),
            "@Section": path.resolve(__dirname, "./src/Section"),
            "@constants": path.resolve(__dirname, "./src/constants"),
        },
    },
});
