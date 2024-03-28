let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#Reset-btn");

let newGamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let element = document.getElementsByClassName("box");


let turnO = true; //playerX,playerO
let count =0;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () =>{
    turnO =true;
    enablebox();
    count =0;
    msgcontainer.classList.add("hide");
}

const disablebox = () =>{
    for(let box of boxes){
    box.disabled = true;
    }
}

const enablebox = () =>{
    for(let box of boxes){
    box.disabled = false;
    box.innerText =""; 
    }
}



const gamedraw = () => {
    
        msg.innerText ="Game draw";
        msgcontainer.classList.remove("hide");
        disablebox();
    }


boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.classList.add("o");
            box.classList.remove("x");
           
            
        }
        else{
            box.innerText ="X";
            turnO = true;
            box.classList.add("x");
            box.classList.remove("o");
         
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();
        if(count === 9 && !isWinner){
            gamedraw();
        }

    });
});

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
};

const checkWinner = () => {
    for (let pattern of winpatterns){
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;

            if(pos1val !="" && pos2val!="" && pos3val!=""){
                if(pos1val === pos2val && pos2val === pos3val){
                    showWinner(pos1val);
                }
            }
    }
}

newGamebtn.addEventListener ("click",() => {
    resetgame();
});

reset.addEventListener  ("click",() => {
    resetgame();
});