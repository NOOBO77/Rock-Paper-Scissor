
function computer(){
    let num=Math.random();
    if(num<=1/3){
        return "Rock";
    }
    else if(num<=2/3){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function playerkbd(event){
    const key=event.key.toLowerCase();
    if(key=="r"){
        playGame("Rock");
    }
    else if(key=="p"){
        playGame("Paper");
    }
    else if(key=="s"){
        playGame("Scissor");
    }
}

function playGame(playerChoice){
    const computerChoice = computer();

    document.getElementById('yourChoice').textContent=`Your Choice - ${playerChoice}`;
    document.getElementById('computerChoice').textContent=`Computer Choice - ${computerChoice}`;

    let res;
    if(computerChoice==playerChoice){
        res="It's a tie!";
    }
    else if((computerChoice=="Rock" && playerChoice=="Paper") || 
            (computerChoice=="Paper" && playerChoice=="Scissor") ||
            (computerChoice=="Scissor" && playerChoice=="Rock")){
                res="You Win!";
            }
    else{
        res="You Lose!";
    }

    document.getElementById('Result').textContent=`${res}`;
}

document.addEventListener('keyup',playerkbd);

// document.addEventListener('keydown',(event) => {
//     const key=event.key.toLowerCase();
//     if(key=="r"){
//         playGame("Rock");
//     }
//     else if(key=="p"){
//         playGame("Paper");
//     }
//     else  if(key=="s"){
//         playGame("Scissor");
//     }
// });