const playGameBtnNode = document.querySelector("#start-btn");
const instruccionesBtnNode = document.querySelector("#instr-btn");
const inicioScreenNode = document.querySelector("#inicio");
const gameScreenNode = document.querySelector("#game-screen");
const gameBoxNode = document.querySelector("#game-box");
const instruccionesScreenNode = document.querySelector("#instrucciones");
const inicioBtnInstructionsNode = document.querySelector("#inicio-instr-btn");
const tryAgainBtnNode = document.querySelector("#tryAgain");
const tryAgainHardcoreBtnNode =document.querySelector("#tryAgainHardcore")
const gameOvertoInicioHardcoreBtnNode = document.querySelector("#inicio-btn-hardcore")
const gameOverNode = document.querySelector("#gameover-screen");
const gameOverHardcorNode = document.querySelector("#gameover-screen-hardcore")
const startAgainNode = document.querySelector("#start-again-btn");
const inicioBtnNode = document.querySelector("#inicio-btn");
const counterNode = document.querySelector("#counter");
const musicInicio = document.querySelector("#music1");
musicInicio.volume = 0.1;
const musicCarrera = document.querySelector("#music2");
musicCarrera.volume = 0.1;
const musicWin = document.querySelector("#music3");
musicWin.volume = 0.1;
const musicLose = document.querySelector("#music4");
musicLose.volume = 0.1;
const musicCrash = document.querySelector("#music5");
musicCrash.volume = 0.1;
const winScreenNode = document.querySelector("#win");
const winToInicioBtnNode = document.querySelector("#win-to-inicio");
const speedCounterNode = document.querySelector("#speed");
const stageNode = document.querySelector("#stage");
const topViewNode = document.querySelector("#top-view");
const hardcoreNode =document.querySelector("#hardcore")

let gameObj = null;

musicInicio.innerHTML = `<source src="./sound/intro-music.mp3" type="audio/mpeg">`;
const vidaNode = document.querySelector("#vidas");
// FUNCIONES INICIALES

