import type { ITest } from "../types/ITest.ts";

const test5: ITest = {
    name: "Лекция 5",
    questions: [
        {
            question: "Что такое ограничение целостности базы данных?",
            type: "radio",
            answers: [
                { text: "Утверждение, истинность которого зависит от состояния базы данных", isCorrect: true },
                { text: "Команда SQL для создания таблицы", isCorrect: false },
                { text: "Способ резервного копирования базы данных", isCorrect: false },
                { text: "Утверждение, истинность которого не зависит от состояния базы данных", isCorrect: false },
            ],
        },
        {
            question: "Когда база данных находится в целостном состоянии?",
            type: "radio",
            answers: [
                { text: "Когда выполнены все определённые для неё ограничения целостности", isCorrect: true },
                { text: "Когда не выполнены все определённые для неё ограничения целостности", isCorrect: false },
                { text: "Когда в базе нет пустых полей", isCorrect: false },
                { text: "Когда все таблицы заполнены", isCorrect: false },
            ],
        },
        {
            question: "Что произойдет, если после добавления сотрудника в PERSON не увеличить Dept_Kol?",
            type: "radio",
            answers: [
                { text: "Удалится подразделение", isCorrect: false },
                { text: "Нарушится целостность данных", isCorrect: true },
                { text: "База данных станет согласованной", isCorrect: false },
                { text: "Изменится первичный ключ", isCorrect: false },
            ],
        },
        {
            question: "Для чего в примере с PERSON и DEPART необходимо выполнить две операции?",
            type: "radio",
            answers: [
                { text: "Для удаления старого сотрудника", isCorrect: false },
                { text: "Для создания двух таблиц", isCorrect: false },
                { text: "Для одновременного добавления сотрудника и постоянное количества сотрудников отдела", isCorrect: false },
                { text: "Для одновременного добавления сотрудника и изменения количества сотрудников отдела", isCorrect: true },
            ],
        },
        {
            question: "Какой механизм позволяет объединить несколько операций в единое неделимое действие?",
            type: "radio",
            answers: [
                { text: "Транзакция", isCorrect: true },
                { text: "Индекс", isCorrect: false },
                { text: "Кортеж", isCorrect: false },
                { text: "Домен", isCorrect: false },
            ],
        },
        {
            question: "Какой оператор обычно фиксирует результаты выполненной транзакции?",
            type: "radio",
            answers: [
                { text: "DELETE", isCorrect: false },
                { text: "ROLLBACK", isCorrect: false },
                { text: "UPDATE", isCorrect: false },
                { text: "COMMIT", isCorrect: true },
            ],
        },
        {
            question: "Какой оператор используется для отмены изменений транзакции?",
            type: "radio",
            answers: [
                { text: "CREATE", isCorrect: false },
                { text: "INSERT", isCorrect: false },
                { text: "ROLLBACK", isCorrect: true },
                { text: "COMMIT", isCorrect: false },
            ],
        },
        {
            question: "Как система может реагировать на попытку нарушения целостности?",
            type: "radio",
            answers: [
                { text: "Отказать в операции или не выполнить компенсирующие действия", isCorrect: false },
                { text: "Только удалить таблицу", isCorrect: false },
                { text: "Отказать в операции или выполнить компенсирующие действия", isCorrect: true },
                { text: "Только завершить работу СУБД", isCorrect: false },
            ],
        },
        {
            question: "Какой пример относится к ограничению возраста сотрудника?",
            type: "radio",
            answers: [
                { text: "Возраст должен быть от 18 до 65 лет", isCorrect: true },
                { text: "Каждый сотрудник должен иметь фотографию", isCorrect: false },
                { text: "В базе должно быть не менее 10 таблиц", isCorrect: false },
                { text: "Таблица должна иметь название", isCorrect: false },
            ],
        },
        {
            question: "На что накладываются ограничения домена?",
            type: "radio",
            answers: [
                { text: "Только на первичный ключ", isCorrect: false },
                { text: "Только на внешние ключи", isCorrect: false },
                { text: "Только на допустимые значения домена", isCorrect: true },
                { text: "На всю базу данных", isCorrect: false },
            ],
        },
        {
            question: "Что характеризует ограничение атрибута?",
            type: "radio",
            answers: [
                { text: "Оно всегда относится к нескольким таблицам", isCorrect: false },
                { text: "Оно определяет допустимые значения конкретного атрибута", isCorrect: true },
                { text: "Оно используется только для удаления данных", isCorrect: false },
                { text: "Оно не определяет допустимые значения конкретного атрибута", isCorrect: false },
            ],
        },
        {
            question: "Какое условие может быть ограничением атрибута \"Табельный номер\"?",
            type: "radio",
            answers: [
                { text: "Таб_номер = имя сотрудника", isCorrect: false },
                { text: "Таб_номер = NULL", isCorrect: false },
                { text: "Таб_номер > 0", isCorrect: true },
                { text: "Таб_номер < 0", isCorrect: false },
            ],
        },
        {
            question: "Что такое кортеж в реляционной модели?",
            type: "radio",
            answers: [
                { text: "Имя базы данных", isCorrect: false },
                { text: "Первичный ключ", isCorrect: false },
                { text: "Столбец таблицы", isCorrect: false },
                { text: "Строка таблицы", isCorrect: true },
            ],
        },
        {
            question: "Что характерно для ограничения кортежа?",
            type: "radio",
            answers: [
                { text: "Оно относится к отдельной строке отношения", isCorrect: true },
                { text: "Оно относится только к имени таблицы", isCorrect: false },
                { text: "Оно всегда связано с внешним ключом", isCorrect: false },
                { text: "Для его проверки обязательно нужны другие таблицы", isCorrect: false },
            ],
        },
        {
            question: "Какое требование является примером целостности сущностей?",
            type: "radio",
            answers: [
                { text: "Возраст должен быть больше 18", isCorrect: false },
                { text: "Отдел должен иметь название", isCorrect: false },
                { text: "Первичный ключ должен однозначно идентифицировать строку", isCorrect: true },
                { text: "Первичный ключ не должен однозначно идентифицировать строку", isCorrect: false },
            ],
        },
        {
            question: "Что должно обеспечиваться для первичного ключа?",
            type: "radio",
            answers: [
                { text: "Не уникальность значений и отсутствие неопределённых значений", isCorrect: false },
                { text: "Возможность повторения значений", isCorrect: false },
                { text: "Уникальность значений и отсутствие неопределённых значений", isCorrect: true },
                { text: "Обязательное наличие внешнего ключа", isCorrect: false },
            ],
        },
        {
            question: "Какое ограничение требует, чтобы в каждом отделе было не менее двух сотрудников?",
            type: "radio",
            answers: [
                { text: "Ограничение домена", isCorrect: false },
                { text: "Ограничение типа данных", isCorrect: false },
                { text: "Ограничение отношения", isCorrect: true },
                { text: "Ограничение атрибута", isCorrect: false },
            ],
        },
        {
            question: "Что такое внешний ключ?",
            type: "radio",
            answers: [
                { text: "Поле, которое всегда содержит текст", isCorrect: false },
                { text: "Поле для хранения пароля", isCorrect: false },
                { text: "Поле, которое ссылается на ключ другой таблицы", isCorrect: true },
                { text: "Любой последний столбец таблицы", isCorrect: false },
            ],
        },
        {
            question: "Что означает ссылочная целостность?",
            type: "radio",
            answers: [
                { text: "Все таблицы должны иметь одинаковое имя", isCorrect: false },
                { text: "Каждая таблица должна иметь одинаковое количество строк", isCorrect: false },
                { text: "Значение внешнего ключа должно соответствовать существующему значению ключа в родительской таблице либо быть неопределённым, если это разрешено", isCorrect: true },
                { text: "Значение внешнего ключа не должно соответствовать существующему значению ключа в родительской таблице либо быть неопределённым, если это разрешено", isCorrect: false },
            ],
        },
        {
            question: "Какая таблица в примере является родительской по отношению к PERSON?",
            type: "radio",
            answers: [
                { text: "Pers_Id", isCorrect: false },
                { text: "PERSON", isCorrect: false },
                { text: "DEPART", isCorrect: true },
                { text: "Dept_Kol", isCorrect: false },
            ],
        },
        {
            question: "Что может произойти при попытке удалить подразделение, на которое ссылаются сотрудники?",
            type: "radio",
            answers: [
                { text: "Удаление может быть запрещено, выполнено с изменением ссылок или каскадно", isCorrect: true },
                { text: "Ничего не произойдет в любом случае", isCorrect: false },
                { text: "СУБД всегда автоматически удалит всю базу", isCorrect: false },
                { text: "Удаление может быть не запрещено, выполнено с изменением ссылок или каскадно", isCorrect: false },
            ],
        },
        {
            question: "Что означает каскадное удаление?",
            type: "radio",
            answers: [
                { text: "При удалении родительской записи не удаляются связанные дочерние записи", isCorrect: false },
                { text: "При удалении родительской записи автоматически удаляются связанные дочерние записи", isCorrect: true },
                { text: "Удаляются все таблицы базы данных", isCorrect: false },
                { text: "Удаляется структура таблицы", isCorrect: false },
            ],
        },
        {
            question: "Какие ограничения называются немедленно проверяемыми?",
            type: "radio",
            answers: [
                { text: "Проверяемые только после закрытия базы данных", isCorrect: false },
                { text: "Проверяемые непосредственно при выполнении операции", isCorrect: true },
                { text: "Проверяемые только через год", isCorrect: false },
                { text: "Никогда не проверяемые", isCorrect: false },
            ],
        },
        {
            question: "Когда проверяются ограничения с отложенной проверкой?",
            type: "radio",
            answers: [
                { text: "При фиксации транзакции оператором COMMIT", isCorrect: true },
                { text: "При создании компьютера", isCorrect: false },
                { text: "Только при удалении таблицы", isCorrect: false },
                { text: "При вводе имени пользователя", isCorrect: false },
            ],
        },
        {
            question: "Что используется для процедурной реализации сложных ограничений целостности?",
            type: "radio",
            answers: [
                { text: "Только первичные ключи", isCorrect: false },
                { text: "Триггеры и хранимые процедуры", isCorrect: true },
                { text: "Только домены", isCorrect: false },
                { text: "Только индексы", isCorrect: false },
            ],
        },
    ],
};

export default test5;