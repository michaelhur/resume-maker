import React from 'react';
import { RecoilRoot } from 'recoil';
import { Header } from '@components/Header/Header';
// import { ReactComponent as Add } from '@assets/icons/add.svg';

function App() {
    return (
        <>
            <RecoilRoot>
                <Header />
            </RecoilRoot>
        </>
    );
}

export default App;
