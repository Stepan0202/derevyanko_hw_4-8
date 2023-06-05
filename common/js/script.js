/*
TODO
1. Separate function to checking digits quantity in number
2. 
*/

// Дано два різні числа. Визначити, яке з них більше, а яке менше.

let input1HM4Task1 = document.querySelector("#hw4t1in1");
let input2HM4Task1 = document.querySelector("#hw4t1in2");
let submitHM4Task1 = document.querySelector("#hw4t1submit");
submitHM4Task1.addEventListener('click', (e) => {
    e.preventDefault();
    let sign = document.querySelector(".sign_hw4_t1");
    let firstNumber = parseFloat(input1HM4Task1.value);
    let secondNumber = parseFloat(input2HM4Task1.value);
   
    switch(true){
        case firstNumber > secondNumber:
            sign.innerHTML = ">";
            break;
        case firstNumber == secondNumber:
            sign.innerHTML = "=";
            break;
        case firstNumber < secondNumber:
            sign.innerHTML = "<";
            break;
        default:
            sign.innerHTML = "?";
    }
    console.log(firstNumber > secondNumber);

});

// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?
let input1HM4Task2 = document.querySelector("#hw4t2in1");
let input2HM4Task2 = document.querySelector("#hw4t2in2");
let submitHM4Task2 = document.querySelector("#hw4t2submit");
submitHM4Task2.addEventListener('click', (e) => {
    e.preventDefault();
    let sign = document.querySelector(".sign_hw4_t2");
    let firstNumber = parseFloat(input1HM4Task2.value)*1000;
    let secondNumber = parseFloat(input2HM4Task2.value)*0.305;
   
    switch(true){
        case firstNumber > secondNumber:
            sign.innerHTML = ">";
            break;
        case firstNumber == secondNumber:
            sign.innerHTML = "=";
            break;
        case firstNumber < secondNumber:
            sign.innerHTML = "<";
            break;
        default:
            sign.innerHTML = "?";
    }
});
// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)
let input1HW4Task3 = document.querySelector("#hw4t3in1");
let input2HW4Task3 = document.querySelector("#hw4t3in2");
let submitHW4Task3 = document.querySelector("#hw4t3submit");
submitHW4Task3.addEventListener('click', (e) => {
    e.preventDefault();
    let firstNumber = parseFloat(input1HW4Task3.value);
    let secondNumber = parseFloat(input2HW4Task3.value);
    let aDivideb = document.querySelector(".hw4t3answer1");
    let bDividea = document.querySelector(".hw4t3answer2");

    aDivideb.innerHTML = `'a' is a divisor of 'b': <span class="fs-3">${secondNumber  % firstNumber == 0}</span>`;
    bDividea.innerHTML = `'b' is a divisor of 'a': <span class="fs-3">${firstNumber % secondNumber == 0}</span>`;
    console.log(firstNumber % secondNumber );
    console.log(secondNumber % firstNumber);

    
});
// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.
let input1HW4Task4 = document.querySelector("#hw4t4in1");
let input2HW4Task4 = document.querySelector("#hw4t4in2");
let submitHW4Task4 = document.querySelector("#hw4t4submit");
submitHW4Task4.addEventListener('click', (e) => {
    e.preventDefault();
    let firstNumber = parseFloat(input1HW4Task4.value);
    let answer = document.querySelector(".hw4t4answer1");
    let lastNumber;
    let oddOrNot;
    if(Math.abs(firstNumber) < 10 ) lastNumber = firstNumber;
    else lastNumber = Math.abs(firstNumber % 10);
    console.log(firstNumber < 10);
    console.log(firstNumber % 10);
    lastNumber % 2 == 0 ? oddOrNot = "even" : oddOrNot = "odd";
    answer.innerHTML = `Last number is: <span class="fs-3">${lastNumber}</span>. It\`s   <span class="fs-3">${oddOrNot}</span>`;    
});
// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?
let input1HW4Task5 = document.querySelector("#hw4t5in1");
let input2HW4Task5 = document.querySelector("#hw4t5in2");
let submitHW4Task5 = document.querySelector("#hw4t5submit");
submitHW4Task5.addEventListener('click', (e) => {
    e.preventDefault();
    let number = parseInt(input1HW4Task5.value);
    if((number > -10 && number < 10) || (number < -99 || number > 99)){
        alert("Number must be two-digit");
        input1HW4Task5.value = "";
        return false;
    }
    let firstNumber = parseInt(input1HW4Task5.value/10);
    let secondNumber = parseInt(input1HW4Task5.value)%10;
    let answer = document.querySelector(".hw4t5answer1");
    switch(true){
        case firstNumber < secondNumber:
            answer.innerHTML = `Answer: ${firstNumber} < ${secondNumber}`;
            break;
        case firstNumber > secondNumber:
            answer.innerHTML = `Answer: ${firstNumber} > ${secondNumber}`;
            break;
        case firstNumber == secondNumber:
            answer.innerHTML = `Answer: ${firstNumber} = ${secondNumber}`;
            break;
    }
      
});
/*Дано тризначне число.
    Визначити чи є парною сума його цифр.
    Визначити, чи кратна сума цифр п'яти.
    Визначити чи є добуток його цифр більше 100.*/
    let input1HW4Task6 = document.querySelector("#hw4t6in1");
    let input2HW4Task6 = document.querySelector("#hw4t6in2");
    let submitHW4Task6 = document.querySelector("#hw4t6submit");
    submitHW4Task6.addEventListener('click', (e) => {
        e.preventDefault();
        let number = parseInt(input1HW4Task6.value);
        if((number > -100 && number < 100) || (number < -999 || number > 999)){
            alert("Number must be three-digit");
            input1HW4Task6.value = "";
            return false;
        }
        let firstNumber = parseInt(input1HW4Task6.value/100);
        let secondNumber = parseInt(input1HW4Task6.value%100/10);
        let thirdNumber = parseInt(input1HW4Task6.value)%10;
        let numbersSum = firstNumber+secondNumber+thirdNumber;
        let numbersMultiply = firstNumber*secondNumber*thirdNumber;
        let answer1 = document.querySelector(".hw4t6answer1");
        let answer2 = document.querySelector(".hw4t6answer2");
        let answer3 = document.querySelector(".hw4t6answer3");
        answer1.innerHTML = numbersSum%2 == 0;
        answer2.innerHTML = numbersSum%5 == 0;
        answer3.innerHTML = numbersMultiply > 100;
    });

