
/*----------constants--------*/
const playerOne = "x" ;
const playerTwo = "o" ;




/*---------app's state (variables)-------*/

let playerOneMvs, playerTwoMvs, totalMvs



/*-----cached element references--------*/
document.getElementById('board').addEventListener('click', handleBoxClick);

// document.getElementById('reset').addEventListener('click' init);
let box1 = document.getElementById('box1')


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

