import React, { useState, useEffect, useCallback } from 'react';
import style from "../../styles/pages/TestPage.module.css";
import { useParams, useLocation, Link } from "react-router-dom";
import testController from "../../utils/testController.ts";
import type { ITest } from "../../types/ITest.ts";

interface AnswerResult {
    questionIndex: number;
    questionText: string;
    userSelectedIndices: number[];
    correctIndices: number[];
    answers: { text: string; isCorrect?: boolean; correct?: boolean }[];
    isPassed: boolean;
}

type TestMode = 'lecture' | 'exam' | 'special';

interface TestConfig {
    test: ITest | undefined;
    mode: TestMode;
    badgeText: string;
    startBtnText: string;
}

const TestPageContent: React.FC = () => {
    const { name, count } = useParams();
    const { pathname } = useLocation();

    const buildTestConfig = useCallback((): TestConfig => {
        if (pathname.startsWith('/ex/')) {
            return {
                test: testController.getExTestByName(String(name)),
                mode: 'exam',
                badgeText: 'Экзаменационный тест',
                startBtnText: 'Начать экзамен',
            };
        }

        if (pathname === '/marathon') {
            return {
                test: testController.allQuestions,
                mode: 'special',
                badgeText: 'Марафон',
                startBtnText: 'Начать марафон',
            };
        }

        if (pathname.startsWith('/random/')) {
            const num = Number(count) || 25;
            return {
                test: testController.getRandomTest(num),
                mode: 'special',
                badgeText: `Случайные ${num} вопросов`,
                startBtnText: 'Начать тренировку',
            };
        }

        return {
            test: testController.getTestByName(String(name)),
            mode: 'lecture',
            badgeText: 'Тест по лекции',
            startBtnText: 'Начать тест',
        };
    }, [pathname, name, count]);

    const [config, setConfig] = useState<TestConfig>(() => buildTestConfig());

    const [isStarted, setIsStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

    const [startTime, setStartTime] = useState<number | null>(null);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [results, setResults] = useState<AnswerResult[]>([]);
    const [showMistakes, setShowMistakes] = useState(false);

    useEffect(() => {
        if (!isStarted || isFinished || !startTime) return;

        const interval = setInterval(() => {
            setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
        }, 1000);

        return () => clearInterval(interval);
    }, [isStarted, isFinished, startTime]);

    const { test, mode, badgeText, startBtnText } = config;

    if (!test || !test.questions?.length) {
        return (
            <div className={style.container}>
                <div className={style.card} style={{ textAlign: 'center' }}>
                    <h2 className={style.title} style={{ marginBottom: '20px' }}>Тест не найден</h2>
                    <Link to="/" className={style.ghostLink}>Вернуться на главную</Link>
                </div>
            </div>
        );
    }

    const questionData = test.questions[currentQuestion];
    const totalQuestions = test.questions.length;
    const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;

    const formatTime = (totalSec: number) => {
        const mins = Math.floor(totalSec / 60);
        const secs = totalSec % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    const handleStart = () => {
        if (isFinished && pathname.startsWith('/random/')) {
            setConfig(buildTestConfig());
        }
        setIsStarted(true);
        setIsFinished(false);
        setCurrentQuestion(0);
        setSelectedAnswers([]);
        setResults([]);
        setShowMistakes(false);
        setStartTime(Date.now());
        setElapsedSeconds(0);
    };

    const handleSelectAnswer = (index: number) => {
        if (questionData.type === 'radio') {
            setSelectedAnswers([index]);
        } else {
            setSelectedAnswers((prev) =>
                prev.includes(index)
                    ? prev.filter((item) => item !== index)
                    : [...prev, index]
            );
        }
    };

    const handleNext = () => {
        const correctIndices = questionData.answers
            .map((ans: any, idx: number) => (ans.isCorrect || ans.correct ? idx : -1))
            .filter((idx: number) => idx !== -1);

        const sortedUser = [...selectedAnswers].sort();
        const sortedCorrect = [...correctIndices].sort();
        const isPassed =
            sortedUser.length === sortedCorrect.length &&
            sortedUser.every((val, idx) => val === sortedCorrect[idx]);

        const currentResult: AnswerResult = {
            questionIndex: currentQuestion,
            questionText: questionData.question,
            userSelectedIndices: selectedAnswers,
            correctIndices,
            answers: questionData.answers,
            isPassed,
        };

        setResults((prev) => [...prev, currentResult]);

        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion((prev) => prev + 1);
            setSelectedAnswers([]);
        } else {
            if (startTime) {
                setElapsedSeconds(Math.floor((Date.now() - startTime) / 1000));
            }
            setIsFinished(true);
        }
    };

    const correctCount = results.filter((r) => r.isPassed).length;
    const mistakes = results.filter((r) => !r.isPassed);
    const mistakesCount = mistakes.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);

    const themeClass =
        mode === 'exam'
            ? style.examTheme
            : mode === 'special'
                ? style.specialTheme
                : '';

    return (
        <div className={`${style.container} ${themeClass}`}>
            <div className={style.card}>
                <div className={style.header}>
                    <div className={style.headerTop}>
                        <span className={style.badge}>{badgeText}</span>
                        {isStarted && !isFinished && (
                            <span className={style.timerBadge}>⏱ {formatTime(elapsedSeconds)}</span>
                        )}
                    </div>
                    <h2 className={style.title}>{test.name}</h2>
                </div>

                {!isStarted ? (
                    <div className={style.startScreen}>
                        <p className={style.description}>
                            Количество вопросов: <strong>{totalQuestions}</strong>. Выберите один или несколько правильных вариантов ответа.
                        </p>
                        <div className={style.startActions}>
                            <button className={style.primaryButton} onClick={handleStart}>
                                {startBtnText}
                            </button>
                            <Link to="/" className={style.ghostLink}>
                                Назад
                            </Link>
                        </div>
                    </div>
                ) : isFinished ? (
                    <div className={style.resultScreen}>
                        <div className={style.scoreCircle}>
                            <span className={style.scoreValue}>{scorePercent}%</span>
                            <span className={style.scoreLabel}>результат</span>
                        </div>

                        <div className={style.statsGrid}>
                            <div className={`${style.statBox} ${style.statSuccess}`}>
                                <span className={style.statNumber}>{correctCount}</span>
                                <span className={style.statTitle}>Верных</span>
                            </div>
                            <div className={`${style.statBox} ${style.statError}`}>
                                <span className={style.statNumber}>{mistakesCount}</span>
                                <span className={style.statTitle}>Ошибок</span>
                            </div>
                            <div className={style.statBox}>
                                <span className={style.statNumber}>{formatTime(elapsedSeconds)}</span>
                                <span className={style.statTitle}>Время</span>
                            </div>
                        </div>

                        <div className={style.resultActions}>
                            {mistakesCount > 0 && (
                                <button
                                    className={style.secondaryButton}
                                    onClick={() => setShowMistakes((prev) => !prev)}
                                >
                                    {showMistakes
                                        ? 'Скрыть ошибки'
                                        : `Посмотреть ошибки (${mistakesCount})`}
                                </button>
                            )}
                            <button className={style.primaryButton} onClick={handleStart}>
                                Пройти заново
                            </button>
                            <Link to="/" className={style.ghostLink}>
                                На главную
                            </Link>
                        </div>

                        {showMistakes && mistakesCount > 0 && (
                            <div className={style.mistakesSection}>
                                <h3 className={style.mistakesHeading}>Разбор ошибок</h3>
                                <div className={style.mistakesList}>
                                    {mistakes.map((mistake) => (
                                        <div key={mistake.questionIndex} className={style.mistakeCard}>
                                            <div className={style.mistakeQuestion}>
                                                <span className={style.mistakeNumber}>
                                                    Вопрос #{mistake.questionIndex + 1}
                                                </span>
                                                <p>{mistake.questionText}</p>
                                            </div>

                                            <div className={style.mistakeAnswers}>
                                                {mistake.answers.map((ans, idx) => {
                                                    const isUserChoice = mistake.userSelectedIndices.includes(idx);
                                                    const isRight = mistake.correctIndices.includes(idx);

                                                    let itemClass = style.reviewOption;
                                                    if (isRight) itemClass += ` ${style.reviewCorrect}`;
                                                    else if (isUserChoice) itemClass += ` ${style.reviewWrong}`;

                                                    return (
                                                        <div key={idx} className={itemClass}>
                                                            <span className={style.reviewText}>{ans.text}</span>
                                                            {isRight && (
                                                                <span className={`${style.reviewTag} ${style.tagCorrect}`}>
                                                                    Правильный ответ
                                                                </span>
                                                            )}
                                                            {isUserChoice && !isRight && (
                                                                <span className={`${style.reviewTag} ${style.tagWrong}`}>
                                                                    Ваш выбор
                                                                </span>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={style.questionWrapper}>
                        <div className={style.progressContainer}>
                            <div className={style.progressText}>
                                Вопрос {currentQuestion + 1} из {totalQuestions}
                            </div>
                            <div className={style.progressBar}>
                                <div
                                    className={style.progressFill}
                                    style={{ width: `${progressPercent}%` }}
                                />
                            </div>
                        </div>

                        <h3 className={style.questionTitle}>{questionData.question}</h3>

                        <div className={style.answersList}>
                            {questionData.answers.map((answer, index) => {
                                const isChecked = selectedAnswers.includes(index);
                                return (
                                    <label
                                        key={index}
                                        className={`${style.answerOption} ${isChecked ? style.selected : ''}`}
                                    >
                                        <input
                                            type={questionData.type}
                                            name={`question-${currentQuestion}`}
                                            checked={isChecked}
                                            onChange={() => handleSelectAnswer(index)}
                                            className={style.hiddenInput}
                                        />
                                        <span
                                            className={`${style.customControl} ${
                                                questionData.type === 'checkbox' ? style.checkbox : style.radio
                                            }`}
                                        />
                                        <span className={style.answerText}>{answer.text}</span>
                                    </label>
                                );
                            })}
                        </div>

                        <div className={style.footer}>
                            <button
                                className={style.primaryButton}
                                onClick={handleNext}
                                disabled={selectedAnswers.length === 0}
                            >
                                {currentQuestion === totalQuestions - 1 ? 'Завершить' : 'Ответить'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const TestPage: React.FC = () => {
    const { pathname } = useLocation();
    return <TestPageContent key={pathname} />;
};

export default TestPage;