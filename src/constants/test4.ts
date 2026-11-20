import type { ITest } from "../types/ITest.ts";

const test4: ITest = {
    name: "Лекция 4",
    questions: [
        {
            question: "Из каких трех частей, согласно Дейту, состоит реляционная модель данных?",
            type: "radio",
            answers: [
                { text: "Информационной, программной и аппаратной", isCorrect: false },
                { text: "Табличной, файловой и сетевой", isCorrect: false },
                { text: "Физической, логической и программной", isCorrect: false },
                { text: "Структурной, целостной и манипуляционной", isCorrect: true },
            ],
        },
        {
            question: "Какая структура данных является основной в реляционной модели?",
            type: "radio",
            answers: [
                { text: "Иерархическое дерево", isCorrect: false },
                { text: "Нормализованное n-арное отношение", isCorrect: true },
                { text: "Файл последовательного доступа", isCorrect: false },
                { text: "Граф", isCorrect: false },
            ],
        },
        {
            question: "Что описывает целостная часть реляционной модели?",
            type: "radio",
            answers: [
                { text: "Физическое расположение файлов", isCorrect: false },
                { text: "Ограничения, обеспечивающие целостность данных", isCorrect: true },
                { text: "Методы создания индексов", isCorrect: false },
                { text: "Способы сортировки таблиц", isCorrect: false },
            ],
        },
        {
            question: "Какие два способа манипулирования реляционными данными относятся к манипуляционной части?",
            type: "radio",
            answers: [
                { text: "Архивация и резервное копирование", isCorrect: false },
                { text: "Сортировка и поиск", isCorrect: false },
                { text: "Индексация и хэширован", isCorrect: false },
                { text: "Реляционная алгебра и реляционное исчисление", isCorrect: true },
            ],
        },
        {
            question: "Что такое домен в реляционной модели данных?",
            type: "radio",
            answers: [
                { text: "Строка таблицы", isCorrect: false },
                { text: "Набор таблиц базы данных", isCorrect: false },
                { text: "Имя базы данных", isCorrect: false },
                { text: "Подмножество значений некоторого базового типа, имеющее определенный смысл", isCorrect: true },
            ],
        },
        {
            question: "Какое свойство обязательно характеризует домен?",
            type: "radio",
            answers: [
                { text: "Домен не имеет имени", isCorrect: false },
                { text: "Домен обязательно является таблицей", isCorrect: false },
                { text: "Домен имеет уникальное имя в пределах базы данных", isCorrect: true },
                { text: "Домен всегда состоит только из чисел", isCorrect: false },
            ],
        },
        {
            question: "Какое утверждение правильно описывает назначение домена?",
            type: "radio",
            answers: [
                { text: "Домен отвечает за физическое размещение таблиц", isCorrect: false },
                { text: "Домен хранит резервные копии данных", isCorrect: false },
                { text: "Домен определяет количество таблиц в БД", isCorrect: false },
                { text: "Домен определяет смысл и допустимое множество значений данных", isCorrect: true },
            ],
        },
        {
            question: "Как называется вертикальный элемент отношения, содержащий значения одного свойства объектов?",
            type: "radio",
            answers: [
                { text: "Атрибут", isCorrect: true },
                { text: "Домен", isCorrect: false },
                { text: "Кортеж", isCorrect: false },
                { text: "Ключ", isCorrect: false },
            ],
        },
        {
            question: "Как называется одна строка отношения?",
            type: "radio",
            answers: [
                { text: "Домен", isCorrect: false },
                { text: "Атрибут", isCorrect: false },
                { text: "Схема", isCorrect: false },
                { text: "Кортеж", isCorrect: true },
            ],
        },
        {
            question: "Как называется вся таблица в терминах реляционной модели?",
            type: "radio",
            answers: [
                { text: "Отношение", isCorrect: true },
                { text: "Домен", isCorrect: false },
                { text: "Атрибут", isCorrect: false },
                { text: "Кортеж", isCorrect: false },
            ],
        },
        {
            question: "Что представляет собой схема отношения?",
            type: "radio",
            answers: [
                { text: "Совокупность индексов", isCorrect: false },
                { text: "Список имен атрибутов отношения", isCorrect: true },
                { text: "Список пользователей базы данных", isCorrect: false },
                { text: "Набор строк таблицы", isCorrect: false },
            ],
        },
        {
            question: "Из каких двух частей состоит отношение?",
            type: "radio",
            answers: [
                { text: "Из заголовка и тела", isCorrect: true },
                { text: "Из индекса и ключа", isCorrect: false },
                { text: "Из строки и файла", isCorrect: false },
                { text: "Из домена и атрибута", isCorrect: false },
            ],
        },
        {
            question: "Что содержит заголовок отношения?",
            type: "radio",
            answers: [
                { text: "Только строки таблицы", isCorrect: false },
                { text: "Только первичный ключ", isCorrect: false },
                { text: "Только индексы", isCorrect: false },
                { text: "Фиксированное количество атрибутов и их имена", isCorrect: true },
            ],
        },
        {
            question: "Какое свойство характерно для отношения?",
            type: "radio",
            answers: [
                { text: "Отсутствие кортежей-дубликатов", isCorrect: true },
                { text: "Обязательная сортировка кортежей", isCorrect: false },
                { text: "Обязательная сортировка атрибутов", isCorrect: false },
                { text: "Возможность наличия одинаковых кортежей", isCorrect: false },
            ],
        },
        {
            question: "Почему кортежи отношения не имеют фиксированного порядка?",
            type: "radio",
            answers: [
                { text: "Потому что отсутствуют атрибуты", isCorrect: false },
                { text: "Потому что отношение является множеством кортежей", isCorrect: true },
                { text: "Потому что строки хранятся только в оперативной памяти", isCorrect: false },
                { text: "Потому что все данные являются текстовыми", isCorrect: false },
            ],
        },
        {
            question: "Что означает атомарность значений атрибутов?",
            type: "radio",
            answers: [
                { text: "Значение атрибута является неделимым с точки зрения модели", isCorrect: true },
                { text: "Каждый атрибут должен иметь индекс", isCorrect: false },
                { text: "Все значения должны быть числами", isCorrect: false },
                { text: "В ячейке может храниться несколько таблиц", isCorrect: false },
            ],
        },
        {
            question: "Какое условие необходимо для того, чтобы таблица соответствовала отношению?",
            type: "radio",
            answers: [
                { text: "Таблица обязательно должна содержать изображения", isCorrect: false },
                { text: "Таблица должна иметь простую структуру, без повторяющихся строк", isCorrect: true },
                { text: "В каждом столбце должны находиться данные разных типов", isCorrect: false },
                { text: "В ней могут находиться одинаковые строки", isCorrect: false },
            ],
        },
        {
            question: "Каково основное назначение индекса в базе данных?",
            type: "radio",
            answers: [
                { text: "Увеличение количества строк", isCorrect: false },
                { text: "Ускорение поиска и доступа к записям", isCorrect: true },
                { text: "Удаление первичных ключей", isCorrect: false },
                { text: "Замена всех таблиц файлами", isCorrect: false },
            ],
        },
        {
            question: "Какой индекс гарантированно имеет уникальные значения ключа и создается на основе ключа упорядочения?",
            type: "radio",
            answers: [
                { text: "Составной индекс", isCorrect: false },
                { text: "Первичный индекс", isCorrect: true },
                { text: "Некластерный индекс", isCorrect: false },
                { text: "Вторичный индекс", isCorrect: false },
            ],
        },
        {
            question: "Какой индекс может соответствовать нескольким записям с одинаковым значением индексируемого поля?",
            type: "radio",
            answers: [
                { text: "Вторичный", isCorrect: true },
                { text: "Уникальный первичный", isCorrect: false },
                { text: "Первичный", isCorrect: false },
                { text: "Кластерный", isCorrect: false },
            ],
        },
        {
            question: "Сколько кластерных индексов может быть у одной таблицы в SQL Server?",
            type: "radio",
            answers: [
                { text: "Не более десяти", isCorrect: false },
                { text: "Неограниченное количество", isCorrect: false },
                { text: "Не более одного", isCorrect: true },
                { text: "Не более двух", isCorrect: false },
            ],
        },
    ],
};

export default test4;