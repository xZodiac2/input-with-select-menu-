const input = document.querySelector('.input')
const options = document.querySelector('.options')
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
