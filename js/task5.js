/*'use strict';
Задача 1-5

Доступ к элементам по индексу
Для доступа к значению элемента массива применяют синтаксис квадратных скобок массив[индекс]. Между именем переменной массива и квадратными скобками не должно быть пробела.

Внимание
Индексация элементов массива начинается с нуля.

const planets = ['Земля', 'Марс', 'Венера'];
planets[0]; // 'Земля'
planets[2]; // 'Венера'
Задание
Объяви три переменные и присвой каждой из них значение, используя нотацию квадратных скобок.

Имя переменной	Значение переменной
firstElement	первый элемент массива
secondElement	второй элемент массива
lastElement	последний элемент массива
Тесты
Объявлена переменная firstElement.
Значение переменной firstElement это строка 'яблоко'.
Объявлена переменная secondElement.
Значение переменной secondElement это строка 'слива'.
Объявлена переменная lastElement.
Значение переменной lastElement это строка 'апельсин'.
*/

// Стартовый код
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
// Пиши код ниже этой строки
const firstElement = 'яблоко';
const secondElement = 'слива';
const lastElement = 'апельсин';
console.log(fruits[0]);