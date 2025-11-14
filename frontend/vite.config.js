import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import cspPlugin from 'vite-plugin-csp'; // 🧩 Seguridad CSP

export default defineConfig({
    plugins: [
        react(),
        cspPlugin({
            policies: {
                'default-src': ["'self'"],
                'script-src': ["'self'", "'nonce-{{nonce}}'", "'strict-dynamic'"],
                'style-src': ["'self'", "'unsafe-inline'"],
                'img-src': ["'self'", 'data:', 'https:'],
                'connect-src': ["'self'", process.env.VITE_API_URL],
                'object-src': ["'none'"],
                'base-uri': ["'none'"],
                'form-action': ["'none'"]
            },
            meta: true,
            hashEnabled: {
                'script-src': true
            },
            nonceEnabled: {
                'script-src': true
            }
        })
    ],
    resolve: {
        alias: {
            '@i18n': path.resolve(__dirname, 'src/i18n'),
            '@config': path.resolve(__dirname, 'src/config'),
            '@utils': path.resolve(__dirname, 'src/utils'),
            '@docs': path.resolve(__dirname, 'src/docs'),
            '@tests': path.resolve(__dirname, 'src/__tests__'),
            '@types': path.resolve(__dirname, 'src/types'),

            '@api': path.resolve(__dirname, 'src/api'),
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@context': path.resolve(__dirname, 'src/context'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@sections': path.resolve(__dirname, 'src/sections'),
            '@styles': path.resolve(__dirname, 'src/assets/styles'),
            '@visual': path.resolve(__dirname, 'src/assets/visual'),
            '@routes': '/server/routes',
            '@middleware': '/server/middleware',
            '@config': '/server/config',



            // 🔐 Alias defensivos
            '@security': path.resolve(__dirname, 'src/config/security'),
            '@scripts': path.resolve(__dirname, 'scripts'),
            '@meta': path.resolve(__dirname, 'public/meta')
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@import "@styles/theme.scss";`
            }
        }
    },
    server: {
        port: 5173,
        strictPort: true,
        open: true,
        cors: true
    },
    build: {
        outDir: 'dist',
        sourcemap: true
    }
});