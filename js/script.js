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
    let firstNumber = parseFloat(input1HM4Task2.value);
    let secondNumber = parseFloat(input2HM4Task2.value);
   
    switch(true){
        case firstNumber > secondNumber*0.305:
            sign.innerHTML = ">";
            break;
        case firstNumber == secondNumber*0.305:
            sign.innerHTML = "=";
            break;
        case firstNumber < secondNumber*0.305:
            sign.innerHTML = "<";
            break;
        default:
            sign.innerHTML = "?";
    }
});
// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

/*Дано тризначне число.
    Визначити чи є парною сума його цифр.
    Визначити, чи кратна сума цифр п'яти.
    Визначити чи є добуток його цифр більше 100.*/



/*Дано тризначне число.
    Чи правда, що всі цифри однакові?
    Чи є серед цифр цифри однакові?*/

// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)
