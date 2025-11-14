import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig(({ command, mode }) => {
    const isDev = command === 'serve'

    return {
        plugins: [
            react({
                fastRefresh: isDev, // ✅ solo en desarrollo
                jsxRuntime: 'automatic',
            }),
        ],
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
                '@components': path.resolve(__dirname, './src/components'),
                '@assets': path.resolve(__dirname, './src/assets'),
                '@utils': path.resolve(__dirname, './src/utils'),
            },
        },
        server: {
            port: 5173,
            strictPort: true,
            open: true,
            cors: true,
            headers: {
                'Content-Security-Policy': "script-src 'self' 'unsafe-eval';", // ⚠️ solo en desarrollo
            },
        },
        build: {
            target: 'esnext',
            minify: 'esbuild',
            sourcemap: false,
            outDir: 'dist',
            assetsDir: 'assets',
        },
        css: {
            modules: {
                localsConvention: 'camelCaseOnly',
                generateScopedName: isDev
                    ? '[name]__[local]__[hash:base64:5]'
                    : '[hash:base64:8]',
            },
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/styles/global.scss";`,
                },
            },
        },
        define: {
            __DEV__: isDev,
        },
        clearScreen: false,
        logLevel: 'info',
    }
})