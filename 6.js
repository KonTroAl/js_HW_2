// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения аргументов, operation — строка с названием операции. 
// В зависимости от переданного значения выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (применить switch).


let a = 10
let b = 2
let c = 'mult'

function mathOperation(a, b, operation) {
    switch (operation) {
        case 'sum':
            document.writeln(a + b)
            break;
        case 'sub':
            document.writeln(a - b)
            break;
        case 'mul':
            document.writeln(a * b)
            break;
        case 'div':
            document.writeln(a / b)
            break
        default:
            document.writeln('Нет такой операции')
    }
}

mathOperation(a, b, c)