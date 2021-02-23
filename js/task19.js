/*
Итерация по массиву
Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.

const planets = ['Земля', 'Марс', 'Венера'];

for (let i = 0; i < planets.length; i += 1) {
  console.log(planets[i]);
}
Для доступа к элементам используется синтаксис квадратных скобок массив[индекс], где индекс - это значение счётчика цикла от 0 и до последнего индекса массива, который на единицу меньше длины массива.

Задание
Дополни код цикла for так, чтобы он последовательно логировал все элементы массива fruits.

Тесты
Объявлена переменная fruits.
Значение переменной fruits это массив ['яблоко', 'слива', 'груша', 'апельсин'].
Объявлена переменная i - счётчик цикла.
Начальное значение переменной i равно 0.
Условие цикла приводится к true до тех пор, пока i меньше 4.
На каждой итерации значение переменной i увеличивается на единицу.
В теле цикла for объявляется переменная const fruit и этой переменной присваивается значение - элемент массива.
В теле цикла for используется вывод в консоль переменной fruit.
*/
const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];

for (let i = 0; i < fruits.length; i += 1) { // Дополни эту строку
  const fruit = fruits[i]; // Дополни эту строку
  console.log(fruit);
}