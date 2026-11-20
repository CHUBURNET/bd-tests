import React from 'react';
import testController from "../../utils/testController.ts";
import style from "../../styles/pages/HomePage.module.css";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    const testsLec = testController.allLecturesTests;
    const testsEx = testController.allExTests;

    const specialModes = [
        { to: '/marathon', title: 'Все вопросы', subtitle: 'Полный марафон по всем темам', badge: 'Марафон' },
        { to: '/random/25', title: '25 случайных', subtitle: 'Быстрая разминка', badge: 'Блиц' },
        { to: '/random/50', title: '50 случайных', subtitle: 'Стандартная тренировка', badge: 'Тренировка' },
        { to: '/random/100', title: '100 случайных', subtitle: 'Углубленная проверка знаний', badge: 'Хардкор' },
    ];

    return (
        <div className={style.container}>
            <header className={style.pageHeader}>
                <span className={style.mainBadge}>Платформа тестирования</span>
                <h1 className={style.pageTitle}>Выберите режим или тему</h1>
                <p className={style.pageSubtitle}>
                    Закрепляйте материал по лекциям, готовьтесь к экзамену или тренируйтесь на случайных выборках
                </p>
            </header>

            <section className={style.section}>
                <div className={style.sectionHeader}>
                    <h2 className={style.sectionTitle}>Тесты по лекциям</h2>
                    <span className={style.countBadge}>{testsLec.length}</span>
                </div>
                <div className={style.grid}>
                    {testsLec.map((test) => (
                        <Link
                            to={`/lecture/${test.name}`}
                            className={style.card}
                            key={test.name}
                        >
                            <div className={style.cardTop}>
                                <span className={style.cardTag}>Лекция</span>
                                {test.questions?.length && (
                                    <span className={style.questionsCount}>
                                        {test.questions.length} вопр.
                                    </span>
                                )}
                            </div>
                            <h3 className={style.cardTitle}>{test.name}</h3>
                            <span className={style.cardAction}>Начать тест →</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={style.section}>
                <div className={style.sectionHeader}>
                    <h2 className={style.sectionTitle}>Экзаменационные тесты</h2>
                    <span className={style.countBadge}>{testsEx.length}</span>
                </div>
                <div className={style.grid}>
                    {testsEx.map((test) => (
                        <Link
                            to={`/ex/${test.name}`}
                            className={`${style.card} ${style.examCard}`}
                            key={test.name}
                        >
                            <div className={style.cardTop}>
                                <span className={`${style.cardTag} ${style.examTag}`}>Экзамен</span>
                                {test.questions?.length && (
                                    <span className={style.questionsCount}>
                                        {test.questions.length} вопр.
                                    </span>
                                )}
                            </div>
                            <h3 className={style.cardTitle}>{test.name}</h3>
                            <span className={style.cardAction}>Сдать экзамен →</span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className={style.section}>
                <div className={style.sectionHeader}>
                    <h2 className={style.sectionTitle}>Режимы тренировки</h2>
                </div>
                <div className={style.grid}>
                    {specialModes.map((mode) => (
                        <Link
                            to={mode.to}
                            className={`${style.card} ${style.specialCard}`}
                            key={mode.to}
                        >
                            <div className={style.cardTop}>
                                <span className={`${style.cardTag} ${style.specialTag}`}>
                                    {mode.badge}
                                </span>
                            </div>
                            <h3 className={style.cardTitle}>{mode.title}</h3>
                            <p className={style.cardSubtitle}>{mode.subtitle}</p>
                            <span className={style.cardAction}>Запустить →</span>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default HomePage;