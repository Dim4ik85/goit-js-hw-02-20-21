/* Gоиск самого длинного слова
Задание
Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

Тесты
Объявлена функция findLongestWord(string).
Вызов функции findLongestWord('The quick brown fox  jumped over the lazy dog') возвращает jumped.
Вызов функции findLongestWord('Google do a roll') возвращает Google.
Вызов функции findLongestWord('May the force be with you') возвращает force.
Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.
*/

function findLongestWord(string) {
  // Пиши код ниже этой строки
    const newString = string.split(' ')
    let longestWord = '';
    for (let i = 0; i < newString.length; i += 1){
        if (newString[i].length > longestWord.length) {
            longestWord = newString[i]
        }
    }
    return longestWord;
  // Пиши код выше этой строки
}