export interface ITest {
    name: string;
    questions: IQuestion[];
}

export interface IQuestion {
    question: string;
    answers: IAnswer[];
    type: "radio" | "checkbox"
}

export interface IAnswer {
    text: string;
    isCorrect: boolean;
}