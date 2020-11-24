// * С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val — заданное число, pow –— степень.

let a = 11
let pow = 2

function power(val, pow) {
    if (pow == 0) {
        return 1
    } else {
        return val * power(val, pow - 1)
    }
}

document.writeln(power(a, pow))