import './App.css';
import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

function App() {
    const [title, setTitle] = useState('No Title');

    const handleGetReview = () => {
        fetch('/api/users/123')
            .then((res) => res.json())
            .then((res) => setTitle(res.username));
    };

    return (
        <RecoilRoot>
            <div className="App">{title}</div>
            <button onClick={handleGetReview}>Change Title</button>
        </RecoilRoot>
    );
}

export default App;
