import { userHandler } from './userHandler';
import { eduHandler } from './eduHandler';
import { careerHandler } from './careerHandler';
import { questionHandler } from './questionHandler';
import { portfolioHandler } from './portfolioHandler';
import { blogHandler } from './blogHandler';

export const handlers = [
    ...userHandler,
    ...eduHandler,
    ...careerHandler,
    ...questionHandler,
    ...portfolioHandler,
    ...blogHandler,
];
