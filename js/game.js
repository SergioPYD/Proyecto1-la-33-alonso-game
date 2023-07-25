class Game {
  constructor() {
    this.alonso = new Alonso();

    this.enemyArr = [];
    this.powerUppArr = [];
    this.redLineArr = [];
    this.whiteLineArr = [];
    this.raceLineArr = [];
    this.itemArr = [];

    this.isGameOn = true;
    this.lvlUpShow = false;

    this.lvlUpTime = 3000;
    this.frames = 0;
    this.counter = -1;
    this.vida = 3;

    // Añade contador de vidas
  }

  vidasLayout = () => {
    this.vida1 = document.createElement("img");
    this.vida1.src = "./images/vida1.png";
    this.vida1.width = "40";
    this.vida1.height = "80";
    this.vida2 = document.createElement("img");
    this.vida2.src = "./images/vida2.png";
    this.vida2.width = "40";
    this.vida2.height = "80";
    this.vida3 = document.createElement("img");
    this.vida3.src = "./images/vida3.png";
    this.vida3.width = "40";
    this.vida3.height = "80";

    vidaNode.append(this.vida1);
    vidaNode.append(this.vida2);
    vidaNode.append(this.vida3);
  };

  gameOverCollition = () => {
    this.enemyArr.forEach((cadaRival) => {
      if (
        this.alonso.x < cadaRival.x + cadaRival.w &&
        this.alonso.x + this.alonso.w > cadaRival.x &&
        this.alonso.y < cadaRival.y + cadaRival.h &&
        this.alonso.y + this.alonso.h > cadaRival.y
      ) {
        if (this.vida <= 0) {
          this.gameOver();
        } else {
          vidaNode.removeChild(vidaNode.lastChild);

          this.enemyArr[0].rivalNode.remove();
          this.enemyArr.shift(0, this.enemyArr.length);
          this.vida--;
        }
      }
    });
  };

  alonsoUpdate = () => {
    if (this.counter >= 14 && this.counter < 24) {
      this.alonso.carNode.src = "./images/alonso-2.png";
    } else if (this.counter >= 24) {
      this.alonso.carNode.src = "./images/alonso-3.png";
    }
  };

  win = () => {
    // HAY QUE AÑADIR QUE SE ELIMINEN LOS OBSTACULOS PARA QUE NO SALGA EL GAME-OVER
    if (this.counter === 33) {
      gameScreenNode.style.display = "none";
      winScreenNode.style.display = "flex";
      gameScreenNode.innerHTML = "";
      gameOverNode.innerHTML = "";
      musicCarrera.remove();
      musicWin.innerHTML = `<source src="./sound/win-sound.mp3" type="audio/mpeg">`;
    }
  };

  gameOver = () => {
    this.isGameOn = false;
    gameScreenNode.style.display = "none";
    gameOverNode.style.display = "flex";
    gameScreenNode.innerHTML = "";
    musicCarrera.remove();
    musicLose.innerHTML = `<source src="./sound/lose-sound.mp3" type="audio/mpeg">`;
  };

  randomItemAparece = () => {
    let randomNumberFrame = Math.floor(Math.random() * (2000 - 1500) + 1500);
    if (this.frames % randomNumberFrame === 0) {
      let randomX =
        300 + Math.floor(Math.random() * (gameBoxNode.offsetWidth / 2));
      let randomY = Math.floor(Math.random() * (gameBoxNode.offsetHeight - 50));
      let newItem = new Items(randomY, randomX);
      this.itemArr.push(newItem);
      this.lvlUpShow = true;
      setTimeout(() => {
        this.lvlUpShow = false;
      }, this.lvlUpTime);
    }
  };

  randomItemDesaparece = () => {
    if (this.lvlUpShow === false && this.itemArr.length > 0) {
      
      this.itemArr[0].itemNode.remove();
      this.itemArr.shift();
    }
  };

  lvlUp = () => {
    this.itemArr.forEach((cadaItem) => {
      if (
        this.alonso.x < cadaItem.x + cadaItem.w &&
        this.alonso.x + this.alonso.w > cadaItem.x &&
        this.alonso.y < cadaItem.y + cadaItem.h &&
        this.alonso.y + this.alonso.h > cadaItem.y
      ) {
        this.vida4 = document.createElement("img");
        this.vida4.src = "./images/vida4.png";
        this.vida4.width = "35";
        vidaNode.append(this.vida4);
        this.vida++;
        this.itemArr[0].itemNode.remove();
        this.itemArr.shift();
      }
    });
  };

  rivalesAparecen = () => {
    const speedStageOne = 4;
    const speedStageTwo = 8;
    const speedStageThree = 10;
    //  CONDICIONAL PARA LA APARICION DE LOS RIVALES EN PRIMER STAGE
    if (this.counter < 14) {
      if (this.enemyArr.length === 0 || this.frames % 300 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalArriba = new Rivales(randomNumberY, 1, speedStageOne);
        this.enemyArr.push(rivalArriba);
      } else if (this.frames % 500 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalAbajo = new Rivales(randomNumberY, 1, speedStageOne);
        this.enemyArr.push(rivalAbajo);
      } else if (this.frames % 800 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalAbajo = new Rivales(randomNumberY, 6, speedStageOne);
        this.enemyArr.push(rivalAbajo);
      }
    }
    //  CONDICIONAL PARA LA APARICION DE LOS RIVALES EN SEGUNDO STAGE
    else if (this.counter >= 14 && this.counter < 24) {
      if (this.enemyArr.length === 0 || this.frames % 300 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalArriba = new Rivales(randomNumberY, 3, speedStageTwo);
        this.enemyArr.push(rivalArriba);
      } else if (this.frames % 500 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalAbajo = new Rivales(randomNumberY, 3, speedStageTwo);
        this.enemyArr.push(rivalAbajo);
      } else if (this.frames % 800 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalAbajo = new Rivales(randomNumberY, 2, speedStageTwo);
        this.enemyArr.push(rivalAbajo);
      }
    }
    //  CONDICIONAL PARA LA APARICION DE LOS RIVALES EN TERCER STAGE
    else if (this.counter >= 24) {
      if (this.enemyArr.length === 0 || this.frames % 300 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalArriba = new Rivales(randomNumberY, 4, speedStageThree);
        this.enemyArr.push(rivalArriba);
      } else if (this.frames % 700 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalAbajo = new Rivales(randomNumberY, 4, speedStageThree);
        this.enemyArr.push(rivalAbajo);
      } else if (this.frames % 500 === 0) {
        let randomNumberY = Math.floor(Math.random() * 400);
        let rivalAbajo = new Rivales(randomNumberY, 5, speedStageThree);
        this.enemyArr.push(rivalAbajo);
      }
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
    if (this.raceLineArr[0].x < -60) {
      this.raceLineArr[0].raceLineNode.remove();
      this.raceLineArr.shift();
      // CONTADOR DE CARRERAS (BONUS:AJUSTAR UN POCO MÁS)
      this.counter++;
      counterNode.innerText = this.counter;
    }
  };

  automaticMovement = () => {
    this.x -= 2;
    this.positionUpdate();
  };

  gameLoop = () => {
    this.frames++;
    this.alonso.movimientoContinuo();
    this.randomItemAparece();
    this.randomItemDesaparece();
    this.lvlUp();
    this.alonsoUpdate();
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
    this.win();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
