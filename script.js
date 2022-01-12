'use strict';

let hasDriverLicense = false;
const passTest = true;

switch(passTest) {
    case true:
        hasDriverLicense = true;
        console.log(hasDriverLicense);
    break;
    default:
        console.log('can not drive');
}

function logger() {
    console.log('My name is Minh');
}
// calling/running/using/voking the function //
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = ` Juice with ${apples} apple and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(3, 6);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);