// Arrays are used for storing and inumerating data to give it an ID

// the first point is 0 and so on

const friends = ['Moe', 'Larry', 'Curly'];

// since moe is the first in the array it will equal 0

// items in a universal array can be stored in other variables using the array name and index.


const friendOne = friends[0];

console.log(friendOne);

const friendTwo = friends[1];

console.log(friendTwo);

const favoriteFoods = ['spaghetti, cheese, pizza, chicken, porkTaco'];

const favoriteFoodsArray = ['spaghetti', 'cheese', 'pizza', 'chicken', 'porkTaco'];

const porkTaco = favoriteFoodsArray[4];

console.log(porkTaco);


const subtotals = [0.40, 2.59, 3.14, 10.00];
// let total = subtotals[0] + subtotals[1] + subtotals[2] + subtotals[3]

// console.log(total);

let total = 0;
function addTotal() {
    for ( i = 0; i < subtotals.length; i++) {
    total += subtotals[i];
    console.log(total);
 }
}

addTotal()




