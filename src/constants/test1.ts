import type { ITest } from "../types/ITest.ts";

const test1: ITest = {
    name: "Лекция 1",
    questions: [
        {
            question: "Какое из следующих утверждений относится к недостаткам файловых систем?",
            type: "radio",
            answers: [
                { text: "Централизованное управление данными", isCorrect: false },
                { text: "Универсальный доступ к данным", isCorrect: false },
                { text: "Разделение и изоляция данных", isCorrect: true },
                { text: "Поддержка транзакций", isCorrect: false },
            ],
        },
        {
            question: "Что является основной причиной дублирования данных в файловых системах?",
            type: "radio",
            answers: [
                { text: "Централизованное хранилище", isCorrect: false },
                { text: "Использование SQL", isCorrect: false },
                { text: "Поддержка транзакций", isCorrect: false },
                { text: "Независимая работа подразделений с данными", isCorrect: true },
            ],
        },
        {
            question: "Что означает зависимость программ от данных?",
            type: "radio",
            answers: [
                { text: "Структура данных определяется независимо от программ", isCorrect: false },
                { text: "Изменение структуры данных требует изменения программ", isCorrect: true },
                { text: "Программы автоматически адаптируются к изменению данных", isCorrect: false },
                { text: "Данные обновляются автоматически во всех файлах", isCorrect: false },
            ],
        },
        {
            question: "Что из нижеперечисленного не является функцией СУБД?",
            type: "radio",
            answers: [
                { text: "Выполнение математических расчетов", isCorrect: true },
                { text: "Хранение данных в структурированном виде", isCorrect: false },
                { text: "Управление транзакциями", isCorrect: false },
                { text: "Обеспечение независимости данных от программ", isCorrect: false },
            ],
        },
        {
            question: "Что входит в состав системы баз данных (СБД)?",
            type: "radio",
            answers: [
                { text: "Программы и пользователи", isCorrect: false },
                { text: "База данных + СУБД", isCorrect: true },
                { text: "Только база данных", isCorrect: false },
                { text: "Только СУБД", isCorrect: false },
            ],
        },
        {
            question: "Как называется \"данные о данных\"?",
            type: "radio",
            answers: [
                { text: "Реляционные данные", isCorrect: false },
                { text: "Метаданные", isCorrect: true },
                { text: "Транзакционные данные", isCorrect: false },
                { text: "Описательные данные", isCorrect: false },
            ],
        },
        {
            question: "Какая модель данных использует таблицы (отношения)?",
            type: "radio",
            answers: [
                { text: "Иерархическая", isCorrect: false },
                { text: "Реляционная", isCorrect: true },
                { text: "Объектно-ориентированная", isCorrect: false },
                { text: "Сетевая", isCorrect: false },
            ],
        },
        {
            question: "Какая СУБД относится к документо-ориентированным?",
            type: "radio",
            answers: [
                { text: "PostgreSQL", isCorrect: false },
                { text: "Oracle", isCorrect: false },
                { text: "MongoDB", isCorrect: true },
                { text: "Neo4j", isCorrect: false },
            ],
        },
        {
            question: "Что является примером графовой базы данных?",
            type: "radio",
            answers: [
                { text: "Neo4j", isCorrect: true },
                { text: "Redis", isCorrect: false },
                { text: "db4o", isCorrect: false },
                { text: "MySQL", isCorrect: false },
            ],
        },
        {
            question: "Какая из следующих характеристик относится к In-memory базам данных?",
            type: "radio",
            answers: [
                { text: "Высокая степень дублирования", isCorrect: false },
                { text: "Хранение данных на оптических дисках", isCorrect: false },
                { text: "Хранение данных в оперативной памяти", isCorrect: true },
                { text: "Долгий доступ к данным", isCorrect: false },
            ],
        },
        {
            question: "Какой тип баз данных предназначен для анализа больших объемов данных?",
            type: "radio",
            answers: [
                { text: "OLTP", isCorrect: false },
                { text: "Транзакционные", isCorrect: false },
                { text: "Операционные", isCorrect: false },
                { text: "OLAP", isCorrect: true },
            ],
        },
        {
            question: "Какой из следующих видов БД обеспечивает наиболее высокий уровень структурированности?",
            type: "radio",
            answers: [
                { text: "Неструктурированные", isCorrect: false },
                { text: "Полуструктурированные", isCorrect: false },
                { text: "Структурированные", isCorrect: true },
                { text: "Графовые", isCorrect: false },
            ],
        },
    ],
};

export default test1;