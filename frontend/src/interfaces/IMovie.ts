export interface IMovie {
    id: number;
    title: string;
    description: string;
    genre: string;
    releaseyear: number;
    duration: number;
    rating: number;
    comment?: string;
}