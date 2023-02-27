import { DownloadableFileLink } from './resume';

export interface SocialLinks {
    homepage?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
}

export interface User {
    id: string;
    domainName: string;
    name: string;
    displayName?: string;
    profileImageUrl?: string;
    email: string;
    socialLinks?: SocialLinks;
    resumeFileLink?: Array<DownloadableFileLink>;
    viewCount: number;
    createdAt: number;
    updatedAt: number;
}
