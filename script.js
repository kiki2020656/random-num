alert("привет,я ki. угадай число от 1 до 100 которое я загадала")

let min = 1
let max = 10

function getRandomkiki(min, max) {
    return Math.floor(Math.random) * (max - min + 1) + min;
}

let num = getRandomkiki(min, max)

while (1) {
    if (prompt("введите число") == num) {
        alert("верно")
        break
    } else { alert("не верно") }
}