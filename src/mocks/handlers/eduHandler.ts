import { rest } from 'msw';
import { educationList } from '../data/education';
import { Education } from '@typings/resume';
import { v4 } from 'uuid';

export const eduHandler = [
    rest.get('/api/users/:userId/education', (req, res, ctx) => {
        const { userId } = req.params;
        const userEducation = educationList.filter((edu) => edu.userId === userId);

        return res(ctx.status(200), ctx.json(userEducation));
    }),

    rest.post('/api/education', async (req, res, ctx) => {
        const eduId = v4();
        let newEducation = (await req.json()) as Education;
        // check if userId is in the request body. if not, use recoil state
        newEducation = { ...newEducation, eduId };
        educationList.push(newEducation);

        return res(ctx.status(200), ctx.json(educationList));
    }),

    rest.get('/api/education/:eduId', (req, res, ctx) => {
        const { eduId } = req.params;
        const eduInfo = educationList.filter((edu) => edu.eduId === eduId);

        return res(ctx.status(200), ctx.json(eduInfo));
    }),

    rest.patch('/api/education/:eduId', async (req, res, ctx) => {
        const { eduId } = req.params;
        const body = (await req.json()) as Education;

        const idx = educationList.findIndex((edu) => edu.eduId === eduId);
        const prevEdu = educationList[idx];
        const newEdu = { ...prevEdu, ...body };

        if (idx !== -1) {
            educationList[idx] = newEdu;
            return res(ctx.status(200), ctx.json(newEdu));
        } else {
            return res(ctx.status(404));
        }
    }),

    rest.delete('/api/education/:eduId', (req, res, ctx) => {
        const { eduId } = req.params;
        const idx = educationList.findIndex((edu) => edu.eduId === eduId);

        if (idx !== -1) {
            educationList.splice(idx, 1);
            return res(ctx.status(200), ctx.json(educationList));
        } else {
            return res(ctx.status(404));
        }
    }),
];
