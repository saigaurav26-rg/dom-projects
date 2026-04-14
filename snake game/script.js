let board = document.querySelector(".board");
let startbutton = document.querySelector(".start-button")
let model = document.querySelector(".model")
let startgamemodel = document.querySelector(".start-game")
let gameovermodel = document.querySelector(".game-over")
let restartbutton = document.querySelector(".restart-button")

let highscoreelement = document.querySelector("#high-score")
let scoreelement = document.querySelector("#score")
let timerelement = document.querySelector("#time")


const blockwidth = 50;
const blockheight = 50;

let highscore = localStorage.getItem("highscore") || 0;
let score = 0;
let time = `00-00`;



const cols = Math.floor(board.clientWidth /blockwidth);
const rows = Math.floor(board.clientHeight/ blockheight);
let timerintervelId = null;
let intervelId = null;
let food = {x:Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)}

let blocks = [];
let snake = [
    {
        x:1 , y:3
    },
    /* {
        x:1 , y:4
    },
     {
        x:1 , y:5
    }*/
]

let direction = "right";

for(row=0; row<rows; row++){
   for(col=0 ; col<cols ; col++){
    let chita = document.createElement("div");
    chita.classList.add("block");
    board.appendChild(chita);
   // chita.innerText = `${row}-${col}`;
    blocks[`${row}-${col}`] = chita;
   }
}

function render(){
     let head = null;

     blocks[`${food.x}-${food.y}`].classList.add("food");

    if(direction == "left"){
        head= {x: snake[0].x, y: snake[0].y - 1};
    }else if(direction ==="right"){
         head= {x: snake[0].x, y: snake[0].y + 1};
    }else if(direction ==="down"){
         head= {x: snake[0].x+1, y: snake[0].y };
    }else if(direction ==="up"){
          head= {x: snake[0].x-1, y: snake[0].y };
    }
    
     snake.forEach(function(segment){
       ( blocks[`${segment.x}-${segment.y}`]).classList.remove("fill");
    });

    snake.unshift(head); //unshift()  add element at the front of an array.
   snake.pop();
///wall collision logic
   if(head.x<0 || head.x>=rows || head.y<0 || head.y>=cols){
        clearInterval(intervelId);
        model.style.display ="flex";
        startgamemodel.style.display ="none";
        gameovermodel.style.display="flex";
        return
    }

//////food consume logic
    if(head.x==food.x && head.y== food.y){
         blocks[`${food.x}-${food.y}`].classList.remove("food");
         food = {x:Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)}
        blocks[`${food.x}-${food.y}`].classList.add("food");
        snake.unshift(head)

        score +=10;
        scoreelement.innerHTML = score;
        if(score > highscore){
            highscore = score;
            localStorage.setItem("highscore",highscore.toString())
        }

    }

    //came from setinterval
    ////////////////////////////////////////////////////////////////////////

    snake.forEach(function(segment){
     (blocks[`${segment.x}-${segment.y}`]).classList.add("fill")   
    })
}

/*intervelId = setInterval(function(){
    render();
},300)*/


startbutton.addEventListener("click",function(){
    model.style.display = "none";
    intervelId = setInterval(function(){
        render();
    },300)

    timerintervelId = setInterval(function(){
        let [min,sec] = time.split("-").map(Number);
        if(sec==59){
            min+=1;
            sec=0
        }else{
            sec+=1
        }
        time =`${min}-${sec}`
        timerelement.innerHTML=time;

    },1000)
})


restartbutton.addEventListener("click",restartGame)

function restartGame(){

     blocks[`${food.x}-${food.y}`].classList.remove("food");

      snake.forEach(segment => {
        let block = blocks[`${segment.x}-${segment.y}`];
            if (block) {
                block.classList.remove("fill");
            }
        })
        score = 0;
        time =`00-00`;

        scoreelement.innerHTML=score;
        timerelement.innerHTML=time;
        highscoreelement.innerHTML = highscore;
       
    model.style.display="none";
    
    
    direction = "down";
    snake = [{  x:1 , y:3}];
     food = {x:Math.floor(Math.random()*rows), y:Math.floor(Math.random()*cols)};
     intervelId = setInterval(function(){
        render();
    },300)
}




addEventListener("keydown",function(event){
    if(event.key=="ArrowUp"){
        direction="up";
    }else if(event.key=="ArrowRight"){
        direction="right";
    }else if(event.key=="ArrowLeft"){
        direction="left";
    }else if(event.key=="ArrowDown"){
        direction="down";
    }
})
    