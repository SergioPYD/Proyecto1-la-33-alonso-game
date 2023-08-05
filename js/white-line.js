class WhiteLine {
  constructor() {
    this.whiteLineNode = document.createElement("img");

    this.whiteLineNode.src = "./images/white-line.png";

    gameBoxNode.append(this.whiteLineNode);

    this.x = gameBoxNode.offsetWidth;
    this.w = 120;
    this.h = 20;
    this.y = gameBoxNode.offsetHeight / 2 - this.h / 2;
   
    this.whiteLineNode.style.width = `${this.w}px`;
    this.whiteLineNode.style.height = `${this.h}px`;
    this.whiteLineNode.style.position = "absolute";
    this.whiteLineNode.style.top = `${this.y}px`;
    this.whiteLineNode.style.left = `${this.x}px`;
  }

  automaticMovement = () => {
    this.x -= 12;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.whiteLineNode.style.left = `${this.x}px`;
  };
}
