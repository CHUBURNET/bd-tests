import type { ITest } from "../types/ITest.ts";

const test6: ITest = {
    name: "Лекция 6",
    questions: [
        {
            question: "Какие два базовых механизма манипулирования реляционными данными определяются в реляционной модели?",
            type: "radio",
            answers: [
                { text: "Реляционная алгебра и реляционное исчисление", isCorrect: true },
                { text: "Индексация и сортировка", isCorrect: false },
                { text: "SQL и NoSQL", isCorrect: false },
                { text: "Нормализация и денормализация", isCorrect: false },
            ],
        },
        {
            question: "На какой математической основе построена реляционная алгебра?",
            type: "radio",
            answers: [
                { text: "Теории чисел", isCorrect: false },
                { text: "Теории множеств", isCorrect: true },
                { text: "Теории графов", isCorrect: false },
                { text: "Теории вероятностей", isCorrect: false },
            ],
        },
        {
            question: "На какой математической основе базируется реляционное исчисление?",
            type: "radio",
            answers: [
                { text: "Теории множеств", isCorrect: false },
                { text: "Математической логике", isCorrect: true },
                { text: "Матричной алгебре", isCorrect: false },
                { text: "Теории графов", isCorrect: false },
            ],
        },
        {
            question: "Что означает замкнутость реляционных операций относительно отношения?",
            type: "radio",
            answers: [
                { text: "Результатом операции всегда является число", isCorrect: false },
                { text: "Операции выполняются только над одной таблицей", isCorrect: false },
                { text: "Результатом вычисления также является отношение", isCorrect: true },
                { text: "Отношение нельзя изменять", isCorrect: false },
            ],
        },
        {
            question: "Чем реляционная алгебра отличается от реляционного исчисления по уровню процедурности?",
            type: "radio",
            answers: [
                { text: "Алгебра является более процедурной", isCorrect: true },
                { text: "Исчисление является более процедурной", isCorrect: false },
                { text: "Ни один из механизмов не является процедурным", isCorrect: false },
                { text: "Они полностью одинаковы по процедурности", isCorrect: false },
            ],
        },
        {
            question: "Что описывает формула реляционного исчисления?",
            type: "radio",
            answers: [
                { text: "Физическое расположение таблиц на диске", isCorrect: false },
                { text: "Структуру индексов", isCorrect: false },
                { text: "Последовательность операций выполнения запроса", isCorrect: false },
                { text: "Условия, которым должны удовлетворять кортежи результата", isCorrect: true },
            ],
        },
        {
            question: "Как обычно характеризуют языки, основанные на реляционном исчислении?",
            type: "radio",
            answers: [
                { text: "Процедурные", isCorrect: false },
                { text: "Декларативные", isCorrect: true },
                { text: "Машинные", isCorrect: false },
                { text: "Ассемблерные", isCorrect: false },
            ],
        },
        {
            question: "Сколько основных операций входило в первоначальный вариант реляционной алгебры Кодда?",
            type: "radio",
            answers: [
                { text: "6", isCorrect: false },
                { text: "8", isCorrect: true },
                { text: "10", isCorrect: false },
                { text: "4", isCorrect: false },
            ],
        },
        {
            question: "Какие операции относятся к теоретико-множественным операциям реляционной алгебры?",
            type: "radio",
            answers: [
                { text: "Объединение, пересечение, разность, декартово произведение", isCorrect: true },
                { text: "Соединение, деление, переименование, присваивание", isCorrect: false },
                { text: "Выборка, проекция, соединение, деление", isCorrect: false },
                { text: "Выборка, сортировка, группировка, индексация", isCorrect: false },
            ],
        },
        {
            question: "Какие операции относятся к специальным реляционным операциям?",
            type: "radio",
            answers: [
                { text: "Проекция, выборка, соединение, деление", isCorrect: true },
                { text: "Копирование, удаление, вставка", isCorrect: false },
                { text: "Объединение, пересечение, разность", isCorrect: false },
                { text: "Сортировка, группировка, индексация", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется операция переименования атрибутов?",
            type: "radio",
            answers: [
                { text: "Для удаления строк", isCorrect: false },
                { text: "Для удаления таблицы", isCorrect: false },
                { text: "Для изменения значений атрибутов", isCorrect: false },
                { text: "Для изменения имен атрибутов", isCorrect: true },
            ],
        },
        {
            question: "Какие отношения называются совместимыми по типу?",
            type: "radio",
            answers: [
                { text: "Имеющие одинаковое количество строк", isCorrect: false },
                { text: "Имеющие идентичные заголовки и одинаковые домены соответствующих атрибутов", isCorrect: true },
                { text: "Имеющие одинаковое имя", isCorrect: false },
                { text: "Имеющие одинаковые первичные ключи", isCorrect: false },
            ],
        },
        {
            question: "Что делает операция объединения отношений?",
            type: "radio",
            answers: [
                { text: "Объединяет кортежи двух совместимых отношений", isCorrect: true },
                { text: "Оставляет только общие кортежи", isCorrect: false },
                { text: "Удаляет одинаковые атрибуты", isCorrect: false },
                { text: "Оставляет кортежи первого отношения, которых нет во втором", isCorrect: false },
            ],
        },
        {
            question: "Как записывается операция объединения отношений A и B?",
            type: "radio",
            answers: [
                { text: "A JOIN B", isCorrect: false },
                { text: "A UNION B", isCorrect: true },
                { text: "A TIMES B", isCorrect: false },
                { text: "A MINUS B", isCorrect: false },
            ],
        },
        {
            question: "Что происходит с одинаковым кортежем, который содержится и в A, и в B, при операции UNION?",
            type: "radio",
            answers: [
                { text: "Он удаляется из результата", isCorrect: false },
                { text: "Он включается один раз", isCorrect: true },
                { text: "Он включается дважды", isCorrect: false },
                { text: "Возникает ошибка", isCorrect: false },
            ],
        },
        {
            question: "Что является результатом операции пересечения двух отношений?",
            type: "radio",
            answers: [
                { text: "Все возможные комбинации кортежей A и B", isCorrect: false },
                { text: "Кортежи, принадлежащие одновременно A и B", isCorrect: true },
                { text: "Кортежи, принадлежащие только A", isCorrect: false },
                { text: "Кортежи, принадлежащие только B", isCorrect: false },
            ],
        },
        {
            question: "Как записывается операция пересечения?",
            type: "radio",
            answers: [
                { text: "A MINUS B", isCorrect: false },
                { text: "A UNION B", isCorrect: false },
                { text: "A JOIN B", isCorrect: false },
                { text: "A INTERSECT B", isCorrect: true },
            ],
        },
        {
            question: "Что делает операция вычитания A MINUS B?",
            type: "radio",
            answers: [
                { text: "Выбирает кортежи, находящиеся в A и не находящиеся в B", isCorrect: true },
                { text: "Выбирает общие кортежи A и B", isCorrect: false },
                { text: "Объединяет A и B", isCorrect: false },
                { text: "Перемножает кортежи A и B", isCorrect: false },
            ],
        },
        {
            question: "Что представляет собой декартово произведение двух отношений?",
            type: "radio",
            answers: [
                { text: "Выбор только первого отношения", isCorrect: false },
                { text: "Выбор только одинаковых строк", isCorrect: false },
                { text: "Соединение каждой строки первого отношения с каждой строкой второго", isCorrect: true },
                { text: "Удаление повторяющихся строк", isCorrect: false },
            ],
        },
        {
            question: "Чему равна мощность декартова произведения A TIMES B?",
            type: "radio",
            answers: [
                { text: "Произведению мощностей A и B", isCorrect: true },
                { text: "Разности мощностей A и B", isCorrect: false },
                { text: "Сумме мощностей A и B", isCorrect: false },
                { text: "Максимальной мощности A и B", isCorrect: false },
            ],
        },
        {
            question: "Что делает операция выборки (селекции)?",
            type: "radio",
            answers: [
                { text: "Выбирает определённые столбцы", isCorrect: false },
                { text: "Объединяет таблицы", isCorrect: false },
                { text: "Переименовывает атрибуты", isCorrect: false },
                { text: "Выбирает кортежи, удовлетворяющие заданному условию", isCorrect: true },
            ],
        },
        {
            question: "Какой \"срез\" отношения образует операция выборки?",
            type: "radio",
            answers: [
                { text: "Смешанный", isCorrect: false },
                { text: "Горизонтальный", isCorrect: true },
                { text: "Диагональный", isCorrect: false },
                { text: "Вертикальный", isCorrect: false },
            ],
        },
        {
            question: "Что делает операция проекции?",
            type: "radio",
            answers: [
                { text: "Выбирает строки по условию", isCorrect: false },
                { text: "Объединяет два отношения", isCorrect: false },
                { text: "Умножает отношения", isCorrect: false },
                { text: "Выбирает определённые атрибуты отношения", isCorrect: true },
            ],
        },
        {
            question: ". Какой \"срез\" отношения образует операция проекции?",
            type: "radio",
            answers: [
                { text: "Диагональный", isCorrect: false },
                { text: "Вертикальный", isCorrect: true },
                { text: "Круговой", isCorrect: false },
                { text: "Горизонтальный", isCorrect: false },
            ],
        },
        {
            question: "Что происходит с дубликатами кортежей при выполнении проекции?",
            type: "radio",
            answers: [
                { text: "Все дубликаты сохраняются", isCorrect: false },
                { text: "Дубликаты преобразуются в NULL", isCorrect: false },
                { text: "Возникает ошибка", isCorrect: false },
                { text: "Дубликаты автоматически удаляются", isCorrect: true },
            ],
        },
        {
            question: "Что представляет собой операция соединения отношений?",
            type: "radio",
            answers: [
                { text: "Операцию переименования", isCorrect: false },
                { text: "Результат применения декартова произведения и выборки по условию", isCorrect: true },
                { text: "Только операцию проекции", isCorrect: false },
                { text: "Только декартово произведение", isCorrect: false },
            ],
        },
        {
            question: ". Как называется соединение, выполняемое по условию равенства атрибутов X и Y?",
            type: "radio",
            answers: [
                { text: "Деление", isCorrect: false },
                { text: "Декартово соединение", isCorrect: false },
                { text: "Тэта-соединение", isCorrect: false },
                { text: "Экви-соединение", isCorrect: true },
            ],
        },
        {
            question: "В чем особенность естественного соединения?",
            type: "radio",
            answers: [
                { text: "Оно всегда возвращает все возможные пары строк", isCorrect: false },
                { text: "Оно выполняется только для отношений с разным количеством атрибутов", isCorrect: false },
                { text: "Оно не использует значения атрибутов", isCorrect: false },
                { text: "Оно соединяет строки по одинаковым атрибутам и включает совпадающие атрибуты только один раз", isCorrect: true },
            ],
        },
        {
            question: "Для решения какого типа задачи особенно удобно использовать операцию деления?",
            type: "radio",
            answers: [
                { text: "\"Какие сотрудники имеют зарплату больше 1000?\"", isCorrect: false },
                { text: "\"Какие поставщики поставляют все детали?\"", isCorrect: true },
                { text: "\"Какие города указаны в таблице?\"", isCorrect: false },
                { text: "\"Какие строки находятся в двух таблицах?\"", isCorrect: false },
            ],
        },
        {
            question: "В чем главное различие реляционной алгебры и реляционного исчисления при формировании запроса?",
            type: "radio",
            answers: [
                { text: "Алгебра работает только с числами, а исчисление - только с текстом", isCorrect: false },
                { text: "Исчисление не может работать с отношениями", isCorrect: false },
                { text: "Алгебра задаёт последовательность операций, а исчисление описывает условия для результата", isCorrect: true },
                { text: "Между ними нет никакого различия", isCorrect: false },
            ],
        },
    ],
};

export default test6;