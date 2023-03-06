import './App.css';
import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

function App() {
    const [isDark, setIsDark] = useState<boolean>(false);

    const onClickHandler = () => {
        const isDarkMode = document.body.classList.contains('dark-mode');

        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
            setIsDark(true);
        } else {
            document.body.classList.remove('dark-mode');
            setIsDark(false);
        }
    };
    return (
        <RecoilRoot>
            <span>{isDark}</span>
            <button onClick={onClickHandler}>Click!</button>
        </RecoilRoot>
    );
}

export default App;