function startGame() {
  inicioScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  musicCarrera.innerHTML = `<source src="./sound/audio-carrera.mp3" type="audio/mpeg">`;
  musicInicio.pause();
  musicCarrera.currentTime= 0;
  musicCarrera.play()

  gameObj = new Game(true);

  gameObj.vidasLayout();
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

function gameOvertoTryAgain() {
  gameOverNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  musicLose.pause()
  musicCarrera.currentTime = 0;
  musicCarrera.play()
  gameObj = new Game(true);
  gameObj.vidasLayout();
  gameObj.gameLoop();
}
function gameOverHardcoretoTryAgain() {
  gameOverHardcorNode.style.display = "none";
  inicioScreenNode.style.display = "none"
  gameScreenNode.style.display = "flex";
  musicLose.pause()
  musicCarrera.currentTime = 0;
  musicCarrera.play()
  gameObj = new Game(false);
  gameObj.vidasLayout();
  gameObj.gameLoop();
}


function gameOverToInicio() {
  inicioScreenNode.style.display = "flex";
  gameOverNode.style.display = "none";
  musicLose.pause()
  musicInicio.currentTime = 0;
  musicInicio.play()
}
function gameOverHarcoreToInicio() {
  inicioScreenNode.style.display = "flex";
  gameOverHardcorNode.style.display = "none";
  musicLose.pause()
  musicInicio.currentTime = 0;
  musicInicio.play()
}

function winToInicio() {
  winScreenNode.style.display = "none";
  inicioScreenNode.style.display = "flex";
  musicWin.pause()
  musicInicio.currentTime = 0;
  musicInicio.play()
  

}
function winToHardcore() {
  winScreenNode.style.display = "none";
  gameScreenNode.style.display = "flex";
  musicWin.pause()
  musicCarrera.currentTime = 0;
  musicCarrera.play()
  gameObj = new Game(false);
  gameObj.vidasLayout();
  gameObj.gameLoop();
}


// ADD EVENT LISTENERS

playGameBtnNode.addEventListener("click", startGame);
instruccionesBtnNode.addEventListener("click", instructions);
inicioBtnInstructionsNode.addEventListener("click", instruccionesToInicio);
inicioBtnNode.addEventListener("click", gameOverToInicio);
winToInicioBtnNode.addEventListener("click", winToInicio);
tryAgainBtnNode.addEventListener("click", gameOvertoTryAgain);
tryAgainHardcoreBtnNode.addEventListener("click", gameOverHardcoretoTryAgain);
hardcoreNode.addEventListener("click",winToHardcore )
gameOvertoInicioHardcoreBtnNode.addEventListener("click",gameOverHarcoreToInicio)
// MOVIMIENTOS DEL COCHE PRINCIPAL
window.addEventListener("keydown", (event) => {
  if (gameObj.isGameOn === true && gameObj.moreSpeed === false) {
    const speed = 50;
    const diagonalSpeed = 75;

    if (event.key === "ArrowRight" && gameObj.alonso.x <= 800) {
      gameObj.alonso.x += speed;
    } else if (event.key === "ArrowLeft" && gameObj.alonso.x >= 0) {
      gameObj.alonso.x -= speed;
    } else if (event.key === "ArrowDown" && gameObj.alonso.y <= 300) {
      gameObj.alonso.y += speed;
    } else if (event.key === "ArrowUp" && gameObj.alonso.y >= 30) {
      gameObj.alonso.y -= speed;
    }

    // MOVIMIENTO DIAGONAL
    if (
      event.key === "ArrowUp" &&
      event.key === "ArrowRight" &&
      gameObj.alonso.y >= 30 &&
      gameObj.alonso.x <= 800
    ) {
      gameObj.alonso.y -= diagonalSpeed;
      gameObj.alonso.x += diagonalSpeed;
    } else if (
      event.key === "ArrowUp" &&
      event.key === "ArrowLeft" &&
      gameObj.alonso.y >= 30 &&
      gameObj.alonso.x >= 0
    ) {
      gameObj.alonso.y -= diagonalSpeed;
      gameObj.alonso.x -= diagonalSpeed;
    } else if (
      event.key === "ArrowDown" &&
      event.key === "ArrowRight" &&
      gameObj.alonso.y <= 300 &&
      gameObj.alonso.x <= 800
    ) {
      gameObj.alonso.y += diagonalSpeed;
      gameObj.alonso.x += diagonalSpeed;
    } else if (
      event.key === "ArrowDown" &&
      event.key === "ArrowLeft" &&
      gameObj.alonso.y <= 300 &&
      gameObj.alonso.x >= 0
    ) {
      gameObj.alonso.y += diagonalSpeed;
      gameObj.alonso.x -= diagonalSpeed;
    }
  } else if (gameObj.isGameOn === true && gameObj.moreSpeed === true) {
    const upSpeed = 100;
    const diagonalSpeed = 100;

    if (event.key === "ArrowRight" && gameObj.alonso.x <= 800) {
      gameObj.alonso.x += upSpeed;
    } else if (event.key === "ArrowLeft" && gameObj.alonso.x >= 0) {
      gameObj.alonso.x -= upSpeed;
    } else if (event.key === "ArrowDown" && gameObj.alonso.y <= 300) {
      gameObj.alonso.y += upSpeed;
    } else if (event.key === "ArrowUp" && gameObj.alonso.y >= 30) {
      gameObj.alonso.y -= upSpeed;
    }

    // MOVIMIENTO DIAGONAL
    if (
      event.key === "ArrowUp" &&
      event.key === "ArrowRight" &&
      gameObj.alonso.y >= 30 &&
      gameObj.alonso.x <= 800
    ) {
      gameObj.alonso.y -= diagonalSpeed;
      gameObj.alonso.x += diagonalSpeed;
    } else if (
      event.key === "ArrowUp" &&
      event.key === "ArrowLeft" &&
      gameObj.alonso.y >= 30 &&
      gameObj.alonso.x >= 0
    ) {
      gameObj.alonso.y -= diagonalSpeed;
      gameObj.alonso.x -= diagonalSpeed;
    } else if (
      event.key === "ArrowDown" &&
      event.key === "ArrowRight" &&
      gameObj.alonso.y <= 300 &&
      gameObj.alonso.x <= 800
    ) {
      gameObj.alonso.y += diagonalSpeed;
      gameObj.alonso.x += diagonalSpeed;
    } else if (
      event.key === "ArrowDown" &&
      event.key === "ArrowLeft" &&
      gameObj.alonso.y <= 300 &&
      gameObj.alonso.x >= 0
    ) {
      gameObj.alonso.y += diagonalSpeed;
      gameObj.alonso.x -= diagonalSpeed;
    }
  }
});
