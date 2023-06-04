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
/* */
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
