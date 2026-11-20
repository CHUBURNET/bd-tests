import type { ITest } from "../types/ITest.ts";

const testEx1: ITest = {
    name: "Экзаменационный 1",
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
            question: "Основными объектами СУБД MS Access являются:",
            type: "radio",
            answers: [
                { text: "отчеты, таблицы, формы.", isCorrect: false },
                { text: "таблицы, формы, запросы, отчеты.", isCorrect: true },
                { text: "Формы, таблицы, запросы, выборки.", isCorrect: false },
                { text: "формы, таблицы, строки, отчеты.", isCorrect: false },
            ],
        },
        {
            question: "Запросы в СУБД Access предназначены для:",
            type: "radio",
            answers: [
                { text: "поиска, сортировки, добавления и удаления, обновления записей.", isCorrect: true },
                { text: "поиска и сортировки данных.", isCorrect: false },
                { text: "добавления и просмотра данных.", isCorrect: false },
                { text: "для редактирования данных в таблице, поиска возможностей разных операций", isCorrect: false },
            ],
        },
        {
            question: "Какие типы данных используются в СУБД MS Access для хранения графических объектов?",
            type: "radio",
            answers: [
                { text: "OLE.", isCorrect: true },
                { text: "MEMO.", isCorrect: false },
                { text: "Гиперссылка.", isCorrect: false },
                { text: "Текстовый.", isCorrect: false },
            ],
        },
        {
            question: "Какой тип данных необходимо выбрать для ввода суммы 4784 рублей, 67 $?",
            type: "radio",
            answers: [
                { text: "Финансовый.", isCorrect: false },
                { text: "Денежный.", isCorrect: true },
                { text: "Числовой.", isCorrect: false },
                { text: "Текстовый.", isCorrect: false },
            ],
        },
        {
            question: "Форма в СУБД Access предназначена для:",
            type: "radio",
            answers: [
                { text: "изменения готовой базы данных", isCorrect: false },
                { text: "удобства ввода данных в БД.", isCorrect: false },
                { text: "удобства ввода и просмотра данных таблицы.", isCorrect: true },
                { text: "создания документов для печати.", isCorrect: false },
            ],
        },
        {
            question: "Типом полей СУБД Access не является:",
            type: "radio",
            answers: [
                { text: "логический.", isCorrect: false },
                { text: "счетчик.", isCorrect: false },
                { text: "финансовый.", isCorrect: true },
                { text: "вычисляемый.", isCorrect: false },
            ],
        },
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
            question: "Какое свойство транзакций обеспечивает сериализация?",
            type: "radio",
            answers: [
                { text: "Доступность базы данных только одному пользователю.", isCorrect: false },
                { text: "Увеличение объёма базы данных.", isCorrect: false },
                { text: "Изолированность транзакций.", isCorrect: true },
                { text: "Автоматическое удаление данных.", isCorrect: false },
            ],
        },
        {
            question: "Как расшифровывается S-Lock?",
            type: "radio",
            answers: [
                { text: "System Lock.", isCorrect: false },
                { text: "Shared Lock.", isCorrect: true },
                { text: "Server Lock.", isCorrect: false },
                { text: "Secure Link.", isCorrect: false },
            ],
        },
        {
            question: "Какие блокировки могут одновременно использовать несколько транзакций для чтения одного объекта?",
            type: "radio",
            answers: [
                { text: "Только X-блокировки.", isCorrect: false },
                { text: "Только блокировки базы данных.", isCorrect: false },
                { text: "Только блокировки записи.", isCorrect: false },
                { text: "S-блокировки.", isCorrect: true },
            ],
        },
        {
            question: "Какой уровень изолированности обеспечивает отсутствие фантомов согласно стандартной модели SQL?",
            type: "radio",
            answers: [
                { text: "REPEATABLE READ.", isCorrect: false },
                { text: "READ COMMITTED.", isCorrect: false },
                { text: "SERIALIZABLE.", isCorrect: true },
                { text: "READ UNCOMMITTED.", isCorrect: false },
            ],
        },
        {
            question: "Какой уровень изолированности обеспечивает наиболее строгие гарантии, соответствующие последовательному выполнению транзакций?",
            type: "radio",
            answers: [
                { text: "READ UNCOMMITTED.", isCorrect: false },
                { text: "SERIALIZABLE.", isCorrect: true },
                { text: "READ COMMITTED.", isCorrect: false },
                { text: "REPEATABLE READ.", isCorrect: false },
            ],
        },
        {
            question: "Какие блокировки могут одновременно использовать несколько транзакций для чтения одного объекта?",
            type: "radio",
            answers: [
                { text: "Только X-блокировки.", isCorrect: false },
                { text: "Только блокировки базы данных.", isCorrect: false },
                { text: "Только блокировки записи.", isCorrect: false },
                { text: "S-блокировки.", isCorrect: true },
            ],
        },
    ],
};

export default testEx1;