const name = 'Max';
let age = 29;
const hasHobbies = true;

age = 30;

const summarizeUser = (userName, userAge, userHasHobby) => {
    return 'Name is ' + userName + ', age is ' + userAge + ' and user has hobbies: ' + userHasHobby;
}

const add = (a, b) => a + b;
const addOne = a => a + 1;
const justPrint = () => console.log("just do it");

console.log(add(1, 2));
console.log(addOne(2));
justPrint();
console.log(summarizeUser(name, age, hasHobbies));