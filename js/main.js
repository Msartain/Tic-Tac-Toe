
/*----------constants--------*/
const playerOne = "x" ;
const playerTwo = "o" ;
let boxesClicked;

/*---------app's state (variables)-------*/

let playerOneMvs, playerTwoMvs;

let playerOneTotalScore = 0;
let playerTwoTotalScore = 0;

/*-----cached element references--------*/


/*--------event listeners-------*/

document.getElementById('board').addEventListener('click', handleBoxClick);

document.getElementById('reset').addEventListener('click', init);

// document.getElementsByTagName('td').style.fontSize = '3vh';
/*----------functions-----------*/
init();

//alternating turns between X and O 
function handleBoxClick(evt){
    let box = evt.target.id;
    preventDoubleClick(box, evt);
    if(boxesClicked.length % 2 !== 0){
        evt.target.textContent = playerOne;
        checkWinner(box, playerOneMvs, playerOneTotalScore);
    } else {
        evt.target.textContent = playerTwo;
        checkWinner(box, playerTwoMvs, playerTwoTotalScore);
    }
    // console.log("above function" + evt)
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
function checkWinner(box, arr, score){
        arr.push(box);
       if ((arr.includes("1") && arr.includes("2") && arr.includes("3")) ||
           (arr.includes("7") && arr.includes("8") && arr.includes("9")) ||
           (arr.includes("1") && arr.includes("5") && arr.includes("9")) ||
           (arr.includes("3") && arr.includes("5") && arr.includes("7")) ||
           (arr.includes("1") && arr.includes("4") && arr.includes("7")) ||
           (arr.includes("2") && arr.includes("5") && arr.includes("8")) ||
           (arr.includes("3") && arr.includes("6") && arr.includes("9"))){
            score++;
            window.setTimeout(window.alert, 350, "Win!");
        }if(boxesClicked.length === 9) {
            window.setTimeout(window.alert, 350, "Tie Game.");
        }
        console.log("win win" + playerOneTotalScore);
    };

//initialize game 
function init(){
    console.log("reset");
    boxesClicked = [];
    playerOneMvs = [];
    playerTwoMvs = [];
    for(let i = 1; i <= 9; i++){
    document.getElementById(i.toString()).textContent = '';
    };
}; 