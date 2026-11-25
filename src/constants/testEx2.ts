import type { ITest } from "../types/ITest.ts";

const testEx2: ITest = {
    name: "Экзаменационный 2",
    questions: [
        // 1
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
        // 2
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
        // 3
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
        // 4
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
        // 5
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
        // 6
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
        // 7
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
        // 8
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
        // 9
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
        // 10
        {
            question: "Что представляет собой информационная система?",
            type: "radio",
            answers: [
                { text: "Компьютерная сеть для подключения внешних устройств", isCorrect: false },
                { text: "Программный комплекс для хранения и обработки информации", isCorrect: true },
                { text: "Операционная система для управления файлами компьютера", isCorrect: false },
                { text: "Техническое устройство для передачи электрической энергии", isCorrect: false },
            ],
        },
        // 11
        {
            question: "Какие системы используются для создания настольных информационных систем?",
            type: "radio",
            answers: [
                { text: "Настольные системы управления базами данных", isCorrect: true },
                { text: "Системы управления промышленными роботами", isCorrect: false },
                { text: "Программы для настройки сетевых маршрутизаторов", isCorrect: false },
                { text: "Средства проектирования электронных микросхем", isCorrect: false },
            ],
        },
        // 12
        {
            question: "Для кого предназначены персональные информационные системы?",
            type: "radio",
            answers: [
                { text: "Для объединения сетей нескольких крупных предприятий", isCorrect: false },
                { text: "Для управления всеми подразделениями корпорации", isCorrect: false },
                { text: "Для обслуживания исключительно глобальных сетей", isCorrect: false },
                { text: "Для работы одного пользователя или сменной группы", isCorrect: true },
            ],
        },
        // 13
        {
            question: "Как организуется совместное использование информации в рабочих группах?",
            type: "radio",
            answers: [
                { text: "С помощью блокировок файлов и записей", isCorrect: true },
                { text: "С помощью разделения данных между несвязанными системами", isCorrect: false },
                { text: "С помощью удаления общих информационных ресурсов", isCorrect: false },
                { text: "С помощью отключения сетевых подключений", isCorrect: false },
            ],
        },
        // 14
        {
            question: "Какая проблема возникает при объединении сетей кампуса?",
            type: "radio",
            answers: [
                { text: "Невозможность использования локальных компьютеров", isCorrect: false },
                { text: "Полное исчезновение всех баз данных", isCorrect: false },
                { text: "Необходимость интеграции разнородных компонентов", isCorrect: true },
                { text: "Обязательное прекращение работы приложений", isCorrect: false },
            ],
        },
        // 15
        {
            question: "Какую функцию выполняет клиент в двухзвенной архитектуре \"клиент-сервер\"?",
            type: "radio",
            answers: [
                { text: "Выполняет исключительно резервное копирование серверов", isCorrect: false },
                { text: "Управляет электропитанием всех сетевых устройств", isCorrect: false },
                { text: "Формирует запросы и реализует логику обработки данных", isCorrect: true },
                { text: "Обеспечивает только физическую защиту оборудования", isCorrect: false },
            ],
        },
        // 16
        {
            question: "Как расшифровывается сокращение OLTP?",
            type: "radio",
            answers: [
                { text: "Организация локальной передачи файлов между компьютерами", isCorrect: false },
                { text: "Объединение логических таблиц программными средствами", isCorrect: false },
                { text: "Оперативное лицензирование технических приложений предприятия", isCorrect: false },
                { text: "Обработка транзакций в режиме реального времени", isCorrect: true },
            ],
        },
        // 17
        {
            question: "Для чего применяется многозвенная архитектура?",
            type: "radio",
            answers: [
                { text: "Для размещения всех функций в одном файле", isCorrect: false },
                { text: "Для исключения серверов из корпоративной сети", isCorrect: false },
                { text: "Для ограничения системы одним пользователем", isCorrect: false },
                { text: "Для разделения приложения на несколько частей", isCorrect: true },
            ],
        },
        // 18
        {
            question: "Что означает высокая готовность информационной системы?",
            type: "radio",
            answers: [
                { text: "Способность сохранять доступность для выполнения задач", isCorrect: true },
                { text: "Возможность запускаться исключительно вручную", isCorrect: false },
                { text: "Возможность работать только в рабочее время", isCorrect: false },
                { text: "Возможность хранить данные без резервных копий", isCorrect: false },
            ],
        },
        // 19
        {
            question: "Как расшифровывается ORB (Object Request Broker)?",
            type: "radio",
            answers: [
                { text: "Система управления базами данных.", isCorrect: false },
                { text: "Протокол передачи файлов.", isCorrect: false },
                { text: "Служба защиты информации.", isCorrect: false },
                { text: "Брокер запросов объектов.", isCorrect: true },
            ],
        },
        // 20
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
        // 21
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
        // 22
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
        // 23
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
        // 24
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
        // 25
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
        // 26
        {
            question: "Что означает время реакции на запрос?",
            type: "radio",
            answers: [
                { text: "Время установки СУБД.", isCorrect: false },
                { text: "Продолжительность создания таблицы.", isCorrect: false },
                { text: "Время включения компьютера.", isCorrect: false },
                { text: "Время между отправкой запроса и получением ответа системы.", isCorrect: true },
            ],
        },
        // 27
        {
            question: "Какой из перечисленных примеров является функциональным требованием к базе данных?",
            type: "radio",
            answers: [
                { text: "Формирование отчётов о продажах по регионам.", isCorrect: true },
                { text: "Ограничение бюджета проекта.", isCorrect: false },
                { text: "Установленный срок завершения разработки.", isCorrect: false },
                { text: "Ограничение стоимости компьютерного оборудования.", isCorrect: false },
            ],
        },
        // 28
        {
            question: "Какой характер имеет процесс проектирования баз данных?",
            type: "radio",
            answers: [
                { text: "Итерационный и многоэтапный.", isCorrect: true },
                { text: "Одноразовый и не допускающий изменений.", isCorrect: false },
                { text: "Состоящий только из физического создания таблиц.", isCorrect: false },
                { text: "Не требующий анализа требований.", isCorrect: false },
            ],
        },
        // 29
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
        // 30
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
        // 31
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
        // 32
        {
            question: "Какая модель данных имеет структуру в виде графа общего вида?",
            type: "radio",
            answers: [
                { text: "Многомерная", isCorrect: false },
                { text: "Иерархическая", isCorrect: false },
                { text: "Реляционная", isCorrect: false },
                { text: "Сетевая", isCorrect: true },
            ],
        },
        // 33
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
        // 34
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
        // 35
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
        // 36
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
        // 37
        {
            question: "Неизвестный вопрос",
            type: "radio",
            answers: [
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
            ],
        },
        // 38
        {
            question: "Неизвестный вопрос",
            type: "radio",
            answers: [
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
            ],
        },
        // 39
        {
            question: "Неизвестный вопрос",
            type: "radio",
            answers: [
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
            ],
        },
        // 40
        {
            question: "Неизвестный вопрос",
            type: "radio",
            answers: [
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
                { text: "Неизвестный ответ.", isCorrect: true },
            ],
        },
    ],
};

export default testEx2;