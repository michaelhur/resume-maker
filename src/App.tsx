import React, { lazy } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '@components/Header/Header';

import Profile from '@pages/Profile';
import Portfolio from '@pages/Portfolio';

function App() {
    return (
        <>
            <RecoilRoot>
                <Router>
                    <Header />
                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                    </Routes>
                </Router>
            </RecoilRoot>
        </>
    );
}

export default App;
