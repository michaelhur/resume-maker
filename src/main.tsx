import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Global } from '@emotion/react';
import { globalStyle } from '@styles/globalStyle';
import { RecoilRoot } from 'recoil';

if (process.env.NODE_ENV === 'development') {
    import('./mocks');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <RecoilRoot>
        <Global styles={globalStyle} />
        <App />
    </RecoilRoot>,
);
