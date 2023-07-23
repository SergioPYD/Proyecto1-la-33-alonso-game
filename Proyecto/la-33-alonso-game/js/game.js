class Game {
  constructor() {
    this.alonso = new Alonso();

    this.enemyArr = [];
    this.powerUppArr = [];
    this.redLineArr = [];
    this.whiteLineArr = [];
    this.raceLineArr = [];
    this.frames = 0;
    this.isGameOn = true;
  }

  gameOverCollition = () => {
    this.enemyArr.forEach((cadaRival) => {
      if (
        this.alonso.x < cadaRival.x + cadaRival.w &&
        this.alonso.x + this.alonso.w > cadaRival.x &&
        this.alonso.y < cadaRival.y + cadaRival.h &&
        this.alonso.y + this.alonso.h > cadaRival.y
      ) {
        this.gameOver();
      }
    });
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverNode.style.display = "flex";
  };

  rivalesAparecen = () => {
    if (this.enemyArr.length === 0 || this.frames % 300 === 0) {
      let randomNumberY = Math.floor(Math.random() * 400);
      let rivalArriba = new Rivales(randomNumberY, true);
      this.enemyArr.push(rivalArriba);
    } else if (this.frames % 500 === 0) {
      let randomNumberY = Math.floor(Math.random() * 400);
      let rivalAbajo = new Rivales(randomNumberY, false);
      this.enemyArr.push(rivalAbajo);
    }
  };
  rivalesDesaparecen = () => {
    if (this.enemyArr[0].x < -250) {
      this.enemyArr[0].rivalNode.remove();
      this.enemyArr.shift();
    }
  };

  redLineAparecen = () => {
    if (this.redLineArr.length === 0 || this.frames % 60 === 0) {
      let redLineArriba = new RedLine(0, true);
      this.redLineArr.push(redLineArriba);
      let redLineAbajo = new RedLine(gameBoxNode.offsetHeight - 23, false);
      this.redLineArr.push(redLineAbajo);
    }
  };
  redLineDesaparecen = () => {
    if (this.redLineArr[0].x < -70) {
      this.redLineArr[0].redLineNode.remove();
      this.redLineArr.shift();
    }
  };

  whiteLineAparecen = () => {
    if (this.whiteLineArr.length === 0 || this.frames % 80 === 0) {
      let whiteLine = new WhiteLine();
      this.whiteLineArr.push(whiteLine);
    }
  };
  whiteLineDesaparecen = () => {
    if (this.whiteLineArr[0].x < -120) {
      this.whiteLineArr[0].whiteLineNode.remove();
      this.whiteLineArr.shift();
    }
  };
  raceLineAparecen = () => {
    if (this.raceLineArr.length === 0) {
      let raceLine = new RaceLine();
      this.raceLineArr.push(raceLine);
    }
  };
  raceLineDesaparecen = () => {
    if (this.raceLineArr[0].x < -2000) {
      this.raceLineArr[0].raceLineNode.remove();
      this.raceLineArr.shift();
    }
  };

  automaticMovement = () => {
    this.x -= 2;
    this.positionUpdate();
  };

  gameLoop = () => {
    this.frames++;
    this.alonso.movimientoContinuo();
    this.rivalesAparecen();
    this.enemyArr.forEach((rival) => {
      rival.automaticMovement();
    });
    this.rivalesDesaparecen();
    this.redLineAparecen();
    this.redLineArr.forEach((redLine) => {
      redLine.automaticMovement();
    });
    this.redLineDesaparecen();
    this.whiteLineAparecen();
    this.whiteLineArr.forEach((whiteLine) => {
      whiteLine.automaticMovement();
    });
    this.whiteLineDesaparecen();
    this.raceLineAparecen();
    this.raceLineArr.forEach((raceLine) => {
      raceLine.automaticMovement();
    });
    this.raceLineDesaparecen();
    this.gameOverCollition();

    if(this.isGameOn === true){
      requestAnimationFrame(this.gameLoop);
    }
   
  };
}
