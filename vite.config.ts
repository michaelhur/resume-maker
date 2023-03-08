import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
        }),
        svgr(),
    ],
    resolve: {
        alias: [
            { find: '@public', replacement: path.resolve(__dirname, '/public') },
            { find: '@fonts', replacement: path.resolve(__dirname, '/public/assets/fonts') },
            { find: '@icons', replacement: path.resolve(__dirname, '/public/assets/icons') },
            { find: '@src', replacement: path.resolve(__dirname, '/src') },
            { find: '@assets', replacement: path.resolve(__dirname, '/src/assets') },
            { find: '@constants', replacement: path.resolve(__dirname, '/src/constants') },
            { find: '@components', replacement: path.resolve(__dirname, '/src/components') },
            { find: '@hooks', replacement: path.resolve(__dirname, '/src/hooks') },
            { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
            { find: '@utils', replacement: path.resolve(__dirname, '/src/utils') },
            { find: '@recoils', replacement: path.resolve(__dirname, '/src/recoils') },
            { find: '@styles', replacement: path.resolve(__dirname, '/src/styles') },
            { find: '@typings', replacement: path.resolve(__dirname, '/src/typings') },
        ],
    },
});
