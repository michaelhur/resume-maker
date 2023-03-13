import { QueryClient } from '@tanstack/react-query';

export const getClient = (() => {
    let client: QueryClient | null = null;
    return () => {
        if (!client)
            client = new QueryClient({
                defaultOptions: {
                    queries: {
                        cacheTime: 1000 * 60 * 60 * 24,
                        staleTime: 1000 * 5,
                        refetchOnMount: false,
                        refetchOnReconnect: false,
                        refetchOnWindowFocus: false,
                    },
                },
            });
        return client;
    };
})();