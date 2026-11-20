import type { ITest } from "../types/ITest.ts";

const test2: ITest = {
    name: "Лекция 2",
    questions: [
        {
            question: "Когда приложение MS Access создает файл для работы с приложением?",
            type: "radio",
            answers: [
                { text: "В начале работы с документом.", isCorrect: true },
                { text: "При закрытии документа.", isCorrect: false },
                { text: "В заданное пользователем время.", isCorrect: false },
                { text: "Только после сохранения документа", isCorrect: false },
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
            question: "Основным объектом базы данных СУБД Access является:",
            type: "radio",
            answers: [
                { text: "форма.", isCorrect: false },
                { text: "таблица.", isCorrect: true },
                { text: "отчет.", isCorrect: false },
                { text: "выборка.", isCorrect: false },
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
            question: "Отчет в СУБД Access предназначен для:",
            type: "radio",
            answers: [
                { text: "ввода и редактирования данных.", isCorrect: false },
                { text: "хранения данных.", isCorrect: false },
                { text: "вывода данных на печать.", isCorrect: true },
                { text: "создания команд для автоматизации работы.", isCorrect: false },
            ],
        },
        {
            question: "Мастер подстановок в СУБД MS Access используется:",
            type: "radio",
            answers: [
                { text: "для добавления значений полей из других таблиц или фиксированного списка данных.", isCorrect: true },
                { text: "для добавления значений полей при других таблиц или не фиксированного списка данных.", isCorrect: false },
                { text: "для создания новых таблиц.", isCorrect: false },
                { text: "для создания нового поля в таблице.", isCorrect: false },
            ],
        },
        {
            question: "Какие типы данных используются в СУБД MS Access для хранения больших объемов текста?",
            type: "radio",
            answers: [
                { text: "Гиперссылка.", isCorrect: false },
                { text: "OLE.", isCorrect: false },
                { text: "Текстовый.", isCorrect: false },
                { text: "MEMO.", isCorrect: true },
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
            question: "В поле OLE СУБД Access можно разместить:",
            type: "radio",
            answers: [
                { text: "изображение или лист MS Excel.", isCorrect: true },
                { text: "логические значения.", isCorrect: false },
                { text: "большие фрагменты текста.", isCorrect: false },
                { text: "ссылки.", isCorrect: false },
            ],
        },
        {
            question: "В режиме конструктора таблицы СУБД Access можно:",
            type: "radio",
            answers: [
                { text: "создавать подстановки значений.", isCorrect: false },
                { text: "создавать таблицу, добавляя поля и устанавливая для них значений и свойства", isCorrect: true },
                { text: "вносить данные.", isCorrect: false },
                { text: "создавать запросы.", isCorrect: false },
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
            question: "Условие, по которому происходит поиск и отбор записей, размещенных в таблице, называется:",
            type: "radio",
            answers: [
                { text: "запросом.", isCorrect: false },
                { text: "Условием поиска.", isCorrect: false },
                { text: "фильтром.", isCorrect: true },
                { text: "формой.", isCorrect: false },
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
            question: "Основные типы форм в СУБД Access:",
            type: "radio",
            answers: [
                { text: "табличная, линейная, обычная.", isCorrect: false },
                { text: "ленточная и табличная.", isCorrect: false },
                { text: "табличная, простая, ленточная.", isCorrect: false },
                { text: "обычная, ленточная, табличная.", isCorrect: true },
            ],
        },
        {
            question: "Столбец в СУБД называется:",
            type: "radio",
            answers: [
                { text: "столбцом.", isCorrect: false },
                { text: "значением.", isCorrect: false },
                { text: "записью.", isCorrect: false },
                { text: "полем.", isCorrect: true },
            ],
        },
        {
            question: "Гиперссылка может иметь вид пути-",
            type: "checkbox",
            answers: [
                { text: "URL", isCorrect: true },
                { text: "ULLR", isCorrect: false },
                { text: "UNC", isCorrect: true },
            ],
        },
        {
            question: "Пример формата UNC",
            type: "checkbox",
            answers: [
                { text: "\\\\<IP-адрес>\\<Папка>\\<Файл>", isCorrect: true },
                { text: "https://server.com/file.txt", isCorrect: false },
                { text: "\\\\10.0.0.5\\Public\\Report.xlsx", isCorrect: true },
                { text: "\\\\server\\share\\file.txt", isCorrect: true },
            ],
        },
        {
            question: "примеры формата URL",
            type: "checkbox",
            answers: [
                { text: "http(s)://домен_или_IP/путь/файл", isCorrect: true },
                { text: "https://server.com/file.txt", isCorrect: true },
                { text: "\\\\server\\share\\file.txt", isCorrect: false },
                { text: "<протокол>://<IP-адрес>/<путь>/<файл>", isCorrect: true },
            ],
        },
    ],
};

export default test2;