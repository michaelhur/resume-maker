import React from 'react';
import ReactDOM from 'react-dom';

import * as Styled from './Loading.styles';
import SVG from 'react-inlinesvg';

function Loading() {
    return ReactDOM.createPortal(
        <Styled.Root>
            <SVG src="./vite.svg" width={60} height={60} />
        </Styled.Root>,
        document.querySelector('#root') as Element,
    );
}

export default Loading;
