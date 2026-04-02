
// function User(firstName, lastName) {
//   console.log(`Здравствуйте, ${lastName} ${firstName}. Рады вас видеть на курсах MetaLabs.`);
// }

// User("Самир", "Артыкбаев");


// const yoda = (num) => {

//     if (num % 3 === 0) {
//         return 'Master'
//     }
//     else if (num % 5 === 0) {
//         return 'Yoda'
//     }
//     else if (num % 3 === 0 && a % 5 === 0) {
//         return 'MasterYoda'
//     }
//     else {
//         return num;
//     }

// }

// console.log(yoda(9));
// console.log(yoda(10));
// console.log(yoda(15));
// console.log(yoda(7));





// 1.  У вас есть массив чисел. Создайте новый массив, где каждое число возведено в квадрат.
// [2, 4, 6, 8];
// // Ожидаемый результат: [4, 16, 36, 64]
// 2. Из массива возрастов оставьте только те, чей возраст больше 27
// [12, 18, 27, 39, 40]
// // Ожидаемый результат [27, 39, 40]


// 1
// const arr = [2, 4, 6, 8]

// const arrMap = arr.map(arr => arr ** 2);

// console.log (arrMap)

// 2
// const ageUser = [12, 18, 27, 39, 40];

// const ageOld = ageUser.filter(ageUser=> ageUser >= 27)

// console.log(ageOld)






// 1. У вас есть массив из юзеров ([{name: "Имя", age: 12}, 

// {name: "Имя", age: 12}]), ваша задача вывести в консоль каждого юзера в красивом формате. По типу "Имя этого юзера "Имя" и ему 12 лет".

// 2. У вас массив товаров. Выведите его сумму используя reduce

// [
// { name: "Книга", price: 450 },
// { name: "Ручка", price: 50 },
// { name: "Блокнот", price: 200 },
// { name: "Карандаш", price: 30 }
// ]


// 1

// const users = [

//     { name: 'Sanek', age: 23 },
//     { name: 'Serega', age: 20 },
//     { name: 'Sunbel', age: 99 },
//     { name: 'Rusik', age: 25 },
//     { name: 'Ivan', age: 2 },

// ]

// users.forEach(user => {
//   console.log(`Имя этого юзера "${user.name}" и ему ${user.age} лет`);
// });



// 2


const product = [
    { name: "Книга", price: 450 },
    { name: "Ручка", price: 50 },
    { name: "Блокнот", price: 200 },
    { name: "Карандаш", price: 30 }
]

const sumProduct = product.reduce((acc, item) => {return acc+item.price},0)

console.log(sumProduct)