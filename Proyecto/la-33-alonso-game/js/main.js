const playGameBtnNode = document.querySelector("#start-btn");
const instruccionesBtnNode = document.querySelector("#instr-btn");
const inicioScreenNode = document.querySelector("#inicio");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box")
const instruccionesScreenNode = document.querySelector("#instrucciones");
const inicioBtnInstructionsNode = document.querySelector("#inicio-instr-btn");
const gameOverNode = document.querySelector("#gameover-screen")
const startAgainNode = document.querySelector("#start-again-btn")
const inicioBtnNode =document.querySelector("#inicio-btn")
const counterNode =document.querySelector("#counter")
const musicInicio =document.querySelector("#music")
let gameObj = null;

const vidaNode =document.querySelector("#vidas")

// FUNCIONES INICIALES

function startGame() {
  inicioScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  musicInicio.remove()
 

  gameObj = new Game();
  console.log(gameObj);
  gameObj.gameLoop();
 
 


}

function instructions() {
  inicioScreenNode.style.display = "none";
  instruccionesScreenNode.style.display = "flex";
}

function instruccionesToInicio() {
  inicioScreenNode.style.display = "flex";
  instruccionesScreenNode.style.display = "none";
}

function gameOverToInicio () {
  inicioScreenNode.style.display = "flex";
  gameOverNode.style.display = "none";
  location.reload()
}



// ADD EVENT LISTENERS

playGameBtnNode.addEventListener("click", startGame);
instruccionesBtnNode.addEventListener("click", instructions);
inicioBtnInstructionsNode.addEventListener("click", instruccionesToInicio);
inicioBtnNode.addEventListener("click", gameOverToInicio);

window.addEventListener("keydown", (event) => {
  

  if (gameObj.isGameOn === true) {
    if (event.key === "ArrowRight" && gameObj.alonso.x  <= 800) { 
      gameObj.alonso.x += 50;
    } else if (event.key === "ArrowLeft" && gameObj.alonso.x  >= 0) {
      gameObj.alonso.x -= 50;
    } else if (event.key === "ArrowDown" && gameObj.alonso.y  <= 300) {
      gameObj.alonso.y += 50;
    } else if (event.key === "ArrowUp" && gameObj.alonso.y  >= 30) {
      gameObj.alonso.y -= 50;
    }
  }
});
