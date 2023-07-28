class Game {
  constructor(stageOne) {
    this.stageOne = stageOne;
    this.alonso = new Alonso();
    this.enemyArr = [];
    this.powerUppArr = [];
    this.redLineArr = [];
    this.whiteLineArr = [];
    this.raceLineArr = [];
    this.lvlUpArr = [];
    this.speedArr = [];

    this.isGameOn = true;
    this.lvlUpShow = false;
    this.moreSpeed = false;
    this.moreSpeedShow = false;

    this.speedCounter = 0;
    this.speedTime = 3000;
    this.itemDisapearTime = 3000;

    this.frames = 0;
    this.counter = -1;
    this.vida = 3;
    this.collitionSound = new Audio("sound/choque.mp3");
    this.collitionSound.volume = 0.05;
    this.lifeUpSound = new Audio("sound/life-sound.mp3");
    this.lifeUpSound.volume = 0.05;
    this.speedSound = new Audio("sound/sonic.mp3");
    this.speedSound.volume = 0.05;
    this.onvniSound = new Audio("sound/ovni.mp3")
    this.onvniSound.volume = 0.1;
  }

  // SE AÑADEN VIDAS AL INICIAR EL JUEGO
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

  // CONDICION PARA GANAR EL JUEGO Y PERDER EL JUEGO
  win = () => {
    // HAY QUE AÑADIR QUE SE ELIMINEN LOS OBSTACULOS PARA QUE NO SALGA EL GAME-OVER

    if (this.stageOne === true) {
      if (this.counter === 33) {
        this.isGameOn = false;
        winScreenNode.style.display = "flex";
        gameScreenNode.style.display = "none";
        gameBoxNode.innerHTML = "";
        vidaNode.innerHTML = "";
        musicCarrera.pause();
        musicWin.innerHTML = `<source src="./sound/win-sound.mp3" type="audio/mpeg">`;
        musicWin.currentTime = 0;
        musicWin.play()
        counterNode.innerHTML = 0;
      }
    }
  };
  gameOver = () => {
    if (this.stageOne === true) {
      this.isGameOn = false;
      gameOverNode.style.display = "flex";

      gameScreenNode.style.display = "none";
      gameBoxNode.innerHTML = "";
      counterNode.innerHTML = 0;
      musicCarrera.pause();
      musicLose.innerHTML = `<source src="./sound/lose-sound.mp3" type="audio/mpeg">`;
      musicLose.currentTime = 0;
      musicLose.play()
    } else if (this.stageOne === false) {
      this.isGameOn = false;
      gameOverHardcorNode.style.display = "flex";
      let randomImage =1 + Math.floor(Math.random() * 18)
      imagenRandomNode.innerHTML = `<img src="./images/game-over/${randomImage}.jpg" width="800" alt="game-over-meme" />`
      gameScreenNode.style.display = "none";
      gameBoxNode.innerHTML = "";
      counterNode.innerHTML = 0;
      musicCarrera.pause();
      musicLose.innerHTML = `<source src="./sound/lose-sound.mp3" type="audio/mpeg">`;
      musicLose.currentTime = 0;
      musicLose.play()
    }
  };

  // EL COCHE SE ACTUALIZA EN FUNCION A LAS CARRERAS GANADAS
  alonsoUpdate = () => {
    if (this.stageOne === true) {
      if (this.counter >= 14 && this.counter < 24) {
        this.alonso.carNode.src = "./images/alonso-2.png";
      } else if (this.counter >= 24) {
        this.alonso.carNode.src = "./images/alonso-3.png";
      }
    }
  };

  // ITEMS ALEATORIOS CON DISTINTAS FUNCIONES:

  // ITEM QUE TE SUMA 1 VIDA (CORAZON)
  randomItemLvlUp = () => {
    if (this.stageOne === true) {
      let randomNumberFrame = 1000 + Math.floor(Math.random() * 500);
      if (this.frames % randomNumberFrame === 0) {
        let randomX =
          300 + Math.floor(Math.random() * (gameBoxNode.offsetWidth / 2));
        let randomY = Math.floor(
          Math.random() * (gameBoxNode.offsetHeight - 50)
        );
        let newItem = new LvlUp(randomY, randomX);
        this.lvlUpArr.push(newItem);
        this.lvlUpShow = true;
        setTimeout(() => {
          this.lvlUpShow = false;
        }, this.itemDisapearTime);
      }
    }
  };
  lvlUpCollition = () => {
    this.lvlUpArr.forEach((cadaItem, index) => {
      if (
        this.alonso.x < cadaItem.x + cadaItem.w &&
        this.alonso.x + this.alonso.w > cadaItem.x &&
        this.alonso.y < cadaItem.y + cadaItem.h &&
        this.alonso.y + this.alonso.h > cadaItem.y
      ) {
        this.vida4 = document.createElement("img");
        this.vida4.src = "./images/vida4.png";
        this.vida4.width = "40";
        this.vida4.height = "80";
        vidaNode.append(this.vida4);
        this.vida++;
        cadaItem.itemNode.remove();
        this.lvlUpArr.splice(index, 1);
        this.lifeUpSound.play();
      }
    });
  };
  randomItemLvlUpDesaparece = () => {
    if (this.lvlUpShow === false && this.lvlUpArr.length > 0) {
      this.lvlUpArr[0].itemNode.remove();
      this.lvlUpArr.shift();
    }
  };

  // ITEM QUE TE AUMENTA LA MOVILIDAD (SONIC)
  randomItemSpeed = () => {
    if (this.stageOne === true) {
      let randomNumberFrame = 1000 + Math.floor(Math.random() * 500);
      if (this.frames % randomNumberFrame === 0) {
        let randomX =
          300 + Math.floor(Math.random() * (gameBoxNode.offsetWidth / 2));
        let randomY = Math.floor(
          Math.random() * (gameBoxNode.offsetHeight - 50)
        );
        let newItem = new Speed(randomY, randomX);
        this.speedArr.push(newItem);
        this.moreSpeedShow = true;
        setTimeout(() => {
          this.moreSpeedShow = false;
        }, this.itemDisapearTime);
      }
    }
  };
  randomItemSpeedUpDesaparece = () => {
    if (this.moreSpeedShow === false && this.speedArr.length > 0) {
      this.speedArr[0].itemSpeedNode.remove();
      this.speedArr.shift();
    }
  };
  SpeedCollition = () => {
    this.speedArr.forEach((cadaItem, index) => {
      if (
        this.alonso.x < cadaItem.x + cadaItem.w &&
        this.alonso.x + this.alonso.w > cadaItem.x &&
        this.alonso.y < cadaItem.y + cadaItem.h &&
        this.alonso.y + this.alonso.h > cadaItem.y
      ) {
        this.moreSpeed = true;
        cadaItem.itemSpeedNode.remove();
        this.speedCounter = 3;
        this.speedArr.splice(index, 1);
        this.speedSound.play();
        this.speedCountDown();
      }
    });
  };
  speedCountDown = () => {
    if (this.speedCounter > 0) {
      this.speedCounter--;
      speedCounterNode.innerHTML = `<h2>TIEMPO DE VELOCIDAD RESTANTE ${this.speedCounter} SEGUNDOS</h2>`;
      setTimeout(this.speedCountDown, 1000);
    } else {
      this.moreSpeed = false;
      speedCounterNode.innerHTML = "";
    }
  };

  // FUNCIONES RELACIONADAS CON LOS ENEMIGOS

  rivalesAparecen = () => {
    if (this.stageOne === true) {
      const speedStageOne = 4;
      const speedStageTwo = 8;
      const speedStageThree = 10;
      //  CONDICIONAL PARA LA APARICION DE LOS RIVALES EN PRIMER STAGE
      if (this.counter < 14) {
        if (this.enemyArr.length === 0 || this.frames % 500 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalArriba = new Rivales(randomNumberY, 1, speedStageOne);
          this.enemyArr.push(rivalArriba);
        } else if (this.frames % 300 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalAbajo = new Rivales(randomNumberY, 1, speedStageOne);
          this.enemyArr.push(rivalAbajo);
        } else if (this.frames % 800 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalAbajo = new Rivales(randomNumberY, 6, speedStageOne);
          this.enemyArr.push(rivalAbajo);
        }
      }
      //  CONDICIONAL PARA LA APARICION DE LOS RIVALES EN SEGUNDO STAGE
      else if (this.counter >= 14 && this.counter < 24) {
        if (this.enemyArr.length === 0 || this.frames % 500 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalArriba = new Rivales(randomNumberY, 3, speedStageTwo);
          this.enemyArr.push(rivalArriba);
        } else if (this.frames % 300 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalAbajo = new Rivales(randomNumberY, 3, speedStageTwo);
          this.enemyArr.push(rivalAbajo);
        } else if (this.frames % 800 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalAbajo = new Rivales(randomNumberY, 2, speedStageTwo);
          this.enemyArr.push(rivalAbajo);
        }
      }
      //  CONDICIONAL PARA LA APARICION DE LOS RIVALES EN TERCER STAGE
      else if (this.counter >= 24) {
        if (this.enemyArr.length === 0 || this.frames % 850 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalArriba = new Rivales(randomNumberY, 2, speedStageThree);
          this.enemyArr.push(rivalArriba);
        } else if (this.frames % 300 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalAbajo = new Rivales(randomNumberY, 4, speedStageThree);
          this.enemyArr.push(rivalAbajo);
        } else if (this.frames % 500 === 0) {
          let randomNumberY = Math.floor(Math.random() * 380);
          let rivalAbajo = new Rivales(randomNumberY, 5, speedStageThree);
          this.enemyArr.push(rivalAbajo);
        }
      }
    } else if (this.stageOne === false) {
      const speedStageHardcore = 10;
      //  CONDICIONAL PARA LA APARICION DE LOS RIVALES EN HARDCORE

      if (this.enemyArr.length === 0 || this.frames % 700 === 0 ) {
        let randomNumberY = Math.floor(Math.random() * 380);
        let rivalArriba = new Rivales(randomNumberY, 1, speedStageHardcore);
        this.enemyArr.push(rivalArriba);
      } else if (this.frames % 300 === 0) {
        let randomNumberY = Math.floor(Math.random() * 380);
        let rivalAbajo = new Rivales(randomNumberY, 3, speedStageHardcore);
        this.enemyArr.push(rivalAbajo);
      } else if (this.frames % 500 === 0) {
        let randomNumberY = Math.floor(Math.random() * 380);
        let rivalAbajo = new Rivales(randomNumberY, 4, speedStageHardcore);
        this.enemyArr.push(rivalAbajo);
      } else if (this.frames % 1300 === 0) {
        let randomNumberY = Math.floor(Math.random() * 380);
        let rivalAbajo = new Rivales(randomNumberY, 7, speedStageHardcore);
        this.enemyArr.push(rivalAbajo);
      } else if (this.frames % 2200 === 0) {
        let randomNumberY = Math.floor(Math.random() * 350);
        let rivalAbajo = new Rivales(randomNumberY, 8, speedStageHardcore);
        this.enemyArr.push(rivalAbajo);
        this.onvniSound.play()
      }
    }
  };
  rivalesDesaparecen = () => {
    if (this.enemyArr[0].x < -250) {
      this.enemyArr[0].rivalNode.remove();
      this.enemyArr.shift();
    }
  };
  // COLISION QUE RESTA VIDAS CON RIVAL (VIDAS = 0 GAME OVER)
  rivalCollition = () => {
    this.enemyArr.forEach((cadaRival, index) => {
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
          cadaRival.rivalNode.remove();
          this.enemyArr.splice(index, 1);
          this.vida--;
          this.sonidoColision();
        }
      }
    });
  };
  sonidoColision = () => {
    this.collitionSound.play();
  };

  // ELEMENTOS DECORATIVOS EN MOVIMINTO
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
    if (this.stageOne === true) {
      if (this.counter > -1 && this.counter < 32) {
        if (this.raceLineArr[0].x < -60) {
          this.raceLineArr[0].raceLineNode.remove();
          this.raceLineArr.shift();

          this.counter++;
          counterNode.innerText = this.counter;
        }
      } else if (this.counter === -1 || this.counter === 32) {
        if (this.raceLineArr[0].x < -200) {
          this.raceLineArr[0].raceLineNode.remove();
          this.raceLineArr.shift();

          this.counter++;
          counterNode.innerHTML = `${this.counter}`;
        }
      }
    } else if (this.stageOne === false) {
      if (this.counter > -1) {
        if (this.raceLineArr[0].x < -60) {
          this.raceLineArr[0].raceLineNode.remove();
          this.raceLineArr.shift();

          this.counter++;
          counterNode.innerText = this.counter;
        }
      } else if (this.counter === -1) {
        if (this.raceLineArr[0].x < -200) {
          this.raceLineArr[0].raceLineNode.remove();
          this.raceLineArr.shift();

          this.counter++;
          counterNode.innerHTML = `${this.counter}`;
        }
      }
    }
  };
  stageOnWeb = () => {
    if (this.stageOne === true) {
      if (this.counter >= -1 && this.counter < 14) {
        stageNode.innerHTML = `<h2> STAGE 1 </h2>`;
      } else if (this.counter >= 14 && this.counter < 24) {
        stageNode.innerHTML = `<h2> STAGE 2 </h2>`;
      } else if (this.counter >= 24 && this.counter < 33) {
        stageNode.innerHTML = `<h2> STAGE 3 </h2>`;
      }
    } else if (this.stageOne === false) {
      stageNode.innerHTML = `<h2> HARDCOREMODE </h2>`;
    }
  };
  //  GAMELOOP

  gameLoop = () => {
    this.frames++;
    this.alonso.movimientoContinuo();
    this.randomItemLvlUp();
    this.randomItemLvlUpDesaparece();
    this.lvlUpCollition();
    this.SpeedCollition();

    this.randomItemSpeedUpDesaparece();
    this.randomItemSpeed();
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
    this.rivalCollition();
    this.win();
    this.stageOnWeb();

    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
