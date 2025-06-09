import { Data } from '../Model/Data';

export async function loadData(): Promise<Array<Data>> {
    try {
        const answer: Array<Data> = [];
        let response = require("../../data/test.csv?raw");
        let id : number = 0;

        response.split('\n').forEach((line: string) => {
            const [username, value] = line.split(',');
            if (username && value) {
                answer.push({
                    id: id++,
                    username: username.trim(),
                    value: parseFloat(value.trim())});
            }
        }
        );
        return answer;
    } catch (error) {
        console.error("Error loading data:", error);
        return [];
    }
}