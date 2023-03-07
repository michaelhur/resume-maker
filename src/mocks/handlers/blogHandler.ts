import { rest } from 'msw';
import { blogs } from '../data/blogs';
import { Blog } from '@typings/blog';
import { v4 } from 'uuid';

export const blogHandler = [
    rest.get('/api/users/:userId/blogs', (req, res, ctx) => {
        const { userId } = req.params;
        const userBlog = blogs.filter((blog) => blog.userId === userId);

        return res(ctx.status(200), ctx.json(userBlog));
    }),

    rest.post('/api/blogs', async (req, res, ctx) => {
        const blogId = v4();
        let newBlog = (await req.json()) as Blog;
        // check if userId is in the request body. if not, use recoil state
        newBlog = { ...newBlog, blogId };
        blogs.push(newBlog);

        return res(ctx.status(200), ctx.json(blogs));
    }),

    rest.get('/api/blogs/:blogId', (req, res, ctx) => {
        const { blogId } = req.params;
        const blogInfo = blogs.filter((blog) => blog.blogId === blogId);

        return res(ctx.status(200), ctx.json(blogInfo));
    }),

    rest.patch('/api/blogs/:blogId', async (req, res, ctx) => {
        const { blogId } = req.params;
        const body = (await req.json()) as Blog;

        const idx = blogs.findIndex((blog) => blog.blogId === blogId);
        const prevBlog = blogs[idx];
        const newBlog = { ...prevBlog, ...body };

        if (idx !== -1) {
            blogs[idx] = newBlog;
            return res(ctx.status(200), ctx.json(newBlog));
        } else {
            return res(ctx.status(404));
        }
    }),

    rest.delete('/api/blogs/:blogId', (req, res, ctx) => {
        const { blogId } = req.params;
        const idx = blogs.findIndex((blog) => blog.blogId === blogId);

        if (idx !== -1) {
            blogs.splice(idx, 1);
            return res(ctx.status(200), ctx.json(blogs));
        } else {
            return res(ctx.status(404));
        }
    }),
];
