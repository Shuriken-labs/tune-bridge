import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import mkcert from "vite-plugin-mkcert";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), mkcert()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
});
