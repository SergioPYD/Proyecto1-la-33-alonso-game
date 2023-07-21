const playGameBtnNode = document.querySelector("#start-btn");
const instruccionesBtnNode = document.querySelector("#instr-btn");
const inicioScreenNode = document.querySelector("#inicio");
const gameScreenNode = document.querySelector("#game-screen");
const instruccionesScreenNode = document.querySelector("#instrucciones");
const inicioBtnInstructionsNode = document.querySelector("#inicio-instr-btn");

let gameObj = null;

// FUNCIONES INICIALES

function startGame() {
  inicioScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";

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

// ADD EVENT LISTENERS

playGameBtnNode.addEventListener("click", startGame);
instruccionesBtnNode.addEventListener("click", instructions);
inicioBtnInstructionsNode.addEventListener("click", instruccionesToInicio);
window.addEventListener("keydown", (event) => {
  console.log(event.key);

  if (gameObj.isGameOn === true) {
    if (event.key === "ArrowRight" && gameObj.alonso.x  <= 1200) { 
      gameObj.alonso.x += 50;
    } else if (event.key === "ArrowLeft" && gameObj.alonso.x  >= 400) {
      gameObj.alonso.x -= 50;
    } else if (event.key === "ArrowDown" && gameObj.alonso.y  <= 400) {
      gameObj.alonso.y += 50;
    } else if (event.key === "ArrowUp" && gameObj.alonso.y  >= 190) {
      gameObj.alonso.y -= 50;
    }
  }
});
