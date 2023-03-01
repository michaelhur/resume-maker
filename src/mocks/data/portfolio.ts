import { Portfolio } from '../../types/portfolio';

export const portfolioList: Portfolio[] = [
    {
        userId: 'e050ef0a-007a-4268-9039-a7c147b9f207',
        projectId: '6ce58e62-a19f-4ece-b4f5-3a6d8257d851',
        projectName: '프로젝트 1',
        images: [
            'https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs',
        ],
        description: '',
        projectLink: [
            {
                link: 'https://github.com/michaelhur/resume-maker',
                downloadCount: 10,
            },
        ],
        projectOrder: 2,
        viewCount: 10,
        likeCount: 4,
        commentCount: 2,
        createdAt: 1677482136,
        updatedAt: 1677482136,
    },
    {
        userId: 'e050ef0a-007a-4268-9039-a7c147b9f207',
        projectId: '6ce58e62-a19f-4ece-b4f5-3a6d8257d853',
        projectName: '프로젝트 2',
        images: [
            'https://fastly.picsum.photos/id/856/200/300.jpg?hmac=aENqXLQRhaJimtL7dToYysOgNeVwtibR-Gj5IUAS4I4',
            'https://fastly.picsum.photos/id/240/200/300.jpg?hmac=oqwZqcYrZ2nqhtDKiob6qVc3u_vuKLh89nVzKs_jnNg',
        ],
        description: '',
        projectLink: [
            {
                link: 'https://github.com/michaelhur/resume-maker',
                downloadCount: 10,
            },
        ],
        projectOrder: 1,
        viewCount: 11,
        likeCount: 4,
        commentCount: 0,
        createdAt: 1677482137,
        updatedAt: 1677482137,
    },
];
