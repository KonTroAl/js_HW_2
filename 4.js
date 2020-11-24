// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = 12
let b = 0
let c = 0

if (a <= 15) {
    b = a
}


switch (a) {
    case b:
        for (let i = a; i <= 15; i++)
            document.writeln(i)
        break;
    default:
        alert("'a' вне диапазона значений")
}