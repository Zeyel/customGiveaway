export type ViewerScore = {
    username: string;
    score: string;
};

export type ViewerScoreWithRank = ViewerScore & {
    rank: number;
};