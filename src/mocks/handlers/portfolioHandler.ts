import { rest } from 'msw';
import { v4 } from 'uuid';
import { portfolioList } from '../data/portfolio';
import { Portfolio } from '../../types/portfolio';

export const portfolioHandler = [
    rest.get('/api/users/:userId/portfolio', (req, res, ctx) => {
        const { userId } = req.params;
        const userProject = portfolioList.filter((project) => project.userId === userId);

        return res(ctx.status(200), ctx.json(userProject));
    }),

    rest.post('/api/portfolio', async (req, res, ctx) => {
        const projectId = v4();
        let newProject = (await req.json()) as Portfolio;
        // check if userId is in the request body. if not, use recoil state
        newProject = { ...newProject, projectId };
        portfolioList.push(newProject);

        return res(ctx.status(200), ctx.json(portfolioList));
    }),

    rest.get('/api/portfolio/:projectId', (req, res, ctx) => {
        const { projectId } = req.params;
        const projectInfo = portfolioList.filter((project) => project.projectId === projectId);

        return res(ctx.status(200), ctx.json(projectInfo));
    }),

    rest.patch('/api/portfolio/:projectId', async (req, res, ctx) => {
        const { projectId } = req.params;
        const body = (await req.json()) as Portfolio;

        const idx = portfolioList.findIndex((project) => project.projectId === projectId);
        const prevProject = portfolioList[idx];
        const newProject = { ...prevProject, ...body };

        if (idx !== -1) {
            portfolioList[idx] = newProject;
            return res(ctx.status(200), ctx.json(newProject));
        } else {
            return res(ctx.status(404));
        }
    }),

    rest.delete('/api/portfolio/:projectId', (req, res, ctx) => {
        const { projectId } = req.params;
        const idx = portfolioList.findIndex((project) => project.projectId === projectId);

        if (idx !== -1) {
            portfolioList.splice(idx, 1);
            return res(ctx.status(200), ctx.json(portfolioList));
        } else {
            return res(ctx.status(404));
        }
    }),
];
