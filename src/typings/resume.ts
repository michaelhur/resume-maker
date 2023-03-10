export interface Career {
    userId: string;
    careerId: string;
    companyName: string;
    startDate: string;
    endDate: string;
    isWorking: boolean;
    position: string;
    description?: string;
    order: number;
    createdAt: number;
}

export type DegreeCategory = 'diploma' | 'degree' | 'master' | 'phd';

export enum Degree {
    'diploma' = '전문학사',
    'degree' = '학사',
    'master' = '석사',
    'phd' = '박사',
}

export interface Education {
    userId: string;
    eduId: string;
    schoolName: string;
    startDate: string;
    endDate: string;
    isAttending: boolean;
    major: string;
    degree: DegreeCategory;
    order: number;
    createdAt: number;
}

export interface DownloadableFileLink {
    link: string;
    downloadCount: number;
}
