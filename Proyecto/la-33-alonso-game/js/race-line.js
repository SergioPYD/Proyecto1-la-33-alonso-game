class RaceLine {
    constructor() {
      this.raceLineNode = document.createElement("img");
  
      this.raceLineNode.src = "./images/race-line.png";
  
      gameBoxNode.append(this.raceLineNode);
  
      this.x = gameBoxNode.offsetWidth;
      this.y = 0;
      this.w = 60;
      this.h = gameBoxNode.offsetHeight;
  
      this.raceLineNode.style.width = `${this.w}px`;
      this.raceLineNode.style.height = `${this.h}px`;
      this.raceLineNode.style.position = "absolute";
      this.raceLineNode.style.top = `${this.y}px`;
      this.raceLineNode.style.left = `${this.x}px`;
    }
  
    automaticMovement = () => {
      this.x -= 6;
      this.positionUpdate();
    };
  
    positionUpdate = () => {
      this.raceLineNode.style.left = `${this.x}px`;
    };
  }
  