/*Дано тризначне число.
    Чи правда, що всі цифри однакові?
    Чи є серед цифр цифри однакові?*/
    let input1HW4Task7 = document.querySelector("#hw4t7in1");
    let input2HW4Task7 = document.querySelector("#hw4t7in2");
    let submitHW4Task7 = document.querySelector("#hw4t7submit");
    submitHW4Task7.addEventListener('click', (e) => {
        e.preventDefault();
        let number = parseInt(input1HW4Task7.value);
        if((number > -100 && number < 100) || (number < -999 || number > 999)){
            alert("Number must be three-digit");
            input1HW4Task7.value = "";
            return false;
        }
        let firstNumber = parseInt(input1HW4Task7.value/100);
        let secondNumber = parseInt(input1HW4Task7.value%100/10);
        let thirdNumber = parseInt(input1HW4Task7.value)%10;
        let answer1 = document.querySelector(".hw4t7answer1");
        let answer2 = document.querySelector(".hw4t7answer2");
        answer1.innerHTML = (firstNumber == secondNumber && secondNumber == thirdNumber);
        answer2.innerHTML = (firstNumber == secondNumber || secondNumber == thirdNumber || firstNumber == thirdNumber);
        
    });
// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
let input1HW4Task8 = document.querySelector("#hw4t8in1");
let input2HW4Task8 = document.querySelector("#hw4t8in2");
let submitHW4Task8 = document.querySelector("#hw4t8submit");
submitHW4Task8.addEventListener('click', (e) => {
    e.preventDefault();
    let number = parseInt(input1HW4Task8.value);
    if((number > -100000 && number < 100000) || (number < -999999 || number > 999999)){
        alert("Number must be six-digit");
        input1HW4Task8.value = "";
        return false;
    }
    let digits = input1HW4Task8.value.split("");
    let isMirror = true;
    if(number < 0) digits.splice(0, 1);
    let len = digits.length;
    digits.forEach((digit, key) => {
        digits[key] = parseInt(digit);
    })
    for(let i = 0; i < len/2; i++){
        if(digits[i] != digits[len-1-i]){
            isMirror = false;
        }
    }
    let answer1 = document.querySelector(".hw4t8answer1");
    answer1.innerHTML = isMirror;
    
    
});
/*HOMEWORK 5*/
const button = document.querySelector(".hw5t1submit");
button.addEventListener('click', getInformation);
function getInformation(){
    const age = prompt("How old are you?");
    if(!age) alert("We are sorry that you don`t want to enter your age");
    let city = prompt("Where do you live?");
    if(!city) alert("We are sorry that you don`t want to enter your city");
    let sport = prompt("What is your favourite sport: football, box or hockey?");
    if(!sport) alert("We are sorry that you don`t want to enter your favourite sport");
    const capitals = {
        "kyiv" : "Ukraine",
        "washington" : "USA",
        "london" : "Great Britain",
        "київ" : "Ukraine",
        "вашингтон" : "USA",
        "лондон" : "Great Britain",
    };
    const champions = {
        "football" : "Shevchenko",
        "box" : "Klichko",
        "hockey" : "Savchuk",
        "футбол" : "Shevchenko",
        "бокс" : "Klichko",
        "хокей" : "Savchuk",
    };
    let ageMessage;
    let cityMessage;
    let championsMessage;
    let messagesArray = [];
    let resultMessage = "Sorry, but you tell nothing about yourself :(";
    if(!!age){
        resultMessage = "";
        ageMessage = `You are ${age}.`;
        messagesArray.push(ageMessage);
    }
    if(!!city){
        resultMessage = "";
        cityMessage = `You are living in ${city}.`;
        if(capitals[city.toLowerCase()]) cityMessage = `You are living in the capital of ${capitals[city.toLowerCase()]}.`;
        messagesArray.push(cityMessage);
    }
    if(!!sport){
        resultMessage = "";
        championsMessage = `Your favourite sport is ${sport.toLowerCase()}`;
        if (champions[sport.toLowerCase()]) championsMessage = `Cool! You want to be ${champions[sport.toLowerCase()]}`;
        messagesArray.push(championsMessage);
    }
    for(let i = 0; i < messagesArray.length; i++){
        if(messagesArray[i]){
            resultMessage += messagesArray[i];
        }
    }
    alert(resultMessage);
}
//HOMEWORK 6
let numOrStr = prompt('input number or string');
console.log(numOrStr)
switch(true){
    case numOrStr === null:
        console.log('ви відмінили');
        break;
    case numOrStr.trim() === '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!');
}

