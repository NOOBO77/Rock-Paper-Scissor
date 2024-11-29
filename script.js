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

    let color;

    if (res === "You Win!") {
        color = "green";
    } else if (res === "You Lose!") {
        color = "red";
    } else {
        color = "orange";
    }

    document.getElementById('Result').textContent=res;

    //it will not work as result class has many elements inside
    // document.getElementsByClassName('result').style.color=color;
    const elem = document.querySelectorAll('.result');

    elem.forEach((e) =>{
        e.style.color = color;  
    });
}
document.addEventListener('keyup',playerkbd);

//arrow finction for keyboard input
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