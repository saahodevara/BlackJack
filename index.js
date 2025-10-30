let isAlive = false;
let hasBlackJack = false;
let cards = [];
let sum = 0;
let sumEle = document.getElementById("sum-ele");
let cardsEle = document.getElementById("cards-container");
let m = document.getElementById("message-ele");

function getRandomCard(){
    let rn = Math.floor(Math.random() * 13) + 1
    if(rn > 10)
    {
        return 10
    }
    else if(rn == 1)
    {
        return 11
    }
    else
    {
        return rn;
    }
    
    
 }



function renderGame(start, end)
{

    for(let i = start; i < end; i++)
    {
        let divEle = document.createElement('div');
        divEle.className = "card";
        cardsEle.appendChild(divEle);
        divEle.innerText = cards[i];
    }
    sumEle.textContent = "Sum: "+sum;
    if(sum <= 20)
    {
        message = "do you want to draw a new card ?";
    }
    else if(sum === 21)
    {
        hasBlackJack = true;
        message = "Wohoo! you've got BlackJack!";

    }
    else{
        isAlive = false;
        message = "You're out of the game!"
    }
    m.innerText = message;
}

 function startGame(){
    isAlive = true;
    sum = 0;
    cards = []
    hasBlackJack = false;
    cardsEle.innerHTML=""
    let fc = getRandomCard();
    let sc = getRandomCard();
    cards.push(fc)
    cards.push(sc)
    sum = fc + sc
    renderGame(0,2)
}
function newCard(){
    if(isAlive == true && hasBlackJack == false)
    {
    let nc = getRandomCard();
    sum += nc
    cards.push(nc);
    renderGame(cards.length-1,cards.length);
    }
}

