import type { ITest } from "../types/ITest.ts";

const test11: ITest = {
    name: "Лекция 11",
    questions: [
        {
            question: "Что такое ограничения (Constraints) в базах данных?",
            type: "radio",
            answers: [
                { text: "Команды для создания новых баз данных.", isCorrect: false },
                { text: "Правила обеспечения целостности и корректности данных.", isCorrect: true },
                { text: "Средства изменения внешнего вида таблиц.", isCorrect: false },
                { text: "Методы ускорения работы операционной системы.", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется ограничение NOT NULL?",
            type: "radio",
            answers: [
                { text: "даляет записи из таблицы автоматически.", isCorrect: false },
                { text: "Запрещает хранение пустых значений NULL.", isCorrect: true },
                { text: "Запрещает повторение значений в столбце.", isCorrect: false },
                { text: "Устанавливает значение по умолчанию.", isCorrect: false },
            ],
        },
        {
            question: "Какую функцию выполняет ограничение UNIQUE?",
            type: "radio",
            answers: [
                { text: "Обеспечивает уникальность значений в столбце.", isCorrect: true },
                { text: "Проверяет правильность числовых значений.", isCorrect: false },
                { text: "Запрещает удаление записей из таблицы.", isCorrect: false },
                { text: "Создаёт связь между двумя таблицами.", isCorrect: false },
            ],
        },
        {
            question: "Что представляет собой PRIMARY KEY?",
            type: "radio",
            answers: [
                { text: "Уникальный идентификатор каждой записи таблицы.", isCorrect: true },
                { text: "Ограничение для сортировки записей.", isCorrect: false },
                { text: "Поле для хранения текстовой информации.", isCorrect: false },
                { text: "Команда для удаления повторяющихся строк.", isCorrect: false },
            ],
        },
        {
            question: "Какое ограничение обеспечивает ссылочную целостность?",
            type: "radio",
            answers: [
                { text: "CHECK.", isCorrect: false },
                { text: "NOT NULL.", isCorrect: false },
                { text: "FOREIGN KEY.", isCorrect: true },
                { text: "DEFAULT.", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется ограничение CHECK?",
            type: "radio",
            answers: [
                { text: "Для проверки значений по заданному условию.", isCorrect: true },
                { text: "Для объединения нескольких таблиц", isCorrect: false },
                { text: "Для изменения имени столбца.", isCorrect: false },
                { text: "Для создания новой таблицы.", isCorrect: false },
            ],
        },
        {
            question: "Какую функцию выполняет ограничение DEFAULT?",
            type: "radio",
            answers: [
                { text: "Устанавливает значение по умолчанию.", isCorrect: true },
                { text: "Удаляет значения, которые повторяются.", isCorrect: false },
                { text: "Создаёт первичный ключ таблицы.", isCorrect: false },
                { text: "Запрещает изменение данных в таблице.", isCorrect: false },
            ],
        },
        {
            question: "Какое ограничение сочетает в себе свойства NOT NULL и UNIQUE?",
            type: "radio",
            answers: [
                { text: "DEFAULT.", isCorrect: false },
                { text: "CHECK.", isCorrect: false },
                { text: "PRIMARY KEY.", isCorrect: true },
                { text: "FOREIGN KEY.", isCorrect: false },
            ],
        },
        {
            question: "Что произойдёт при выполнении условия CHECK (age >= 18)?",
            type: "radio",
            answers: [
                { text: "В таблице автоматически изменится возраст.", isCorrect: false },
                { text: "В таблицу можно добавить любой возраст.", isCorrect: false },
                { text: "В таблицу можно добавить только возраст до 18.", isCorrect: false },
                { text: "В таблицу можно добавить возраст от 18 лет.", isCorrect: true },
            ],
        },
        {
            question: "Что такое ссылочная целостность базы данных?",
            type: "radio",
            answers: [
                { text: "Правильная сортировка записей в таблицах.", isCorrect: false },
                { text: "Автоматическое удаление повторяющихся записей.", isCorrect: false },
                { text: "Корректность ссылок между связанными таблицами.", isCorrect: true },
                { text: "Совпадение количества строк во всех таблицах.", isCorrect: false },
            ],
        },
        {
            question: "Какие основные типы связей используются в реляционных базах данных?",
            type: "radio",
            answers: [
                { text: "Один к одному, один ко многим, многие ко многим.", isCorrect: true },
                { text: "Внутренняя, внешняя и смешанная.", isCorrect: false },
                { text: "Главная, дополнительная и временная.", isCorrect: false },
                { text: "Простая, сложная и составная.", isCorrect: false },
            ],
        },
        {
            question: "Что означает связь один к одному (1:1)?",
            type: "radio",
            answers: [
                { text: "Каждая запись связана с несколькими записями.", isCorrect: false },
                { text: "Несколько записей связаны с одной записью.", isCorrect: false },
                { text: "Каждой записи соответствует не более одной записи.", isCorrect: true },
                { text: "Одна запись связана со всеми записями таблицы.", isCorrect: false },
            ],
        },
        {
            question: "Какой пример соответствует связи один ко многим (1:N)?",
            type: "radio",
            answers: [
                { text: "Один паспорт принадлежит нескольким гражданам.", isCorrect: false },
                { text: "Один преподаватель ведёт несколько курсов.", isCorrect: true },
                { text: "Один курс принадлежит только одному студенту.", isCorrect: false },
                { text: "Один студент имеет только один студенческий билет.", isCorrect: false },
            ],
        },
        {
            question: "Что означает связь многие ко многим (M:N)?",
            type: "radio",
            answers: [
                { text: "Несколько записей одной таблицы связаны с несколькими записями другой.", isCorrect: true },
                { text: "Одна таблица содержит только один столбец.", isCorrect: false },
                { text: "Каждая запись существует независимо от остальных.", isCorrect: false },
                { text: "Одна запись связана только с одной записью.", isCorrect: false },
            ],
        },
        {
            question: "Для чего создаётся промежуточная таблица при связи M:N?",
            type: "radio",
            answers: [
                { text: "Для автоматического изменения структуры базы.", isCorrect: false },
                { text: "Для удаления первичных ключей из таблиц.", isCorrect: false },
                { text: "Для хранения только текстовых значений.", isCorrect: false },
                { text: "Для организации связи между двумя таблицами.", isCorrect: true },
            ],
        },
        {
            question: "В какой таблице обычно размещается внешний ключ при связи 1:N?",
            type: "radio",
            answers: [
                { text: "В таблице со стороны «многие».", isCorrect: true },
                { text: "В обеих таблицах одновременно обязательно.", isCorrect: false },
                { text: "В отдельной таблице для каждого значения.", isCorrect: false },
                { text: "В таблице, которая содержит только первичный ключ.", isCorrect: false },
            ],
        },
        {
            question: "Что делает параметр ON DELETE CASCADE?",
            type: "radio",
            answers: [
                { text: "Удаляет связанные записи при удалении родительской записи.", isCorrect: true },
                { text: "Запрещает удаление всех записей из таблицы.", isCorrect: false },
                { text: "Устанавливает значения внешнего ключа автоматически.", isCorrect: false },
                { text: "Создаёт копию удаляемой записи в другой таблице.", isCorrect: false },
            ],
        },
        {
            question: "Что выполняет параметр ON DELETE SET NULL?",
            type: "radio",
            answers: [
                { text: "Запрещает удаление родительской записи.", isCorrect: false },
                { text: "Удаляет всю связанную таблицу целиком.", isCorrect: false },
                { text: "Устанавливает NULL во внешних ключах связанных записей.", isCorrect: true },
                { text: "Заменяет внешний ключ значением первичного ключа.", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется ON DELETE RESTRICT?",
            type: "radio",
            answers: [
                { text: "Для создания дополнительного индекса таблицы.", isCorrect: false },
                { text: "Для запрета удаления родительской записи при наличии зависимостей.", isCorrect: true },
                { text: "Для автоматического удаления дочерних записей.", isCorrect: false },
                { text: "Для изменения внешнего ключа на NULL.", isCorrect: false },
            ],
        },
        {
            question: "Как называется процесс уменьшения избыточности данных в базе?",
            type: "radio",
            answers: [
                { text: "Индексация.", isCorrect: false },
                { text: "Сортировка.", isCorrect: false },
                { text: "Архивирование.", isCorrect: false },
                { text: "Нормализация.", isCorrect: true },
            ],
        },
        {
            question: "Как расшифровывается аббревиатура SQL?",
            type: "radio",
            answers: [
                { text: "Standard Question Language.", isCorrect: false },
                { text: "Structured Query Language.", isCorrect: true },
                { text: "Simple Quality Language.", isCorrect: false },
                { text: "System Quick Language.", isCorrect: false },
            ],
        },
        {
            question: "Для чего предназначен язык SQL?",
            type: "radio",
            answers: [
                { text: "Для настройки компьютерного оборудования.", isCorrect: false },
                { text: "Для разработки операционных систем.", isCorrect: false },
                { text: "Для создания графических изображений.", isCorrect: false },
                { text: "Для управления и обработки данных в БД.", isCorrect: true },
            ],
        },
        {
            question: "Что означает DDL в языке SQL?",
            type: "radio",
            answers: [
                { text: "Язык управления транзакциями.", isCorrect: false },
                { text: "Язык обработки графической информации.", isCorrect: false },
                { text: "Язык определения структуры данных.", isCorrect: true },
                { text: "Язык управления доступом.", isCorrect: false },
            ],
        },
        {
            question: "Какая команда используется для создания новой таблицы?",
            type: "radio",
            answers: [
                { text: "CREATE TABLE.", isCorrect: true },
                { text: "INSERT.", isCorrect: false },
                { text: "UPDATE.", isCorrect: false },
                { text: "SELECT.", isCorrect: false },
            ],
        },
        {
            question: "Какая команда используется для добавления новых записей?",
            type: "radio",
            answers: [
                { text: "DELETE FROM.", isCorrect: false },
                { text: "DROP TABLE.", isCorrect: false },
                { text: "ALTER TABLE.", isCorrect: false },
                { text: "INSERT INTO.", isCorrect: true },
            ],
        },
        {
            question: "Какая команда используется для получения данных из таблицы?",
            type: "radio",
            answers: [
                { text: "UPDATE.", isCorrect: false },
                { text: "CREATE.", isCorrect: false },
                { text: "SELECT.", isCorrect: true },
                { text: "DROP.", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется оператор WHERE?",
            type: "radio",
            answers: [
                { text: "Для создания новой базы данных.", isCorrect: false },
                { text: "Для удаления структуры таблицы.", isCorrect: false },
                { text: "Для фильтрации записей по условию.", isCorrect: true },
                { text: "Для сортировки записей таблицы.", isCorrect: false },
            ],
        },
        {
            question: "Какой оператор SQL применяется для сортировки данных?",
            type: "radio",
            answers: [
                { text: "GROUP BY.", isCorrect: false },
                { text: "HAVING.", isCorrect: false },
                { text: "WHERE.", isCorrect: false },
                { text: "ORDER BY.", isCorrect: true },
            ],
        },
        {
            question: "Какая агрегатная функция подсчитывает количество записей?",
            type: "radio",
            answers: [
                { text: "MAX().", isCorrect: false },
                { text: "COUNT().", isCorrect: true },
                { text: "AVG().", isCorrect: false },
                { text: "SUM().", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется оператор JOIN?",
            type: "radio",
            answers: [
                { text: "Для изменения структуры базы данных.", isCorrect: false },
                { text: "Для удаления записей из нескольких таблиц.", isCorrect: false },
                { text: "Для объединения данных из связанных таблиц.", isCorrect: true },
                { text: "Для создания нового первичного ключа.", isCorrect: false },
            ],
        },
    ],
};

export default test11;