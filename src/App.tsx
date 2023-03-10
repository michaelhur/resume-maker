import React, { lazy, Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from '@components/Loading/Loading';
import { TabMenu } from '@components/TabMenu/TabMenu';
import { Header } from '@layouts/Header/Header';
import { Footer } from '@layouts/Footer/Footer';
import { PROFILE_TAB_MENU } from '@constants/routes';

const Profile = lazy(() => import('@pages/Profile'));
const Portfolio = lazy(() => import('@pages/Portfolio'));
const Blog = lazy(() => import('@pages/Blog'));

function App() {
    return (
        <>
            <RecoilRoot>
                <Header />
                <Suspense fallback={<Loading />}>
                    <Router>
                        <TabMenu menus={PROFILE_TAB_MENU} size={'large'} position={'all'} />
                        <Routes>
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                        </Routes>
                    </Router>
                </Suspense>
                <Footer />
            </RecoilRoot>
        </>
    );
}

export default App;
