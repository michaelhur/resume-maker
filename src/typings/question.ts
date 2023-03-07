export interface Question {
    userId: string;
    questionId: string;
    question: string;
    response: string;
    presentOrder: number;
    isPublic: boolean;
    createdAt: number;
}
