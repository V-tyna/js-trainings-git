//Напишите функцию a, которая просто является коротким именем для alert. Смотрите пример с d(), которая является коротким именем для debugger из материала лекции

function a(b){
    alert(b);
}
// a("Привет!") // вызывает alert("Привет!")

// Напишите функцию cube, которая возвращает число в третьей степени:

function cube(a){
    return (a * a * a);
}
// console.log(cube(3));

//Напишите функцию avg2, которая рассчитывает среднюю для двух чисел:
// формула для подсчета среднего: (a + b) / 2

function avg2(a, b) {
    return ((a + b) / 2);
}

console.log(avg2(1,2));
console.log(avg2(10,5));

// Напишите функцию sum3 для суммирования 3 чисел:
// Обратите внимание, что sum3 от двух параметров тоже работает корректно.
function sum3(a, b, c) {
    if (!b) {
        return a;
    }    else if(!c) {
        return a + b;
    } else {
        return a + b + c;
    }
}

console.log(sum3(1, 2, 3));
console.log(sum3(5,10,100500));
console.log(sum3(5,10));

function intRandom(min, max) {
    if(max === undefined) {
        max = min;
    }
    return Math.floor(Math.random() * (max - min)) + min;
}

// console.log(intRandom(-3, 6));

// Сделайтей функцию, которая приветствует всех, кто передан в качестве параметров.
// Вам поможет arguments и for

function greetAll() {
    for (let i = 0; i < arguments.length; i++) {
        alert("Привет, " + arguments[i]);
    }
}

// greetAll('Kiki', 'Lili', 'Didi', 'Bibi');

//Напишите функцию sum, которая сумирует любое количество параметров: Используйте псевдомассив arguments для получения всех параметров, и for для итерирования по нему

function sum() {
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array[i] = arguments[i];
    }
    return array.reduce((accumulator, currentValue) => accumulator + currentValue);
}

const testSum = sum(1, 5, 6, 3, 7);

console.log(testSum);

// https://github.com/garevna/js-course/wiki/self-work-02#2

//Задание 1 Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы
//Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой
//
// ( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )

let group = [
    {
    name: 'Ivan',
    lastName: 'Ivanov',
    age: 25,
    hasCat: true
    },
    {
        name: 'Petr',
        lastName: 'Petrov',
        age: 24,
        hasCat: false
    },
    {
        name: 'Olga',
        lastName: 'Olegova',
        age: 26,
        hasCat: true
    }
]



function getStudentList() {
    group.forEach((elem) => {
        console.log('Name: ' + elem.name + ' ' + elem.lastName + '. ' + 'Age: ' + elem.age + '. ' + 'Has cat: ' + elem.hasCat + '.');
    });
}

 getStudentList();

//Задание 2 Объявить функцию, которая добавляет нового студента в массив group

function addNewStudent(name, lastName, age, hasCat) {
    group.push({name, lastName, age, hasCat});
}
console.log(addNewStudent('John', 'Johnson', 23, true));

console.log(group);

let finalString = '';

function changeString(string) {
    for( let char of string) {
        let codeLetter = char.charCodeAt(0);
        if (codeLetter <= 1103 && codeLetter >= 1040) {
            finalString += char;
        }
        if (codeLetter === 32) {
            finalString += char;
        }
    }
    return finalString;
}

console.log(changeString("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"));


// Задание 4 Написать функцию сортировки массива
//
// Не использовать метод sort ()
//
// Использовать оператор цикла while
//
// Использовать методы работы с массивами и строками

function BubbleSort(array)       // A - массив, который нужно
{                            // отсортировать по возрастанию.
    let arrLength = array.length;
    for (let i = 0; i < arrLength-1; i++)
    { for (let j = 0; j < arrLength-1-i; j++)
    { if (array[j+1] < array[j])
    { let t = array[j+1];
        array[j+1] = array[j];
        array[j] = t; }
    }
    }
    return array;    // На выходе сортированный по возрастанию массив A.
}

console.log(BubbleSort(group));

const fruitsArray = ['banana', 'peach', 'apple', 'plum', 'grape', 'pear', 'cherry'];
console.log(BubbleSort(fruitsArray));

let arrAge = [];

let preFullNames = [];
let arrFullNames = [];

group.forEach((student) => {
    arrAge.push(student.age);
    let arrNames = [];
    let arrLastNames = [];
    arrNames.push(student.name);
    arrLastNames.push(student.lastName);
    preFullNames = arrNames.concat(arrLastNames);
    arrFullNames.push(preFullNames.join(' '));
});
console.log(arrAge);
console.log(arrFullNames);

arrAge.sort();

console.log(arrAge);

// Unite 2 arrays: name and lastname
const arrayN = ['Vasya', 'Petya', 'Slava', 'Lena'];
const arrayLN = ['Vasyle', 'Petrov', 'Slavov', 'Lenina'];

const arrFN = [];

for(let i = 0; i < arrayN.length; i++) {
    arrFN.push(arrayN[i] + ' ' + arrayLN[i]);
}
console.log(arrFN);

