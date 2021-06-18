/*2.Дан элемент #elem. Реализуйте 4 функции:
- Добавьте ему класс www.
- Добавьте ему класс www, если его нет и удалите - если есть.
(https://developer.mozilla.org/ru/docs/Web/API/Element/classList)*/
const body = document.body;
const elemHTML = `
<div id = elem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvtGJNN0BZQsGm9HTvuyUpaFrRpFJnjW6bAw&usqp=CAU" alt=""></div>
`
body.insertAdjacentHTML('beforebegin', elemHTML)
const div = document.querySelector('div');
elem.classList.add('www');
console.dir(div);
/**- Удалите у него класс www.
 */
elem.classList.remove('www');
console.dir(div);
/*- Проверьте наличие у него класса www.
*/
const var1 = elem.classList.contains('www');
console.log(var1);
/**- Добавьте ему класс www, если его нет и удалите - если есть.
 */
elem.classList.toggle('www', !var1);
console.dir(div);

