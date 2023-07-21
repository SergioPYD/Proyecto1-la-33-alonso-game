class Game {
  constructor() {
    this.alonso = new Alonso();

    this.enemyArr = [];
    this.powerUppArr = [];

    this.frames = 0;
    this.isGameOn = true;
  }

  rivalesAparecen = () => {
    if (this.enemyArr.length === 0 || this.frames % 400 === 0) {
      let randomNumberY = Math.floor(Math.random() * 400);
      let rivalArriba = new Rivales(randomNumberY, true);
      this.enemyArr.push(rivalArriba);
    } else if (this.frames % 1000 === 0) {
      let randomNumberY = Math.floor(Math.random() * 400);
      let rivalAbajo = new Rivales(randomNumberY, false);
      this.enemyArr.push(rivalAbajo);
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
    this.enemyArr.forEach(( rival)=> {
rival.automaticMovement()

    })





    requestAnimationFrame(this.gameLoop);
  };
}
