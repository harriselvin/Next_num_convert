const input = document.querySelector('[data-input]')
const output = document.querySelector('[data-output]')
const btn = document.querySelector('button')

let num = input.innerText.split(',').map(Number)
let iteration = 0

function addUp() {
    let maxValue = num.length
    iteration = (iteration + 1) % maxValue
    output.innerText = num[iteration]
}

btn.addEventListener('click', addUp)

output.innerText = num[iteration]