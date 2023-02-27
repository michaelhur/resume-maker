import { rest } from 'msw';

export const handlers = [
    rest.get('/api/users/:userId', (req, res, ctx) => {
        const { userId } = req.params;
        console.log(userId);

        return res(
            ctx.status(200),
            ctx.json({
                username: 'admin',
                userId,
            }),
        );
    }),
];
