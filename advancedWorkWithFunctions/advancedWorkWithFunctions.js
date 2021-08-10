// --------------------- RECURSION ------------------------

const users = {
    'ivanov': {
        age: 25,
        parent: {
            'ivanov-a': {
                age: 45
            },
            'ivanov-b': {
                age: 43,
                parent: {
                    'sergeev-a': {
                        age: 72,
                        parent: {
                            'lionenko': {
                                age: 90,
                                parent: {
                                    'lionenko-a': {}
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    'kostenko': {
        age: 56,
        parent: {
            'ignatenko': {},
            'sniezko': {
                age: 83
            }
        }
    }
}

function userParentRecursion(obj) {
    if (obj.parent !== undefined) {
            for (let key in obj.parent) {
            console.log(key);
            userParentRecursion(obj.parent[key]);
            }
        }
}

for (let key in users) {
    userParentRecursion(users[key]);
}

function userAgeRecursion(obj) {
    console.log(obj.age);
    if (obj.parent !== undefined) {
        for (let key in obj.parent) {
            if (obj.parent[key].age !== undefined) {
                userAgeRecursion(obj.parent[key]);
            }
        }
    }
}

for (let key in users) {
    userAgeRecursion(users[key]);
}

const ageIvanovA = users.ivanov.parent["ivanov-a"]["age"];
console.log(ageIvanovA);

// -------------- Show salary 1 --------------

let company = {
    sales: [{
        name: 'John',
        salary: 1600
    }, {
        name: 'Alice',
        salary: 1600
    }],
    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};

function sumSalary(department) {
    if (Array.isArray(department)) {
        return department.reduce((previous, current) => previous + current.salary, 0);
    } else {
        let sum = 0;
        for (let subDep of Object.values(department)) {
            sum += sumSalary(subDep);
        }
        return sum;
    }
}

console.log(sumSalary(company));

// ------------- Вывод односвязного списка цикл/рекурсия ------------------

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function showListValueCycle(someList) {
    let tmp = someList;

    while(tmp) {
        console.log(tmp.value);
        tmp = tmp.next;
    }
}

showListValueCycle(list);

function showListValueRecursion(someList) {
    console.log(someList.value);
    if(someList.next) {
        showListValueRecursion(someList.next);
    }
}

showListValueRecursion(list);

// Вычислить сумму чисел до данного. Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

function sumTo(n) {
    let sum = 0;
    for( let i = 1; i <= n; i++){
        sum += i;
    }
    return sum;
}

console.log(sumTo(5));

function sumToRecursion(n) {
    if( n < 1)  return n;
    return n + sumToRecursion(n - 1);
}

console.log(sumToRecursion(5));

function factorialRecursion(n) {
    if(n <= 0) return;
    if(n === 1) return n;
    return n * factorialRecursion(n - 1);
}

console.log(factorialRecursion(5));


// Фибоначи с большими числами вычисляет ооочень долго ( напр 77  может повесит браузер на некоторое время, съев все ресурсы процессора)

function fibRecursion(n) {
    if(n <= 1) return n;
    return fibRecursion(n - 1) + fibRecursion(n - 2);
}

console.log(fibRecursion(7));

// Фибоначи цикл. Такой способ называется динамическое программирование снизу вверх.

function fibCycle(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fibCycle(77));

//recursion.js Implement the function to count all the salaries of the restaurant object

const restaurant = {
    managers: [{ name: 'Alex', salary: 100 },
        { name: 'Bob', salary: 200 },
        { name: 'Lera', salary: 140 },],
    employee: {
        waiters: [{ name: 'Masha', salary: 60 },
            { name: 'Pasha', salary: 50 },
            { name: 'Dasha', salary: 40 },
            { name: 'Vasha', salary: 80 },],
        barmen: [{ name: 'Dina', salary: 50 },
            { name: 'Nina', salary: 50 },
            { name: 'Kina', salary: 60 },],
        chefs: { Chef: [{ name: 'Lui', salary: 150 }],
            junior: [{ name: 'Leo', salary: 50 },
                { name: 'Nicko', salary: 40 },
                { name: 'Bill', salary: 60 },
                { name: 'Dana', salary: 60 },],},
        dishwasher: [{ name: 'Nina', salary: 30 },
            { name: 'Marina', salary: 30 }, ],
    },
};

const getSalarySum = (department) => {
    if(Array.isArray(department)) {
        return department.reduce((previous, current) => previous + current.salary, 0);
    } else {
        let sum = 0;
        for(let subDep of Object.values(department)) {
            sum += getSalarySum(subDep);
        }
        return sum;
    }

};

console.log(getSalarySum(restaurant));

// ------------------ Оператор расширения, остаточные параметры --------------------

function sum(x, y, z, ...rest) {
    let result = x + y + z;
    for (let param of rest) {
        result += param;
    }
    return result;
}

function sumNumbers(...args) { //остаточные параметры( мы не знаем сколько нам придёт аргументов)
    let sum = 0;
    for (let arg of args) {
        sum += arg;
    }
    return sum;
}

const numbers = [1, 2, 3, 5, 6, 7];
const numbers2 = [3, 6, 3, 4];

console.log(sum(...numbers));

console.log(sum.apply(null, numbers));

console.log(Math.max(...numbers2, ...numbers)); // 7 большее число из двух массивов(передаём несколько итерриуемых объектов)

//  Можно комбинировать оператор расширения с обычными значениями:
console.log(Math.max(...numbers2, 3, 13, ...numbers, 9));

// Оператор расширения можно использовать и для слияния массивов:

let uniteNumbersArrays = [...numbers2, 6, 3, ...numbers, 1];
console.log(uniteNumbersArrays);

console.log(sumNumbers(...numbers2, 5, 6, -1, ...numbers)); // операторы расширения, распаковывают массивы


//----SPREAD----
const obj11 = { foo: 'bar', x: 42 };
const obj12 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj11 };
console.log(clonedObj);

let mergedObj = { ...obj11, ...obj12 }; // foo: 'baz' - берёт значение из obj12 ключа foo
console.log(mergedObj);

// --------------  ЗАМЫКАНИЕ / CLOSURE ------------------
function createCalcFunction(n) {
    return function () {
        console.log(1000 * n);
    }
}

const calc = createCalcFunction(42);
console.log(calc);
calc();

function createIncrementor(n) {
    return function (num) {
        return n +  num;
    }
}

const addOne = createIncrementor(1);
const addTen = createIncrementor(10);

console.log(addOne(10));
console.log(addOne(41));

console.log(addTen(10));
console.log(addTen(41));

function urlGenerator(domain) {
    return function (url) {
        return `https://${url}.${domain}`;
    }
}

const comUrl = urlGenerator('com');
const ruUrl = urlGenerator('ru');

console.log(comUrl('google'));
console.log(comUrl('netflix'));

console.log(ruUrl('yandex'));

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
// }

const person1 = {name: 'Misha', age: 22, job: 'Frontend'};
const person2 = {name: 'Lena', age: 19, job: 'SMM', interests: 'movie'};

function bind(objContext, fn) {
    return function (...args) {
        console.log(args);
        fn.apply(objContext, args);
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}, ${this.interests}`)
}


let call1 = bind(person1, logPerson);
let call2 = bind(person2, logPerson);

call1();
call2();

function showName() {
    console.log(this.name);
}

let call3 = bind(person2, showName);
call3();

let aaa = 8;

function one() {
    // let aaa = 5;
    return aaa * 12;
}

console.log(aaa);
console.log(one());

function outer() {
    let aaa = 0;
    return function() {
        aaa = aaa + 1;
        return aaa;
    }
}

let bbb = outer();
let ccc = outer();

console.log(bbb);
console.log('bbb = ' + bbb()); // 1
console.log('ccc = ' + ccc()); // 1
console.log('ccc = ' + ccc()); // 2
aaa = 77;
console.log('bbb = ' + bbb()); // 2
console.log('ccc = ' + ccc()); // 3
console.log('bbb = ' + bbb());  // 3

let y = 10;

function func1() {
    console.log('global y : ' + y);
}

func1();
y = 99;
func1();

function func2() {
    let y = 33;
    console.log('local y: ' + y);
}

func2();
func1();

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function createBeggar() {
    let s = 0;
    return function beggar() {
        s += randomInteger(0, 100);
        console.log(s);
        if (s >= 250) return;
        beggar();
    }
}

let beggar1 = createBeggar();
beggar1();

// --------------- setTimeout & setInterval ----------------
//
// Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 10);

// рекурсивный setTimeout

function logNumbers(from, to) {
    let current = from;

    setTimeout(function go() {
        console.log(current);
        if(current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

logNumbers(1, 5);

