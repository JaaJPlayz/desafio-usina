export interface IMovie {
    title: string;
    description: string;
    genre: string;
    releaseyear: number;
    duration: number;
    rating: number;
    comment?: string;
}

export interface IReview {
    rating: number;
    comment?: string;
}

