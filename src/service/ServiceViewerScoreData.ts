import type { ViewerScore, ViewerScoreWithRank } from "../models/ViewerScore";
import data from '../../data/test.csv?raw';

export const ServiceViewerScoreData = {
     loadViewerScoreData(): ViewerScore[] {
        try {
            const answer: ViewerScore[] = [];
            let response = data;
            response.split('\n').forEach((line: string) => {
                const [username, score ] = line.split(',');
                if (username && score) {
                    answer.push({
                        username: username.trim(),
                        score: score.trim()});
                }
            }
            );
            return answer;
        } catch (error) {
            console.error("Error loading data:", error);
            return [];
        }
    },
    getData(): Promise<ViewerScore[]> {
        return Promise.resolve(this.loadViewerScoreData());
    },
    rankViewerScores(viewerScores: ViewerScore[]): ViewerScoreWithRank[] {
        const sortedScores : ViewerScore[] = [...viewerScores].sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
        let rank : number = 1;
        let diff : number = 0;
        let previousScore: number = parseFloat(sortedScores[0].score);
        return sortedScores.map((score: ViewerScore) => {
            const currentScore = parseFloat(score.score);
            if (currentScore !== previousScore) {
                rank += diff + 1;
                diff = 0;
            } else {
                diff++;
            }
            previousScore = currentScore;
            return { ...score, rank };
        });
    }
}