//HOMEWORK 7
const hw7_buttonsElements = document.querySelectorAll("[class *= hw7btn]");
const hw7_btnArr = [...hw7_buttonsElements];
const hw7_answersElements = document.querySelectorAll("[class *= hw7Answer]");
const hw7_ansArr = [...hw7_answersElements];
const hw7_funcs = [];

    // Вивести на сторінку в один рядок через кому числа від 10 до 20
hw7_funcs[0] = function task0() {
    let taskNum = 0;
    for(let i = 10; i <= 20; i++){
        hw7_ansArr[taskNum].insertAdjacentHTML('beforeend', ` ${i}`);
    }
}
    // Вивести квадрати чисел від 10 до 20
hw7_funcs[1] = function task1() {
    let taskNum = 1;
    for(let i = 10; i <= 20; i++){
        hw7_ansArr[taskNum].insertAdjacentHTML('beforeend', ` ${Math.pow(i, 2)}`);
    }
}

    // Вивести таблицю множення на 7
hw7_funcs[2] = function task2() {
    let taskNum = 2;
    for(let i = 1; i <= 10; i++){
        hw7_ansArr[taskNum].insertAdjacentHTML('beforeend', `7 * ${i} = ${7*i} <br>`);
    }
}
    // Знайти суму всіх цілих чисел від 1 до 15
