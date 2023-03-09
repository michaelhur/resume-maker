import React, { lazy, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from '@components/Header/Header';

import Loading from '@components/Loading/Loading';

const Profile = lazy(() => import('@pages/Profile'));
const Portfolio = lazy(() => import('@pages/Portfolio'));
const Blog = lazy(() => import('@pages/Blog'));

function App() {
    return (
        <>
            <RecoilRoot>
                <Suspense fallback={<Loading />}>
                    <Router>
                        <Header />
                        <Routes>
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                        </Routes>
                    </Router>
                </Suspense>
            </RecoilRoot>
        </>
    );
}

export default App;
