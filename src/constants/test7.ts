import type { ITest } from "../types/ITest.ts";

const test7: ITest = {
    name: "Лекция 7",
    questions: [
        {
            question: "Что такое транзакция?",
            type: "radio",
            answers: [
                { text: "Резервная копия базы данных", isCorrect: false },
                { text: "Индекс таблицы", isCorrect: false },
                { text: "Отдельная таблица базы данных", isCorrect: false },
                { text: "Последовательность операций, выполняющаяся как единое целое", isCorrect: true },
            ],
        },
        {
            question: "Кто определяет, какая последовательность операций составляет одну транзакцию?",
            type: "radio",
            answers: [
                { text: "Администратор сети", isCorrect: false },
                { text: "Пользователь операционной системы", isCorrect: false },
                { text: "Разработчик приложения исходя из смысла обработки данных", isCorrect: true },
                { text: "Только сервер базы данных", isCorrect: false },
            ],
        },
        {
            question: "Какова основная цель использования транзакций?",
            type: "radio",
            answers: [
                { text: "Обеспечение целостности и согласованности базы данных", isCorrect: true },
                { text: "Удаление индексов", isCorrect: false },
                { text: "Увеличение размера базы данных", isCorrect: false },
                { text: "Увеличение количества таблиц", isCorrect: false },
            ],
        },
        {
            question: "Как расшифровывается аббревиатура ACID?",
            type: "radio",
            answers: [
                { text: "Access, Control, Index, Data", isCorrect: false },
                { text: "Attribute, Column, Index, Domain", isCorrect: false },
                { text: "Atomicity, Consistency, Isolation, Durability", isCorrect: true },
                { text: "Analysis, Control, Information, Database", isCorrect: false },
            ],
        },
        {
            question: "Что означает свойство атомарности (Atomicity)?",
            type: "radio",
            answers: [
                { text: "Данные обязательно сохраняются на диске", isCorrect: false },
                { text: "Транзакции выполняются одновременно", isCorrect: false },
                { text: "Транзакция выполняется только одним пользователем", isCorrect: false },
                { text: "Транзакция должна быть выполнена полностью или не выполнена вовсе", isCorrect: true },
            ],
        },
        {
            question: "Что гарантирует свойство согласованности (Consistency)?",
            type: "radio",
            answers: [
                { text: "Переход базы данных из одного согласованного состояния в другое", isCorrect: true },
                { text: "Одновременное выполнение всех транзакций", isCorrect: false },
                { text: "Удаление всех старых данных", isCorrect: false },
                { text: "Создание резервной копии после каждой операции", isCorrect: false },
            ],
        },
        {
            question: "Что означает свойство изолированности (Isolation)?",
            type: "radio",
            answers: [
                { text: "Все пользователи получают одинаковые права", isCorrect: false },
                { text: "Транзакции не могут изменять данные", isCorrect: false },
                { text: "База данных отключается на время транзакции", isCorrect: false },
                { text: "Конкурирующие транзакции изолированы друг от друга", isCorrect: true },
            ],
        },
        {
            question: "Что означает свойство долговечности (Durability)?",
            type: "radio",
            answers: [
                { text: "Транзакция не может быть отменена", isCorrect: false },
                { text: "Все данные должны храниться только в оперативной памяти", isCorrect: false },
                { text: "Изменения успешной транзакции не должны быть потеряны", isCorrect: true },
                { text: "Транзакция должна выполняться очень быстро", isCorrect: false },
            ],
        },
        {
            question: "Какие SQL-операторы чаще всего выполняют изменения данных внутри транзакции?",
            type: "radio",
            answers: [
                { text: "INSERT, UPDATE, DELETE", isCorrect: true },
                { text: "SELECT, WHERE, ORDER BY", isCorrect: false },
                { text: "CREATE, ALTER, DROP", isCorrect: false },
                { text: "SELECT, CREATE, GRANT", isCorrect: false },
            ],
        },
        {
            question: "Какая команда фиксирует изменения транзакции?",
            type: "radio",
            answers: [
                { text: "SAVE", isCorrect: false },
                { text: "COMMIT", isCorrect: true },
                { text: "UNDO", isCorrect: false },
                { text: "ROLLBACK", isCorrect: false },
            ],
        },
        {
            question: "Что делает оператор ROLLBACK?",
            type: "radio",
            answers: [
                { text: "Создаёт новую таблицу", isCorrect: false },
                { text: "Фиксирует изменения", isCorrect: false },
                { text: "Создаёт резервную копию", isCorrect: false },
                { text: "Отменяет изменения текущей незавершённой транзакции", isCorrect: true },
            ],
        },
        {
            question: "Что происходит после выполнения COMMIT?",
            type: "radio",
            answers: [
                { text: "Все изменения текущей транзакции становятся постоянными", isCorrect: true },
                { text: "База данных возвращается в исходное состояние", isCorrect: false },
                { text: "Удаляется журнал транзакций", isCorrect: false },
                { text: "Все изменения отменяются", isCorrect: false },
            ],
        },
        {
            question: "Что происходит при выполнении ROLLBACK?",
            type: "radio",
            answers: [
                { text: "Изменения текущей транзакции отменяются", isCorrect: true },
                { text: "Создаётся точка сохранения", isCorrect: false },
                { text: "Создаётся архивная копия", isCorrect: false },
                { text: "Изменения становятся постоянными", isCorrect: false },
            ],
        },
        {
            question: "Что означает COMMIT WORK?",
            type: "radio",
            answers: [
                { text: "Начало транзакции", isCorrect: false },
                { text: "Фиксацию текущей транзакции", isCorrect: true },
                { text: "Создание журнала", isCorrect: false },
                { text: "Откат транзакции", isCorrect: false },
            ],
        },
        {
            question: "Что означает ROLLBACK WORK?",
            type: "radio",
            answers: [
                { text: "Откат текущей транзакции", isCorrect: true },
                { text: "Фиксацию транзакции", isCorrect: false },
                { text: "Создание точки сохранения", isCorrect: false },
                { text: "Начало новой таблицы", isCorrect: false },
            ],
        },
        {
            question: "Почему не рекомендуется создавать слишком большие транзакции?",
            type: "radio",
            answers: [
                { text: "При сбое может быть отменено большое количество независимых операций", isCorrect: true },
                { text: "Они не могут использовать COMMIT", isCorrect: false },
                { text: "Они всегда удаляют базу данных", isCorrect: false },
                { text: "Они не могут использовать ROLLBACK", isCorrect: false },
            ],
        },
        {
            question: "Что такое автокоммит?",
            type: "radio",
            answers: [
                { text: "Автоматическое создание индексов", isCorrect: false },
                { text: "Автоматическая фиксация изменений", isCorrect: true },
                { text: "Автоматическое удаление транзакций", isCorrect: false },
                { text: "Автоматическое создание резервной копии", isCorrect: false },
            ],
        },
        {
            question: "Каким оператором в расширенной модели явно начинается транзакция?",
            type: "radio",
            answers: [
                { text: "OPEN TRANSACTION", isCorrect: false },
                { text: "START DATABASE", isCorrect: false },
                { text: "CREATE TRANSACTION", isCorrect: false },
                { text: "BEGIN TRANSACTION", isCorrect: true },
            ],
        },
        {
            question: "Для чего используется SAVE TRANSACTION?",
            type: "radio",
            answers: [
                { text: "Для создания резервной копии базы данных", isCorrect: false },
                { text: "Для создания точки сохранения внутри транзакции", isCorrect: true },
                { text: "Для удаления транзакции", isCorrect: false },
                { text: "Для окончательной фиксации транзакции", isCorrect: false },
            ],
        },
        {
            question: "Что позволяет сделать точка сохранения (SAVEPOINT)?",
            type: "radio",
            answers: [
                { text: "Создать новый сервер", isCorrect: false },
                { text: "Отменить только часть выполненной работы транзакции", isCorrect: true },
                { text: "Запретить выполнение SQL", isCorrect: false },
                { text: "Удалить всю базу данных", isCorrect: false },
            ],
        },
        {
            question: "Что произойдет при выполнении полного ROLLBACK?",
            type: "radio",
            answers: [
                { text: "Будет отменена вся текущая транзакция", isCorrect: true },
                { text: "Будет отменена только последняя команда", isCorrect: false },
                { text: "Будет создана новая транзакция", isCorrect: false },
                { text: "Будет выполнен COMMIT", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется журнал изменений базы данных?",
            type: "radio",
            answers: [
                { text: "Для восстановления согласованного состояния базы данных после сбоя", isCorrect: true },
                { text: "Для сортировки таблиц", isCorrect: false },
                { text: "Для хранения только резервных копий", isCorrect: false },
                { text: "Для хранения имен пользователей", isCorrect: false },
            ],
        },
        {
            question: "Какой результат должен сохраняться после восстановления базы данных?",
            type: "radio",
            answers: [
                { text: "Результаты зафиксированных транзакций", isCorrect: true },
                { text: "Только результаты SELECT", isCorrect: false },
                { text: "Результаты только незавершённых транзакций", isCorrect: false },
                { text: "Только результаты последних операций", isCorrect: false },
            ],
        },
        {
            question: "Какой результат не должен присутствовать после восстановления базы данных?",
            type: "radio",
            answers: [
                { text: "Данные архивной копии", isCorrect: false },
                { text: "Результаты незафиксированных транзакций", isCorrect: true },
                { text: "Согласованные данные", isCorrect: false },
                { text: "Результаты зафиксированных транзакций", isCorrect: false },
            ],
        },
        {
            question: "Как называется протокол \"пиши сначала в журнал\"?",
            type: "radio",
            answers: [
                { text: "SQL", isCorrect: false },
                { text: "RAID", isCorrect: false },
                { text: "ACID", isCorrect: false },
                { text: "WAL", isCorrect: true },
            ],
        },
        {
            question: "Что означает WAL?",
            type: "radio",
            answers: [
                { text: "Write Ahead Log", isCorrect: true },
                { text: "Write All Lines", isCorrect: false },
                { text: "Write After Login", isCorrect: false },
                { text: "Work Access Level", isCorrect: false },
            ],
        },
        {
            question: "Какой основной принцип WAL?",
            type: "radio",
            answers: [
                { text: "Сначала изменённый объект записывается в БД, затем журнал", isCorrect: false },
                { text: "Сначала запись об изменении попадает во внешний журнал, затем изменённый объект - в БД", isCorrect: true },
                { text: "Журнал вообще не используется", isCorrect: false },
                { text: "Журнал создаётся только после сбоя", isCorrect: false },
            ],
        },
        {
            question: "Что означает операция UNDO при восстановлении?",
            type: "radio",
            answers: [
                { text: "Фиксацию транзакции", isCorrect: false },
                { text: "Повторное выполнение операции", isCorrect: false },
                { text: "Отмену изменений и восстановление предыдущего состояния", isCorrect: true },
                { text: "Создание архивной копии", isCorrect: false },
            ],
        },
        {
            question: "Что означает операция REDO при восстановлении?",
            type: "radio",
            answers: [
                { text: "Удаление журнала", isCorrect: false },
                { text: "Повторное выполнение операций транзакции", isCorrect: true },
                { text: "Отмену транзакции", isCorrect: false },
                { text: "Создание точки сохранения", isCorrect: false },
            ],
        },
        {
            question: "Что необходимо для восстановления базы данных после жесткого сбоя основного внешнего носителя?",
            type: "radio",
            answers: [
                { text: "Только команда ROLLBACK", isCorrect: false },
                { text: "Архивная копия базы данных и журнал изменений", isCorrect: true },
                { text: "Только оперативная память", isCorrect: false },
                { text: "Только команда COMMIT", isCorrect: false },
            ],
        },
    ],
};

export default test7;