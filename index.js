let string = 'я учу javascript!';
console.log(string);

//1
let counter = 0;
for(let i = 0; i < string.length; i++) {
	if(string[i] !== ' ') {
		counter++;
	}
}
console.log(`Koличество символов в строке - ${counter}`);

//2

console.log(string.substr(0, 1), string.substr(6));
console.log(string.substring(0, 1), string.substr(6));
console.log(string.slice(-17, -16), string.slice(-11));

console.log(string.substr(0, 5));
console.log(string.substring(0, 5));
console.log(string.slice(-17, -11));

//3 
console.log(string.indexOf('учу'));

//4
let str = 'В JavaScript любые текстовые данные являются строками. Не существует отдельного типа «символ», который есть в ряде других языков. Внутренний формат для строк — всегда UTF-16, вне зависимости от кодировки страницы.'
let n = Number(prompt('Введите заданное количество символов на которые нужно обрезать текст'));

function cutStr(n, str) {
	if(str.length > n) {
		let result = str.substr(0, n);
		result = result.trim() + '...';
		return result;
	}
	return str;
}

console.log(cutStr(n, str));

//5 
let js = 'js';
console.log(js.toUpperCase());

//6
let JS = 'JS';
console.log(js.toLowerCase());

//7 
console.log(Math.round(Math.random() * 100));

//8
let randomArray = [];
for(let i = 0; i < 10; i++){
	let randomNumber = Math.round(Math.random() * 100);
	randomArray = randomArray.concat(randomNumber);
}

console.log(randomArray);

//9
let sringABC = 'aaa bbb ccc';

console.log(sringABC.substring(0, 4) + sringABC.substring(7, 11));
console.log(sringABC.substr(0, 4) + sringABC.substr(-4));
console.log(sringABC.slice(0, 4) + sringABC.slice(-4));