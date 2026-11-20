import type { ITest } from "../types/ITest.ts";

const test3: ITest = {
    name: "Лекция 3",
    questions: [
        {
            question: "Что такое структура данных?",
            type: "radio",
            answers: [
                { text: "Набор программ для обработки информации", isCorrect: false },
                { text: "Устройство для хранения информации", isCorrect: false },
                { text: "Язык программирования", isCorrect: false },
                { text: "Организационная схема данных, в соответствии с которой они упорядочены", isCorrect: true },
            ],
        },
        {
            question: "Что отражает физическая структура данных?",
            type: "radio",
            answers: [
                { text: "Структуру запросов", isCorrect: false },
                { text: "Способ физического представления данных в памяти компьютера", isCorrect: true },
                { text: "Логические связи между таблицами", isCorrect: false },
                { text: "Правила работы пользователей", isCorrect: false },
            ],
        },
        {
            question: "Как называется рассмотрение структуры данных без учёта её представления в машинной памяти?",
            type: "radio",
            answers: [
                { text: "Внутренняя структура", isCorrect: false },
                { text: "Логическая структура", isCorrect: true },
                { text: "Физическая структура", isCorrect: false },
                { text: "Аппаратная структура", isCorrect: false },
            ],
        },
        {
            question: "Что используется для связывания записей при связанном представлении данных?",
            type: "radio",
            answers: [
                { text: "Таблица", isCorrect: false },
                { text: "Атрибут", isCorrect: false },
                { text: "Указатель (ссылка)", isCorrect: true },
                { text: "Индекс", isCorrect: false },
            ],
        },
        {
            question: "Как называется список, в котором каждая запись содержит только один указатель?",
            type: "radio",
            answers: [
                { text: "Многосвязный список", isCorrect: false },
                { text: "Дерево", isCorrect: false },
                { text: "Массив", isCorrect: false },
                { text: "Односвязный список", isCorrect: true },
            ],
        },
        {
            question: "Какие структуры данных называют однородными?",
            type: "radio",
            answers: [
                { text: "Содержащие записи одного и того же типа", isCorrect: true },
                { text: "Содержащие записи разных типов", isCorrect: false },
                { text: "Состоящие только из чисел", isCorrect: false },
                { text: "Содержащие только текстовые данные", isCorrect: false },
            ],
        },
        {
            question: "Какой пример относится к неоднородной структуре данных?",
            type: "radio",
            answers: [
                { text: "Совокупность сведений о студенте", isCorrect: true },
                { text: "Массив символов", isCorrect: false },
                { text: "Массив целых чисел", isCorrect: false },
                { text: "Список температур", isCorrect: false },
            ],
        },
        {
            question: "На какие два основных класса делятся структуры данных по характеру упорядоченности элементов?",
            type: "radio",
            answers: [
                { text: "Физические и виртуальные", isCorrect: false },
                { text: "Простые и сложные", isCorrect: false },
                { text: "Внутренние и внешние", isCorrect: false },
                { text: "Линейные и нелинейные", isCorrect: true },
            ],
        },
        {
            question: "Какой принцип обработки используется в стеке?",
            type: "radio",
            answers: [
                { text: "Случайный доступ", isCorrect: false },
                { text: "Доступ только по ключу", isCorrect: false },
                { text: "FIFO — первым пришёл, первым ушёл", isCorrect: false },
                { text: "LIFO — последним пришёл, первым ушёл", isCorrect: true },
            ],
        },
        {
            question: "Какой принцип обработки используется в очереди?",
            type: "radio",
            answers: [
                { text: "LIFO — последним пришёл, первым ушёл", isCorrect: false },
                { text: "FIFO — первым пришёл, первым ушёл", isCorrect: true },
                { text: "Обратный порядок", isCorrect: false },
                { text: "Случайный порядок", isCorrect: false },
            ],
        },
        {
            question: "Что является основным способом идентификации элемента таблицы?",
            type: "radio",
            answers: [
                { text: "Указатель", isCorrect: false },
                { text: "Ссылка на файл", isCorrect: false },
                { text: "Индекс массива", isCorrect: false },
                { text: "Ключ", isCorrect: true },
            ],
        },
        {
            question: "Какая структура данных представляет собой граф с ограничениями и не имеет циклов?",
            type: "radio",
            answers: [
                { text: "Таблица", isCorrect: false },
                { text: "Дерево", isCorrect: true },
                { text: "Массив", isCorrect: false },
                { text: "Очередь", isCorrect: false },
            ],
        },
        {
            question: "Как называется самый верхний узел дерева?",
            type: "radio",
            answers: [
                { text: "Корень", isCorrect: true },
                { text: "Лист", isCorrect: false },
                { text: "Потомок", isCorrect: false },
                { text: "Вершина", isCorrect: false },
            ],
        },
        {
            question: "Как называются узлы дерева, которые не имеют порождённых узлов?",
            type: "radio",
            answers: [
                { text: "Вершины", isCorrect: false },
                { text: "Листья", isCorrect: true },
                { text: "Корни", isCorrect: false },
                { text: "Родители", isCorrect: false },
            ],
        },
        {
            question: "Какие отношения между объектами имеют иерархический характер и обычно представляются деревьями?",
            type: "radio",
            answers: [
                { text: "Один-к-одному", isCorrect: false },
                { text: "Многие-ко-многим", isCorrect: false },
                { text: "Один-ко-многим", isCorrect: true },
                { text: "Многие-к-одному", isCorrect: false },
            ],
        },
        {
            question: "Какая модель данных имеет структуру в виде графа общего вида?",
            type: "radio",
            answers: [
                { text: "Сетевая", isCorrect: true },
                { text: "Реляционная", isCorrect: false },
                { text: "Иерархическая", isCorrect: false },
                { text: "Многомерная", isCorrect: false },
            ],
        },
        {
            question: "На каком понятии основана реляционная модель данных?",
            type: "radio",
            answers: [
                { text: "Отношение", isCorrect: true },
                { text: "Объект", isCorrect: false },
                { text: "Гиперкуб", isCorrect: false },
                { text: "Указатель", isCorrect: false },
            ],
        },
        {
            question: "Какое преимущество является характерным для реляционной модели данных?",
            type: "radio",
            answers: [
                { text: "Сложность использования", isCorrect: false },
                { text: "Использование только графов", isCorrect: false },
                { text: "Простота, понятность и удобство физической реализации", isCorrect: true },
                { text: "Отсутствие таблиц", isCorrect: false },
            ],
        },
        {
            question: "Для чего предназначены многомерные СУБД?",
            type: "radio",
            answers: [
                { text: "Только для хранения файлов", isCorrect: false },
                { text: "Только для создания текстовых документов", isCorrect: false },
                { text: "Для интерактивной аналитической обработки информации", isCorrect: true },
                { text: "Для управления операционной системой", isCorrect: false },
            ],
        },
        {
            question: "Какая модель данных использует механизмы, подобные инкапсуляции, наследованию и полиморфизму?",
            type: "radio",
            answers: [
                { text: "Реляционная", isCorrect: false },
                { text: "Объектно-ориентированная", isCorrect: true },
                { text: "Сетевая", isCorrect: false },
                { text: "Иерархическая", isCorrect: false },
            ],
        },
    ],
};

export default test3;