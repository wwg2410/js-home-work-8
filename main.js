
// function User(firstName, lastName) {
//   console.log(`Здравствуйте, ${lastName} ${firstName}. Рады вас видеть на курсах MetaLabs.`);
// }

// User("Самир", "Артыкбаев");


const yoda = (num) => {

    if (num % 3 === 0) {
        return 'Master'
    }
    else if (num % 5 === 0) {
        return 'Yoda'
    }
    else if (num % 3 === 0 && a % 5 === 0) {
        return 'MasterYoda'
    }
    else {
        return num;
    }

}

console.log(yoda(9));
console.log(yoda(10));
console.log(yoda(15));
console.log(yoda(7));