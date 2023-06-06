const hw8_answersElements = document.querySelectorAll("[class *= hw8Answer]");
const hw8_ansArr = [...hw8_answersElements];

for(let i = 20; i <=30; i += 0.5){
    hw8_ansArr[0].insertAdjacentHTML("beforeend", i + " ");
}
for(let i = 10; i <=100; i += 10){
    hw8_ansArr[1].insertAdjacentHTML("beforeend", `${i}$ is ${i*40}UAH<br>`);
}
let hw8_submit1 = document.querySelector(".hw8submit1");
hw8_submit1.addEventListener('click', (e) => {
    e.preventDefault();
    hw8_ansArr[2].innerHTML = "";
    let hw8_input1Value = document.querySelector("#hw8input1").value;
    +hw8_input1Value;
    for(let i = 1; i <=100; i++){
        if(i*i < hw8_input1Value){
            hw8_ansArr[2].innerHTML += i + " ";
        }
    }
})


let hw8_submit2 = document.querySelector(".hw8submit2");
hw8_submit2.addEventListener('click', (e) => {
    e.preventDefault();
    let hw8_input2Value = document.querySelector("#hw8input2").value;
    +hw8_input2Value;
    let isSimple = "Просте";
    console.log(hw8_input2Value);
    for(let i = 2; i < hw8_input2Value; i++){
        if (hw8_input2Value % i == 0) isSimple = "Не просте";
    }
    hw8_ansArr[3].innerHTML = isSimple;
})

let hw8_submit3 = document.querySelector(".hw8submit3");
hw8_submit3.addEventListener('click', (e) => {
    e.preventDefault();
    let hw8_input3Value = document.querySelector("#hw8input3").value;
    +hw8_input3Value;
    
    hw8_ansArr[4].innerHTML = isSimple;
})
