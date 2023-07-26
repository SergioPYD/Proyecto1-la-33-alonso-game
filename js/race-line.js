class RaceLine {
  constructor() {
    this.raceLineNode = document.createElement("img");
    if (gameObj.counter > -1 && gameObj.counter < 32) {
      this.raceLineNode.src = "./images/race-line.png";
      this.x = gameBoxNode.offsetWidth;
      this.y = 0;
      this.w = 60;
      this.h = gameBoxNode.offsetHeight;
    } else if (gameObj.counter === -1) {
      this.raceLineNode.src = "./images/start-line.png";
      this.x = gameBoxNode.offsetWidth;
      this.y = 0;
      this.w = 200;
      this.h = gameBoxNode.offsetHeight;
    } else if (gameObj.counter === 32) {
      this.raceLineNode.src = "./images/start-line.png";
      this.x = gameBoxNode.offsetWidth;
      this.y = 0;
      this.w = 200;
      this.h = gameBoxNode.offsetHeight;
    }
    gameBoxNode.append(this.raceLineNode);

    this.raceLineNode.style.width = `${this.w}px`;
    this.raceLineNode.style.height = `${this.h}px`;
    this.raceLineNode.style.position = "absolute";
    this.raceLineNode.style.top = `${this.y}px`;
    this.raceLineNode.style.left = `${this.x}px`;
    this.raceLineNode.style.zIndex = "1";
  }

  automaticMovement = () => {
    this.x -= 6;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.raceLineNode.style.left = `${this.x}px`;
  };
}
