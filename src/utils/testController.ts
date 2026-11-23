import test1 from "../constants/test1.ts";
import test2 from "../constants/test2.ts";
import test3 from "../constants/test3.ts";
import test4 from "../constants/test4.ts";
import test5 from "../constants/test5.ts";
import test6 from "../constants/test6.ts";
import test7 from "../constants/test7.ts";
import test8 from "../constants/test8.ts";
import test9 from "../constants/test9.ts";
import test10 from "../constants/test10.ts";
import test11 from "../constants/test11.ts";
import test12 from "../constants/test12.ts";
import testEx1 from "../constants/testEx1.ts";
import type { ITest } from "../types/ITest.ts";
import testEx2 from "../constants/testEx2.ts";

const allLecturesTests: ITest[] = [
    test1, test2, test3, test4, test5, test6,
    test7, test8, test9, test10, test11, test12,
];

const allExTests: ITest[] = [testEx1, testEx2];

const allQuestions: ITest = {
    name: "Марафон. Все вопросы",
    questions: shuffleArray(allLecturesTests.flatMap((test) => test.questions)),
};

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled;
}

const TestsController = {
    allLecturesTests,
    allExTests,
    allQuestions,
    getTestByName(name: string): ITest | undefined {
        return allLecturesTests.find((test) => test.name === name);
    },
    getExTestByName(name: string): ITest | undefined {
        return allExTests.find((test) => test.name === name);
    },
    getRandomTest(count: number): ITest {
        const questions = allQuestions.questions;
        const safeCount = Math.max(0, Math.min(count, questions.length));

        return {
            name: `${safeCount} рандомных вопросов`,
            questions: shuffleArray(questions).slice(0, safeCount),
        };
    },
};

export default TestsController;