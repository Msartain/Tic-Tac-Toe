
/*----------constants--------*/
const playerOne = "x" ;
const playerTwo = "o" ;




/*---------app's state (variables)-------*/

let playerOneMvs, playerTwoMvs, totalMvs



/*-----cached element references--------*/
document.getElementById('board').addEventListener('click', handleBoxClick);

// document.getElementById('reset').addEventListener('click' init);
let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');


/*--------event listeners-------*/





/*----------functions-----------*/
init();

function handleBoxClick(evt){
    totalMvs ++;
    if(totalMvs % 2 !== 0){
        evt.target.textContent = playerOne;
      } else {
        evt.target.textContent = playerTwo;
        console.log(totalMvs);
    };
};
function init(){
    totalMvs = 0 ;
}

