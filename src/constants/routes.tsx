export const ROUTES = {
    HOME: '/',
    SIGN_UP: '/sign-up',
    LOGIN: '/login',
    PROFILE: '/profile',
    WRITE_ABOUT: '/profile/write/about',
    WRITE_RESUME: '/profile/write/resume',
    WRITE_SOCIAL: '/profile/write/social',
    WRITE_CAREER: '/profile/write/career',
    WRITE_EDUCATION: '/profile/write/education',
    WRITE_QNA: '/profile/write/qna',
    BLOG: '/blog',
    VIEW_BLOG: '/blog/:blogId',
    WRITE_BLOG: '/blog/:blogId/write',
    PORTFOLIO: '/portfolio',
    VIEW_PORTFOLIO: '/portfolio/:projectId',
    WRITE_PORTFOLIO: '/portfolio/write',
};

export const PROFILE_TAB_MENU = [
    { name: 'Profile', icon: 'Ui/apps', path: '/profile' },
    { name: 'Blog', icon: 'Editor/Filter', path: '/blog' },
    { name: 'Portfolio', icon: 'Communication/shopping_cart', path: '/portfolio' },
];
