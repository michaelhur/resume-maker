import { rest } from 'msw';
import { v4 } from 'uuid';
import { questions } from '../data/questions';
import { Question } from '../../types/question';

export const questionHandler = [
    rest.get('/api/users/:userId/questions', (req, res, ctx) => {
        const { userId } = req.params;
        const userQuestion = questions.filter((question) => question.userId === userId);

        return res(ctx.status(200), ctx.json(userQuestion));
    }),

    rest.post('/api/questions', async (req, res, ctx) => {
        const questionId = v4();
        let newQuestion = (await req.json()) as Question;
        // check if userId is in the request body. if not, use recoil state
        newQuestion = { ...newQuestion, questionId };
        questions.push(newQuestion);

        return res(ctx.status(200), ctx.json(questions));
    }),

    rest.get('/api/questions/:questionId', (req, res, ctx) => {
        const { questionId } = req.params;
        const questionInfo = questions.filter((question) => question.questionId === questionId);

        return res(ctx.status(200), ctx.json(questionInfo));
    }),

    rest.patch('/api/questions/:questionId', async (req, res, ctx) => {
        const { questionId } = req.params;
        const body = (await req.json()) as Question;

        const idx = questions.findIndex((question) => question.questionId === questionId);
        const prevQuestion = questions[idx];
        const newQuestion = { ...prevQuestion, ...body };

        if (idx !== -1) {
            questions[idx] = newQuestion;
            return res(ctx.status(200), ctx.json(newQuestion));
        } else {
            return res(ctx.status(404));
        }
    }),

    rest.delete('/api/questions/:questionId', (req, res, ctx) => {
        const { questionId } = req.params;
        const idx = questions.findIndex((question) => question.questionId === questionId);

        if (idx !== -1) {
            questions.splice(idx, 1);
            return res(ctx.status(200), ctx.json(questions));
        } else {
            return res(ctx.status(404));
        }
    }),
];
