// Задание 2
// Напиши скрипт проверки количества товаров на складе.
// Есть переменные total(количество товаров на складе)
// и ordered(единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе,
//     то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered,
//     например 20, 80 и 130.

// const total = 100;
// const ordered = 50;
// split
const message = "Welcome to Bahamas!";

// Разбивает строку по разделителю, в данном случае это пробел
console.log(message.split(" ")); // ["Welcome", "to", "Bahamas!"]

// Вызов split с пустой строкой разобьёт по буквам
console.log(message.split("")); // [много букв :)]

// join
const clients = ["Mango", "Poly", "Ajax"];

// Сошьет все элементы массива в строку,
// между каждой парой элементов будет указанный разделитель
console.log(clients.join(" ")); // "Mango Poly Ajax"
console.log(clients.join(",")); // "Mango,Poly,Ajax"
console.log(clients.join("-")); // "Mango-Poly-Ajax"
