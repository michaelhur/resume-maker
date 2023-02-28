import { DownloadableFileLink } from './resume';

export interface Portfolio {
    userId: string;
    projectId: string;
    projectName: string;
    images: Array<string>;
    description: string;
    projectLink: Array<DownloadableFileLink>;
    projectOrder: number;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    createdAt: number;
    updatedAt: number;
}
