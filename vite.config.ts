import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
        }),
        svgr(),
    ],
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, './public'),
            '@src': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, '/src/assets'),
            '@components': path.resolve(__dirname, '/src/components'),
            '@hooks': path.resolve(__dirname, '/src/hooks'),
            '@pages': path.resolve(__dirname, '/src/pages'),
            '@utils': path.resolve(__dirname, '/src/utils'),
            '@styles': path.resolve(__dirname, '/src/styles'),
            '@types': path.resolve(__dirname, '/src/types'),
        },
    },
});
