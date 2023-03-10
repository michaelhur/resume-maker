import axios, { AxiosRequestConfig } from 'axios';

const API_BASE_URL = 'http://localhost:5173';

type AnyOBJ = { [key: string]: any };

export const fetcher = async ({
    method,
    path,
    body,
    params,
}: {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch';
    path: string;
    body?: AnyOBJ;
    params?: AnyOBJ;
}) => {
    try {
        let url = `${API_BASE_URL}${path}`;

        if (params) {
            const searchParams = new URLSearchParams(params);
            url += '?' + searchParams.toString();
        }

        const fetchOptions: AxiosRequestConfig = {
            method,
            url,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': API_BASE_URL,
            },
        };

        if (body) fetchOptions.data = JSON.stringify(body);

        const res = await axios(fetchOptions);
        const resData = await res.data;
        return resData;
    } catch (err) {
        console.log(err);
    }
};
