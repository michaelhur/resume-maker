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
        svgr({
            exportAsDefault: false,
            svgrOptions: {
                icon: 'current',
                memo: true,
            },
        }),
    ],
    resolve: {
        alias: [
            { find: '@public', replacement: path.resolve(__dirname, '/public') },
            { find: '@src', replacement: path.resolve(__dirname, '/src') },
            { find: '@assets', replacement: path.resolve(__dirname, '/src/assets') },
            { find: '@components', replacement: path.resolve(__dirname, '/src/components') },
            { find: '@constants', replacement: path.resolve(__dirname, '/src/constants') },
            { find: '@hooks', replacement: path.resolve(__dirname, '/src/hooks') },
            { find: '@layouts', replacement: path.resolve(__dirname, '/src/layouts') },
            { find: '@pages', replacement: path.resolve(__dirname, '/src/pages') },
            { find: '@utils', replacement: path.resolve(__dirname, '/src/utils') },
            { find: '@recoils', replacement: path.resolve(__dirname, '/src/recoils') },
            { find: '@styles', replacement: path.resolve(__dirname, '/src/styles') },
            { find: '@typings', replacement: path.resolve(__dirname, '/src/typings') },
        ],
    },
});
