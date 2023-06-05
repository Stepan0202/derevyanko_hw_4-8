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