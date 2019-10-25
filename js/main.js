console.log("ready to go");

/*----------constants--------*/
const playerOne = "x" ;
const playerTwo = "o" ;




/*---------app's state (variables)-------*/

let playerOneMvs, playerTwoMvs, totalMvs



/*-----cached element references--------*/
document.getElementById('board').addEventListener('click', handleBoxClick);

// document.getElementById('reset').addEventListener('click' init);



/*--------event listeners-------*/





/*----------functions-----------*/


function handleBoxClick(evt){
    evt.target.textContent = playerOne;
    console.log(evt.target.textContent);
}

function init(evt){

};