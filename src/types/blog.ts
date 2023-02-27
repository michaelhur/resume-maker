type editorType = 'markdown' | 'wysiwyg';

export interface Blog {
    userId: string;
    blogId: string;
    title: string;
    tags: Array<string>;
    description: string;
    thumbnailUrl?: string | null;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    isPinned: boolean;
    isPublic: boolean;
    editorType: editorType;
    createdAt: string;
    updatedAt: string;
}
