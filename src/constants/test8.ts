import type { ITest } from "../types/ITest.ts";

const test8: ITest = {
    name: "Лекция 8",
    questions: [
        {
            question: "Что называется сериализацией транзакций?",
            type: "radio",
            answers: [
                { text: "Создание резервной копии базы данных.", isCorrect: false },
                { text: "Метод управления параллельным выполнением транзакций, обеспечивающий эквивалентность последовательному выполнению.", isCorrect: true },
                { text: "Удаление старых данных из базы данных.", isCorrect: false },
                { text: "Преобразование таблицы в файл.", isCorrect: false },
            ],
        },
        {
            question: "Когда график выполнения транзакций называется сериальным?",
            type: "radio",
            answers: [
                { text: "Когда результат эквивалентен результату некоторого последовательного выполнения тех же транзакций.", isCorrect: true },
                { text: "Когда все операции чтения выполняются первыми.", isCorrect: false },
                { text: "Когда все транзакции выполняются одновременно без ограничений.", isCorrect: false },
                { text: "Когда транзакции не используют таблицы.", isCorrect: false },
            ],
        },
        {
            question: "Что такое смесь транзакций?",
            type: "radio",
            answers: [
                { text: "Резервная копия транзакций.", isCorrect: false },
                { text: "Набор транзакций, элементарные операции которых чередуются друг с другом.", isCorrect: true },
                { text: "Последовательность команд создания таблиц.", isCorrect: false },
                { text: "Набор таблиц одной базы данных.", isCorrect: false },
            ],
        },
        {
            question: "Что называется графиком запуска набора транзакций?",
            type: "radio",
            answers: [
                { text: "Последовательность выполнения элементарных операций заданных транзакций.", isCorrect: true },
                { text: "Перечень ошибок СУБД.", isCorrect: false },
                { text: "Список пользователей базы данных.", isCorrect: false },
                { text: "Схема размещения таблиц на диске.", isCorrect: false },
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
            question: "Что такое блокировка в СУБД?",
            type: "radio",
            answers: [
                { text: "Временное ограничение доступа к данным со стороны других транзакций.", isCorrect: true },
                { text: "Завершение работы операционной системы.", isCorrect: false },
                { text: "Создание новой базы данных.", isCorrect: false },
                { text: "Удаление строки таблицы.", isCorrect: false },
            ],
        },
        {
            question: "Для чего применяется блокировка данных?",
            type: "radio",
            answers: [
                { text: "Для изменения структуры всех таблиц.", isCorrect: false },
                { text: "Для удаления всех ограничений целостности.", isCorrect: false },
                { text: "Для предотвращения конфликтов при одновременном доступе транзакций к данным.", isCorrect: true },
                { text: "Для ускорения работы клавиатуры.", isCorrect: false },
            ],
        },
        {
            question: "Что означает X-блокировка?",
            type: "radio",
            answers: [
                { text: "Блокировка резервной копии.", isCorrect: false },
                { text: "Блокировка только для чтения.", isCorrect: false },
                { text: "Блокировка всей операционной системы.", isCorrect: false },
                { text: "Монопольная блокировка, ограничивающая доступ других транзакций к объекту.", isCorrect: true },
            ],
        },
        {
            question: "Как расшифровывается X-Lock?",
            type: "radio",
            answers: [
                { text: "External Lock.", isCorrect: false },
                { text: "Extra Link.", isCorrect: false },
                { text: "eXclusive Lock.", isCorrect: true },
                { text: "eXchange List.", isCorrect: false },
            ],
        },
        {
            question: "Для чего используется S-блокировка?",
            type: "radio",
            answers: [
                { text: "Для остановки сервера.", isCorrect: false },
                { text: "Для исключительного изменения данных.", isCorrect: false },
                { text: "Для чтения данных с возможностью совместного чтения другими транзакциями.", isCorrect: true },
                { text: "Для удаления таблицы.", isCorrect: false },
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
            question: "Что такое блокировка на уровне таблицы?",
            type: "radio",
            answers: [
                { text: "Блокировка отдельного столбца во всех базах данных.", isCorrect: false },
                { text: "Удаление таблицы после завершения запроса.", isCorrect: false },
                { text: "Ограничение доступа к таблице на время работы транзакции.", isCorrect: true },
                { text: "Блокировка всех компьютеров сети.", isCorrect: false },
            ],
        },
        {
            question: "Что характеризует блокировку на уровне строк?",
            type: "radio",
            answers: [
                { text: "Блокируется только имя таблицы.", isCorrect: false },
                { text: "Блокируется весь компьютер.", isCorrect: false },
                { text: "Блокируется вся база данных.", isCorrect: false },
                { text: "Блокируются отдельные строки таблицы.", isCorrect: true },
            ],
        },
        {
            question: "Что такое автоматическая блокировка?",
            type: "radio",
            answers: [
                { text: "Блокировка, которую СУБД устанавливает при необходимости выполнения операции.", isCorrect: true },
                { text: "Блокировка, которая удаляет данные.", isCorrect: false },
                { text: "Блокировка, которую пользователь всегда вводит вручную.", isCorrect: false },
                { text: "Блокировка, выполняемая только при выключении компьютера.", isCorrect: false },
            ],
        },
        {
            question: "Что такое явная блокировка?",
            type: "radio",
            answers: [
                { text: "Блокировка, которую нельзя снять.", isCorrect: false },
                { text: "Блокировка, которую явно запрашивает программа или пользователь.", isCorrect: true },
                { text: "Блокировка, устанавливаемая исключительно операционной системой.", isCorrect: false },
                { text: "Блокировка, возникающая только при сбое питания.", isCorrect: false },
            ],
        },
        {
            question: "Что означает конфликт W-W (Запись-Запись)?",
            type: "radio",
            answers: [
                { text: "Одна транзакция удаляет базу данных.", isCorrect: false },
                { text: "Две транзакции читают разные таблицы.", isCorrect: false },
                { text: "Транзакции выполняют только операции чтения.", isCorrect: false },
                { text: "Две транзакции пытаются изменить один и тот же объект данных.", isCorrect: true },
            ],
        },
        {
            question: "Что означает конфликт R-W (Чтение-Запись)?",
            type: "radio",
            answers: [
                { text: "Транзакции одновременно читают разные строки.", isCorrect: false },
                { text: "Две транзакции создают разные базы данных.", isCorrect: false },
                { text: "Пользователь закрывает приложение.", isCorrect: false },
                { text: "Транзакция изменяет данные, которые прочитала другая ещё не завершённая транзакция.", isCorrect: true },
            ],
        },
        {
            question: "Что означает конфликт W-R (Запись-Чтение)?",
            type: "radio",
            answers: [
                { text: "Обе транзакции завершаются без обращения к базе данных.", isCorrect: false },
                { text: "Одна транзакция пытается прочитать данные, изменённые другой незавершённой транзакцией.", isCorrect: true },
                { text: "Одна транзакция создаёт таблицу.", isCorrect: false },
                { text: "Две транзакции читают независимые данные.", isCorrect: false },
            ],
        },
        {
            question: "Что такое потеря результатов обновления?",
            type: "radio",
            answers: [
                { text: "Удаление пользователя из системы.", isCorrect: false },
                { text: "Ситуация, когда изменение одной транзакции перезаписывается изменением другой.", isCorrect: true },
                { text: "Потеря файла базы данных после выключения компьютера.", isCorrect: false },
                { text: "Потеря подключения к серверу.", isCorrect: false },
            ],
        },
        {
            question: "Что такое чтение \"грязных\" данных?",
            type: "radio",
            answers: [
                { text: "Чтение данных без использования индекса.", isCorrect: false },
                { text: "Чтение данных из повреждённого файла.", isCorrect: false },
                { text: "Чтение только пустых строк.", isCorrect: false },
                { text: "Чтение изменений другой транзакции, которые ещё не зафиксированы и могут быть отменены.", isCorrect: true },
            ],
        },
        {
            question: "Что называется неповторяемым чтением?",
            type: "radio",
            answers: [
                { text: "Отсутствие данных в таблице.", isCorrect: false },
                { text: "Чтение одной строки несколькими пользователями без изменений.", isCorrect: false },
                { text: "Повторное выполнение запроса без изменения результата.", isCorrect: false },
                { text: "Ситуация, когда повторное чтение одной строки в транзакции возвращает другое значение из-за изменения другой транзакцией.", isCorrect: true },
            ],
        },
        {
            question: "Что такое фантомные строки?",
            type: "radio",
            answers: [
                { text: "Строки, содержащие только числовые значения.", isCorrect: false },
                { text: "Новые строки, которые начинают удовлетворять условию запроса между двумя его выполнениями в одной транзакции.", isCorrect: true },
                { text: "Строки, которые физически отсутствуют на диске.", isCorrect: false },
                { text: "Строки, которые нельзя удалить.", isCorrect: false },
            ],
        },
        {
            question: "Что такое тупиковая ситуация (deadlock)?",
            type: "radio",
            answers: [
                { text: "Ситуация взаимного ожидания транзакций, каждая из которых удерживает ресурсы, необходимые другой.", isCorrect: true },
                { text: "Ситуация, когда база данных не содержит таблиц.", isCorrect: false },
                { text: "Успешное завершение всех транзакций.", isCorrect: false },
                { text: "Автоматическое резервное копирование данных.", isCorrect: false },
            ],
        },
        {
            question: "Как возникает тупик между двумя транзакциями?",
            type: "radio",
            answers: [
                { text: "Одна транзакция завершается до начала другой.", isCorrect: false },
                { text: "Обе транзакции используют разные базы данных без общих ресурсов.", isCorrect: false },
                { text: "Транзакция A ожидает объект, занятый транзакцией B, а транзакция B ожидает объект, занятый транзакцией A.", isCorrect: true },
                { text: "Обе транзакции только читают независимые данные.", isCorrect: false },
            ],
        },
        {
            question: "Какой способ используется для обнаружения тупиков в промышленных СУБД?",
            type: "radio",
            answers: [
                { text: "Отключение всех пользователей навсегда.", isCorrect: false },
                { text: "Удаление всех таблиц.", isCorrect: false },
                { text: "Удаление всех блокировок без проверки.", isCorrect: false },
                { text: "Построение графа ожиданий и поиск циклов в нём.", isCorrect: true },
            ],
        },
        {
            question: "Что означает термин \"транзакция-жертва\"?",
            type: "radio",
            answers: [
                { text: "Транзакция, которая создаёт резервную копию.", isCorrect: false },
                { text: "Транзакция, которая выполняет только чтение.", isCorrect: false },
                { text: "Транзакция, которую выбирают для отката, чтобы устранить тупик.", isCorrect: true },
                { text: "Транзакция, которая всегда завершается первой.", isCorrect: false },
            ],
        },
        {
            question: "Что такое таймаут (time-out) при работе транзакций?",
            type: "radio",
            answers: [
                { text: "Максимальное время ожидания, после которого система может прервать ожидающую транзакцию.", isCorrect: true },
                { text: "Время создания базы данных.", isCorrect: false },
                { text: "Время хранения резервной копии.", isCorrect: false },
                { text: "Интервал, в течение которого пользователь вводит пароль.", isCorrect: false },
            ],
        },
        {
            question: "Какова основная идея протокола двухфазной блокировки?",
            type: "radio",
            answers: [
                { text: "Транзакция сначала наращивает блокировки, а после начала их снятия новые блокировки уже не устанавливает.", isCorrect: true },
                { text: "Транзакция сначала снимает все блокировки, а затем устанавливает новые.", isCorrect: false },
                { text: "Транзакция должна всегда блокировать всю базу данных.", isCorrect: false },
                { text: "Все транзакции должны выполняться без блокировок.", isCorrect: false },
            ],
        },
        {
            question: "Какие две фазы выделяют в протоколе двухфазной блокировки?",
            type: "radio",
            answers: [
                { text: "Регистрация и удаление пользователей.", isCorrect: false },
                { text: "Нарастание блокировок и снятие блокировок.", isCorrect: true },
                { text: "Чтение и печать данных.", isCorrect: false },
                { text: "Создание и удаление базы данных.", isCorrect: false },
            ],
        },
        {
            question: "Какую теорему связывают с протоколом двухфазной блокировки?",
            type: "radio",
            answers: [
                { text: "Теорему Байеса.", isCorrect: false },
                { text: "Теорему Есварана.", isCorrect: true },
                { text: "Теорему Ферма.", isCorrect: false },
                { text: "Теорему Пифагора.", isCorrect: false },
            ],
        },
        {
            question: "Сколько уровней изолированности транзакций определено стандартом SQL-92?",
            type: "radio",
            answers: [
                { text: "Два.", isCorrect: false },
                { text: "Пять.", isCorrect: false },
                { text: "Четыре.", isCorrect: true },
                { text: "Три.", isCorrect: false },
            ],
        },
        {
            question: "Какой уровень изолированности допускает чтение незафиксированных данных?",
            type: "radio",
            answers: [
                { text: "READ COMMITTED.", isCorrect: false },
                { text: "READ UNCOMMITTED.", isCorrect: true },
                { text: "SERIALIZABLE.", isCorrect: false },
                { text: "REPEATABLE READ.", isCorrect: false },
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
    ],
};

export default test8;