hw7_funcs[3] = function task3() {
    let taskNum = 3;
    let sum = 0;
    for(let i = 1; i <= 15; i++){
        sum += i;
    }
    hw7_ansArr[taskNum].insertAdjacentHTML('beforeend', `${sum}`);
}
    // Знайти добуток усіх цілих чисел від 15 до 35
hw7_funcs[4] = function task4() {
    let taskNum = 4;
    let multiply = BigInt(1);
    for(let i = BigInt(15); i <= 35; i++){
        multiply *= i;
    }
    hw7_ansArr[taskNum].insertAdjacentHTML('beforeend', `${multiply}`);
}
    // Знайти середнє арифметичне всіх цілих чисел від 1 до 500
hw7_funcs[5] = function task5() {
    let taskNum = 5;
    let sum = 0;
    let numsQuantity;
    for(let i = 1; i <= 500; i++){
        sum += i;
        numsQuantity = i;
    }
    hw7_ansArr[taskNum].insertAdjacentHTML('beforeend', `${sum/numsQuantity}`);
}
    // Вивести суму лише парних чисел у діапазоні від 30 до 80
hw7_funcs[6] = function task6() {
    let taskNum = 6;
    let sum = 0;
    for(let i = 30; i <= 80; i+=2){
        sum += i;
    }
    hw7_ansArr[taskNum].insertAdjacentHTML('beforeend', `${sum}`);
}
    // Вивести всі числа в діапазоні від 100 до 200 3
hw7_funcs[7] = function task7() {
    let taskNum = 7;
    for(let i = 100; i <= 200; i++){
        if(i%3 == 0){
            hw7_ansArr[taskNum].insertAdjacentHTML('beforeend', ` ${i}`);
        }
    }
}
    // Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
let hw7_input1;
let dividers = [];
let evenDividers = [];
hw7_funcs[8] = function task8() {
    hw7_input1 = document.querySelector("#hw7input1").value;
    if(!hw7_input1 || !hw7_input1.trim()) {
        alert("Enter a number please");
        return;
    }
    +hw7_input1;
    let taskNum = 8;
    for(let i = 1; i <= hw7_input1; i++){
        if(hw7_input1%i == 0){
            dividers.push(i);
        }
    }
    hw7_ansArr[taskNum].innerHTML = `Dividers of ${hw7_input1} are: ${dividers}`;
}
    // Визначити кількість його парних дільників
hw7_funcs[9] = function task9() {
    let taskNum = 9;
    for(let i = 0; i <= dividers.length; i++){
        if(dividers[i]%2 == 0){
            evenDividers.push(dividers[i]);
        }
    }
    hw7_ansArr[taskNum].innerHTML = `Even dividers of ${hw7_input1} are: ${evenDividers}`;
}
    // Знайти суму його парних дільників
hw7_funcs[10] = function task10() {
    let taskNum = 10;
    let sum = 0;
    for(let i = 0; i <= evenDividers.length; i++){
        if (evenDividers[i]) sum += evenDividers[i];
    }
    hw7_ansArr[taskNum].innerHTML = `Sum of even dividers of ${hw7_input1} are: ${sum}`;
}
    // Надрукувати повну таблицю множення від 1 до 10

hw7_funcs[11] = function task11() {
    for(let i = 1; i <= 10; i++){
        let columnClass = ".hw7_table"+i;
        let columnEl = document.querySelector(columnClass);
        for(let j = 1; j <= 10; j ++){
            columnEl.insertAdjacentHTML("beforeend", `${i} * ${j} = ${i*j} <br>`);
        }
    }
}
    //Adding event listeners to the buttons
for(let i = 0; i < hw7_ansArr.length; i++){
    hw7_btnArr[i].addEventListener('click', hw7_funcs[i]);
}