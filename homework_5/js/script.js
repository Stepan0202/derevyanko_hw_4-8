const button = document.querySelector(".btn");
window.addEventListener('load', getInformation);
button.addEventListener('click', getInformation);
function getInformation(){
    const age = prompt("Wheh do you birth?");
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
        ageMessage = `You are ${2023 - age}.`;
        messagesArray.push(ageMessage);
    }
    if(!!city){
        resultMessage = "";
        cityMessage = ` You are living in ${city}.`;
        if(capitals[city.toLowerCase()]) cityMessage = ` You are living in the capital of ${capitals[city.toLowerCase()]}.`;
        messagesArray.push(cityMessage);
    }
    if(!!sport){
        resultMessage = "";
        championsMessage = ` Your favourite sport is ${sport.toLowerCase()}`;
        if (champions[sport.toLowerCase()]) championsMessage = ` Cool! You want to be ${champions[sport.toLowerCase()]}`;
        messagesArray.push(championsMessage);
    }
    for(let i = 0; i < messagesArray.length; i++){
        if(messagesArray[i]){
            resultMessage += messagesArray[i];
        }
    }
    alert(resultMessage);
    const pElement = document.createElement("p");
    document.body. appendChild(pElement);
    pElement.innerHTML = resultMessage;
}


