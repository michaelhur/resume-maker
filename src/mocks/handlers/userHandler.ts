import { rest } from 'msw';
import { users } from '../data/users';
import { User } from '../../types/user';

export const userHandler = [
    rest.get('/api/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json(users));
    }),

    rest.get<User[]>('/api/users/:userId', (req, res, ctx) => {
        const { userId } = req.params;
        const userInfo = users.find((user) => user.id === userId);

        if (!userInfo) {
            return res(ctx.status(400));
        }

        return res(ctx.status(200), ctx.json(userInfo));
    }),

    rest.patch('/api/users/:userId', async (req, res, ctx) => {
        const { userId } = req.params;
        const body = (await req.json()) as User;

        const idx = users.findIndex((user) => user.id === userId);
        const prevUser = users[idx];
        const newUser = { ...prevUser, ...body };

        if (idx !== -1) {
            users[idx] = newUser;
            return res(ctx.status(200), ctx.json(newUser));
        } else {
            return res(ctx.status(404));
        }
    }),
];
