import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'
import * as path from "path";

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    esbuild: {
        supported: {
            'top-level-await': true
        },
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    tanstack: ['@tanstack/react-query', '@tanstack/react-table'],
                    react_hook_form: ['react-hook-form'],
                    tailwind_merge: ['tailwind-merge', 'tailwindcss-animate'],
                    react_router_dom: ['react-router-dom'],
                    vaul: ['vaul'],
                    zod: ['zod']
                }
            }
        }
    }
});

