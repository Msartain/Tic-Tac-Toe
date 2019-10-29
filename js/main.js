
/*----------constants--------*/
const playerOne = "x" ;
const playerTwo = "o" ;

/*---------app's state (variables)-------*/
let boxesClicked;

let playerOneMvs, playerTwoMvs;

let playerOneTotalScore = 0;
let playerTwoTotalScore = 0;

/*-----cached element references--------*/

let message = document.querySelector('h3');
message.style.color = '#CA0146'
message.style.fontFamily = 'Courier New, Courier, monospace';

/*--------event listeners-------*/

document.getElementById('board').addEventListener('click', handleBoxClick);

document.getElementById('reset').addEventListener('click', init);

/*----------functions-----------*/
init();

//alternating turns between X and O 
function handleBoxClick(evt){
    let box = evt.target.id;
    preventDoubleClick(box, evt);
    if(boxesClicked.length % 2 !== 0){
        evt.target.textContent = playerOne;
        checkWinner(box, playerOneMvs, playerOneTotalScore, evt);
    } else {
        evt.target.textContent = playerTwo;
        checkWinner(box, playerTwoMvs, playerTwoTotalScore, evt);
    }
};

//preventing a second click
function preventDoubleClick(click, evt){
        if (boxesClicked.includes(click)){
            evt.preventDefault();
        } else {
            boxesClicked.push(click);
        }
};    

//checking for a winning combination of box numbers
console.log(playerOneTotalScore)
function checkWinner(box, arr, score,evt){
        arr.push(box);
       if ((arr.includes("1") && arr.includes("2") && arr.includes("3")) ||
           (arr.includes("4") && arr.includes("5") && arr.includes("6")) ||
           (arr.includes("7") && arr.includes("8") && arr.includes("9")) ||
           (arr.includes("1") && arr.includes("5") && arr.includes("9")) ||
           (arr.includes("3") && arr.includes("5") && arr.includes("7")) ||
           (arr.includes("1") && arr.includes("4") && arr.includes("7")) ||
           (arr.includes("2") && arr.includes("5") && arr.includes("8")) ||
           (arr.includes("3") && arr.includes("6") && arr.includes("9"))){
            score++;
            message.innerHTML = '<h2>Winner!</h2>';
            evt.preventDefault();
            // window.setTimeout(window.alert, 350, "Win!");
        }else if(boxesClicked.length === 9) {
            message.innerHTML = '<h2>Tie Game!</h2>';
            // window.setTimeout(window.alert, 350, "Tie Game.");
        }
    };

//initialize game 
function init(){
    console.log("reset");
    message.innerHTML = '';
    boxesClicked = [];
    playerOneMvs = [];
    playerTwoMvs = [];
    for(let i = 1; i <= 9; i++){
        document.getElementById(i.toString()).textContent = '';
    };
}; 
