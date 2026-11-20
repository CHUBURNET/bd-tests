import type { ITest } from "../types/ITest.ts";

const test12: ITest = {
    name: "Лекция 12",
    questions: [
        {
            question: "Что означает аббревиатура SQL?",
            type: "radio",
            answers: [
                { text: "System Quality Language", isCorrect: false },
                { text: "Structured Query Language", isCorrect: true },
                { text: "Simple Query Logic", isCorrect: false },
                { text: "Standard Question Language", isCorrect: false },
            ],
        },
        {
            question: "Для чего предназначена группа команд DDL?",
            type: "radio",
            answers: [
                { text: "Для управления транзакциями", isCorrect: false },
                { text: "Для управления правами пользователей базы данных", isCorrect: false },
                { text: "Для создания и изменения структуры базы данных", isCorrect: true },
                { text: "Для поиска информации в таблицах", isCorrect: false },
            ],
        },
        {
            question: "Какая команда используется для создания новой таблицы?",
            type: "radio",
            answers: [
                { text: "SELECT TABLE", isCorrect: false },
                { text: "UPDATE TABLE", isCorrect: false },
                { text: "INSERT TABLE", isCorrect: false },
                { text: "CREATE TABLE", isCorrect: true },
            ],
        },
        {
            question: "Какую функцию выполняет команда ALTER TABLE?",
            type: "radio",
            answers: [
                { text: "Выводит данные на экран компьютеа пользователя", isCorrect: false },
                { text: "Удаляет все записи из таблицы", isCorrect: false },
                { text: "Создаёт новую базу данных", isCorrect: false },
                { text: "Изменяет структуру существующей таблицы", isCorrect: true },
            ],
        },
        {
            question: "Какая команда полностью удаляет таблицу вместе с её структурой?",
            type: "radio",
            answers: [
                { text: "SELECT TABLE", isCorrect: false },
                { text: "DELETE TABLE", isCorrect: false },
                { text: "UPDATE TABLE", isCorrect: false },
                { text: "DROP  TABLE", isCorrect: true },
            ],
        },
        {
            question: "Для чего применяется команда TRUNCATE TABLE?",
            type: "radio",
            answers: [
                { text: "Для изменения названия  таблицы", isCorrect: false },
                { text: "Для добавления новых  столбцов", isCorrect: false },
                { text: "Для удаления всех строк из таблицы", isCorrect: true },
                { text: "Для поиска определённых  записей", isCorrect: false },
            ],
        },
        {
            question: "Какая группа команд используется для добавления, изменения и удаления данных?",
            type: "radio",
            answers: [
                { text: "DDL", isCorrect: false },
                { text: "DML", isCorrect: true },
                { text: "TCL", isCorrect: false },
                { text: "DCL", isCorrect: false },
            ],
        },
        {
            question: "Какая команда используется для получения данных из таблицы?",
            type: "radio",
            answers: [
                { text: "DROP", isCorrect: false },
                { text: "ALTER", isCorrect: false },
                { text: "INSERT", isCorrect: false },
                { text: "SELECT", isCorrect: true },
            ],
        },
        {
            question: "Какая команда добавляет новую запись в таблицу?",
            type: "radio",
            answers: [
                { text: "UPDATE", isCorrect: false },
                { text: "INSERT", isCorrect: true },
                { text: "DELETE", isCorrect: false },
                { text: "CREATE", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется команда UPDATE?",
            type: "radio",
            answers: [
                { text: "Для изменения существующих данных", isCorrect: true },
                { text: "Для создания новой таблицы данных", isCorrect: false },
                { text: "Для предоставления прав доступа", isCorrect: false },
                { text: "Для удаления всей таблицы данных", isCorrect: false },
            ],
        },
        {
            question: "Какая команда удаляет определённые записи из таблицы?",
            type: "radio",
            answers: [
                { text: "GRANT", isCorrect: false },
                { text: "DELETE", isCorrect: true },
                { text: "CREATE", isCorrect: false },
                { text: "ALTER", isCorrect: false },
            ],
        },
        {
            question: "Какая команда SQL используется для фильтрации записей по условию?",
            type: "radio",
            answers: [
                { text: "GROUP BY", isCorrect: false },
                { text: "ORDER BY", isCorrect: false },
                { text: "WHERE", isCorrect: true },
                { text: "JOIN", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется оператор JOIN?",
            type: "radio",
            answers: [
                { text: "Для удаления записей из таблицы базы данных", isCorrect: false },
                { text: "Для создания нового индекса", isCorrect: false },
                { text: "Для соединения данных из нескольких таблиц", isCorrect: true },
                { text: "Для изменения прав пользователей базы данных", isCorrect: false },
            ],
        },
        {
            question: "Какая команда сортирует данные в порядке возрастания или убывания?",
            type: "radio",
            answers: [
                { text: "ORDER", isCorrect: true },
                { text: "INSERT", isCorrect: false },
                { text: "DELETE", isCorrect: false },
                { text: "WHERE", isCorrect: false },
            ],
        },
        {
            question: "Какая функция подсчитывает количество записей в таблице?",
            type: "radio",
            answers: [
                { text: "COUNT()", isCorrect: true },
                { text: "MAX ()", isCorrect: false },
                { text: "SUM ()", isCorrect: false },
                { text: "AVG ()", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется команда GRANT?",
            type: "radio",
            answers: [
                { text: "Для предоставления прав", isCorrect: true },
                { text: "Для изменения структуры базы данных", isCorrect: false },
                { text: "Для удаления таблицы базы данных", isCorrect: false },
                { text: "Для отмены транзакции базы данных", isCorrect: false },
            ],
        },
        {
            question: "Какую функцию выполняет команда REVOKE?",
            type: "radio",
            answers: [
                { text: "Сохраняет изменения транзакции", isCorrect: false },
                { text: "Добавляет новую запись в базу данных", isCorrect: false },
                { text: "Создаёт новую таблицу для пользователя базы данных", isCorrect: false },
                { text: "Отзывает ранее предоставленные права доступа", isCorrect: true },
            ],
        },
        {
            question: "Что означает TCL в языке SQL?",
            type: "radio",
            answers: [
                { text: "Язык управления доступом", isCorrect: false },
                { text: "Язык манипулирования данными", isCorrect: false },
                { text: "Язык управления транзакциями", isCorrect: true },
                { text: "Язык определения данных", isCorrect: false },
            ],
        },
        {
            question: "Что такое транзакция в базе данных?",
            type: "radio",
            answers: [
                { text: "Набор операций, выполняемых как единое целое", isCorrect: true },
                { text: "Отдельный столбец таблицы", isCorrect: false },
                { text: "Способ сортировки записей", isCorrect: false },
                { text: "Команда для создания индекса для достижения динного целого", isCorrect: false },
            ],
        },
        {
            question: "Какая команда подтверждает и сохраняет изменения транзакции?",
            type: "radio",
            answers: [
                { text: "DELETE", isCorrect: false },
                { text: "SAVEPOINT", isCorrect: false },
                { text: "ROLLBACK", isCorrect: false },
                { text: "COMMIT", isCorrect: true },
            ],
        },
        {
            question: "Для чего используется команда ROLLBACK?",
            type: "radio",
            answers: [
                { text: "Для предоставления прав доступа пользователю базы данных", isCorrect: false },
                { text: "Для создания в базе данных ииндекса для новой таблицы", isCorrect: false },
                { text: "Для сортировки записей", isCorrect: false },
                { text: "Для отмены неподтверждённых изменений транзакции", isCorrect: true },
            ],
        },
        {
            question: "Для чего предназначена команда SAVEPOINT?",
            type: "radio",
            answers: [
                { text: "Для установки контрольной точки внутри транзакции", isCorrect: true },
                { text: "Для полного удаления созданной перспективной базы данных", isCorrect: false },
                { text: "Для автоматической сортировки стабильной  таблицы базы данных", isCorrect: false },
                { text: "Для создания нового пользователя по базе данных", isCorrect: false },
            ],
        },
        {
            question: "Какой уровень изоляции транзакций является самым строгим?",
            type: "radio",
            answers: [
                { text: "REPEATABLE READ", isCorrect: false },
                { text: "READ UNCOMMITTED", isCorrect: false },
                { text: "READ COMMITTED", isCorrect: false },
                { text: "SERIALIZABLE", isCorrect: true },
            ],
        },
        {
            question: "Какой уровень изоляции допускает чтение неподтверждённых данных?",
            type: "radio",
            answers: [
                { text: "READ COMMITTED BD", isCorrect: false },
                { text: "READ UNCOMMITTED", isCorrect: true },
                { text: "SERIALIZABLE", isCorrect: false },
                { text: "REPEATABLE READ", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется команда BEGIN TRANSACTION?",
            type: "radio",
            answers: [
                { text: "Для начала выполнения транзакции", isCorrect: true },
                { text: "Для завершения работы базы данных", isCorrect: false },
                { text: "Для удаления всех записей", isCorrect: false },
                { text: "Для отмены всех таблиц", isCorrect: false },
            ],
        },
    ],
};

export default test12;