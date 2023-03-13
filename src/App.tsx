import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { TabMenu } from '@components/TabMenu/TabMenu';
import { Header } from '@components/Header/Header';
import { Footer } from '@components/Footer/Footer';
import { PROFILE_TAB_MENU } from '@constants/routes';
import { Main } from '@layouts/Main/Main';
import { QueryClientProvider } from '@tanstack/react-query';
import { getClient } from '@src/queryClient';

const Profile = lazy(() => import('@pages/Profile'));
const Portfolio = lazy(() => import('@pages/Portfolio'));
const Blog = lazy(() => import('@pages/Blog'));

function App() {
    const queryClient = getClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Main>
                <Header />
                <Suspense fallback={<></>}>
                    <Router>
                        <TabMenu menus={PROFILE_TAB_MENU} size={'large'} position={'all'} />
                        <Routes>
                            <Route path="/blog" element={<Blog />} />
                            <Route path="/profile" element={<Profile />} />
                            <Route path="/portfolio" element={<Portfolio />} />
                        </Routes>
                    </Router>
                </Suspense>
            </Main>
            <Footer />
        </QueryClientProvider>
    );
}

export default App;
