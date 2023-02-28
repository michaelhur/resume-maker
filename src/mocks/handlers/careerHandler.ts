import { rest } from 'msw';
import { careerList } from '../data/career';
import { Career } from '../../types/resume';
import { v4 } from 'uuid';

export const careerHandler = [
    rest.get('/api/users/:userId/career', (req, res, ctx) => {
        const { userId } = req.params;
        const userCareer = careerList.filter((career) => career.userId === userId);

        return res(ctx.status(200), ctx.json(userCareer));
    }),

    rest.post('/api/career', async (req, res, ctx) => {
        const careerId = v4();
        let newCareer = (await req.json()) as Career;
        // check if userId is in the request body. if not, use recoil state
        newCareer = { ...newCareer, careerId };
        careerList.push(newCareer);

        return res(ctx.status(200), ctx.json(careerList));
    }),

    rest.get('/api/career/:careerId', (req, res, ctx) => {
        const { careerId } = req.params;
        const careerInfo = careerList.filter((career) => career.careerId === careerId);

        return res(ctx.status(200), ctx.json(careerInfo));
    }),

    rest.patch('/api/career/:careerId', async (req, res, ctx) => {
        const { careerId } = req.params;
        const body = (await req.json()) as Career;

        const idx = careerList.findIndex((career) => career.careerId === careerId);
        const prevcareer = careerList[idx];
        const newcareer = { ...prevcareer, ...body };

        if (idx !== -1) {
            careerList[idx] = newcareer;
            return res(ctx.status(200), ctx.json(newcareer));
        } else {
            return res(ctx.status(404));
        }
    }),

    rest.delete('/api/career/:careerId', (req, res, ctx) => {
        const { careerId } = req.params;
        const idx = careerList.findIndex((career) => career.careerId === careerId);

        if (idx !== -1) {
            careerList.splice(idx, 1);
            return res(ctx.status(200), ctx.json(careerList));
        } else {
            return res(ctx.status(404));
        }
    }),
];
