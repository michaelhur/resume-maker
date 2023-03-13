const API_BASE_URL = 'http://localhost:5173';

type AnyOBJ = { [key: string]: any };

export const fetcher = async ({
    method,
    path,
    body,
    params,
}: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    path: string;
    body?: AnyOBJ;
    params?: AnyOBJ;
}) => {
    try {
        let url = `${API_BASE_URL}${path}`;
        console.log('fetch url is', url);
        const fetchOptions: RequestInit = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': API_BASE_URL,
            },
        };
        if (params) {
            const searchParams = new URLSearchParams(params);
            url += '?' + searchParams.toString();
        }

        if (body) fetchOptions.body = JSON.stringify(body);

        const res = await fetch(url, fetchOptions);
        const json = await res.json();
        return json;
    } catch (err) {
        console.log(err);
    }
};
