const cites = ["Абакан","Азов","Александров","Алексин","Альметьевск","Анапа","Ангарск","Анжеро-Судженск","Апатиты","Арзамас","Армавир","Арсеньев","Артем","Архангельск","Асбест","Астрахань","Ачинск","Балаково","Балахна","Балашиха","Балашов","Барнаул","Батайск","Белгород","Белебей","Белово","Белогорск","Белорецк","Белореченск","Бердск","Березники","Березовский","Бийск","Биробиджан","Благовещенск","Бор","Борисоглебск","Боровичи","Братск","Брянск","Бугульма","Буденновск","Бузулук","Буйнакск","Великие Луки","Великий Новгород","Верхняя Пышма","Видное","Владивосток","Владикавказ","Владимир","Волгоград","Волгодонск","Волжск","Волжский","Вологда","Вольск","Воркута","Воронеж","Воскресенск","Воткинск","Всеволожск","Выборг","Выкса","Вязьма","Гатчина","Геленджик","Георгиевск","Глазов","Горно-Алтайск","Грозный","Губкин","Гудермес","Гуково","Гусь-Хрустальный","Дербент","Дзержинск","Димитровград","Дмитров","Долгопрудный","Домодедово","Донской","Дубна","Евпатория","Егорьевск","Ейск","Екатеринбург","Елабуга","Елец","Ессентуки","Железногорск","Железногорск","Жигулевск","Жуковский","Заречный","Зеленогорск","Зеленодольск","Златоуст","Иваново","Ивантеевка","Ижевск","Избербаш","Иркутск","Искитим","Ишим","Ишимбай","Йошкар-Ола","Казань","Калининград","Калуга","Каменск-Уральский","Каменск-Шахтинский","Камышин","Канск","Каспийск","Кемерово","Керчь","Кинешма","Кириши","Киров","Кирово-Чепецк","Киселевск","Кисловодск","Клин","Клинцы","Ковров","Когалым","Коломна","Комсомольск-на-Амуре","Копейск","Королев","Кострома","Котлас","Красногорск","Краснодар","Краснокаменск","Краснокамск","Краснотурьинск","Красноярск","Кропоткин","Крымск","Кстово","Кузнецк","Кумертау","Кунгур","Курган","Курск","Кызыл","Лабинск","Лениногорск","Ленинск-Кузнецкий","Лесосибирск","Липецк","Лиски","Лобня","Лысьва","Лыткарино","Люберцы","Магадан","Магнитогорск","Майкоп","Махачкала","Междуреченск","Мелеуз","Миасс","Минеральные Воды","Минусинск","Михайловка","Михайловск","Мичуринск","Москва","Мурманск","Муром","Мытищи","Набережные Челны","Назарово","Назрань","Нальчик","Наро-Фоминск","Находка","Невинномысск","Нерюнгри","Нефтекамск","Нефтеюганск","Нижневартовск","Нижнекамск","Нижний Новгород","Нижний Тагил","Новоалтайск","Новокузнецк","Новокуйбышевск","Новомосковск","Новороссийск","Новосибирск","Новотроицк","Новоуральск","Новочебоксарск","Новочеркасск","Новошахтинск","Новый Уренгой","Ногинск","Норильск","Ноябрьск","Нягань","Обнинск","Одинцово","Озерск","Октябрьский","Омск","Орел","Оренбург","Орехово-Зуево","Орск","Павлово","Павловский Посад","Пенза","Первоуральск","Пермь","Петрозаводск","Петропавловск-Камчатский","Подольск","Полевской","Прокопьевск","Прохладный","Псков","Пушкино","Пятигорск","Раменское","Ревда","Реутов","Ржев","Рославль","Россошь","Ростов-на-Дону","Рубцовск","Рыбинск","Рязань","Салават","Сальск","Самара","Санкт-Петербург","Саранск","Сарапул","Саратов","Саров","Свободный","Севастополь","Северодвинск","Северск","Сергиев Посад","Серов","Серпухов","Сертолово","Сибай","Симферополь","Славянск-на-Кубани","Смоленск","Соликамск","Солнечногорск","Сосновый Бор","Сочи","Ставрополь","Старый Оскол","Стерлитамак","Ступино","Сургут","Сызрань","Сыктывкар","Таганрог","Тамбов","Тверь","Тимашевск","Тихвин","Тихорецк","Тобольск","Тольятти","Томск","Троицк","Туапсе","Туймазы","Тула","Тюмень","Узловая","Улан-Удэ","Ульяновск","Урус-Мартан","Усолье-Сибирское","Уссурийск","Усть-Илимск","Уфа","Ухта","Феодосия","Фрязино","Хабаровск","Ханты-Мансийск","Хасавюрт","Химки","Чайковский","Чапаевск","Чебоксары","Челябинск","Черемхово","Череповец","Черкесск","Черногорск","Чехов","Чистополь","Чита","Шадринск","Шали","Шахты","Шуя","Щекино","Щелково","Электросталь","Элиста","Энгельс","Южно-Сахалинск","Юрга","Якутск","Ялта","Ярославль"]
const options = document.querySelector('.options')
for (let i = 0; i < cites.length; i++) {
    const li = document.createElement('li')
    const text = document.createTextNode(cites[i])
    li.appendChild(text)
    options.appendChild(li)
}


const input = document.querySelector('.input')
let optionsElements = document.querySelectorAll('.options li')
let optinsHasntDisplayNone = []
// Variable "word" contains that user input symbol by symbol and forms word which compared with city names
let word = ''

// change options list width
options.style.maxWidth = `${input.clientWidth}px`

// This event will active by every input symbol
input.addEventListener('input', function(event) {

    // Zeroing out
    optinsHasntDisplayNone = []
    options.style.display = 'block'

    // Word filling
    if (event.data === null) {
        word = word.slice(0, word.length - 1)
    } else {
        word += input.value.at(-1)
    }

    // Word and array zeroing out if user highlight input value and delete him
    if (input.value == '') {
        word = ''
        optinsHasntDisplayNone = []
    }

    // Selection sity names logic
    optionsElements.forEach(option => {

        // If sliced name city equally input word that nothing happens, else unsuitable city names property "disply" change to "none"
        if (option.textContent.slice(0, word.length) === word) {
            option.style.display = 'block'
        } else {
            option.style.display = 'none'
        }
    })

    // Changing class to active at first city name in list
    optionsElements.forEach(option => {
        if (option.style.display != 'none') {
            optinsHasntDisplayNone.push(option)
        }
    })
    optinsHasntDisplayNone[0].classList.add('active')
})

// If user click on city name then input value change to him name
optionsElements.forEach(option => {
    option.addEventListener('click', function() {
        input.value = option.textContent
    })
})

// If user click on input field then input get property "outline" with meaning "2px solid gray", and displaying city names
window.addEventListener('click', function(event) {
    if (event.target.className == 'input') {
        input.style.outline = '2px solid gray'
        options.style.display = 'block'
    } else {
        input.style.outline = '2px solid lightgray'
        options.style.display = 'none'
    }
})

// If by input user will press on "Enter", input value change to first city name in list
window.addEventListener('keydown', function(event) {
    if (document.activeElement === input) {
        if (event.code === 'Enter') {
            input.value = optinsHasntDisplayNone[0].textContent
        }
    }
})
