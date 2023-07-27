class Rivales {
  constructor(posY, cocheArriba, speed) {
    this.rivalNode = document.createElement("img");
    if (cocheArriba === 1) {
      this.rivalNode.src = "./images/enemy1.png";
    } else if (cocheArriba === 2) {
      this.rivalNode.src = "./images/enemy2.png";
    } else if (cocheArriba === 3) {
      this.rivalNode.src = "./images/enemy3.png";
    } else if (cocheArriba === 4) {
      this.rivalNode.src = "./images/enemy4.png";
    } else if (cocheArriba === 5) {
      this.rivalNode.src = "./images/enemy5.png";
    } else if (cocheArriba === 6) {
      this.rivalNode.src = "./images/enemy6.png";
    } else if (cocheArriba === 7) {
      this.rivalNode.src = "./images/enemy7.png";
    } else if (cocheArriba === 8) {
      this.rivalNode.src = "./images/enemy8.png";
    }

    gameBoxNode.append(this.rivalNode);
    if (cocheArriba === 8) {
      this.x = gameBoxNode.offsetWidth;
      this.y = posY;
      this.w = 300;
      this.h = 200;
    } else {
      this.x = gameBoxNode.offsetWidth;
      this.y = posY;
      this.w = 200;
      this.h = 70;
    }

    this.velocidad = speed;
    this.rivalNode.style.width = `${this.w}px`;
    this.rivalNode.style.height = `${this.h}px`;
    this.rivalNode.style.position = "absolute";
    this.rivalNode.style.top = `${this.y}px`;
    this.rivalNode.style.left = `${this.x}px`;
    this.rivalNode.style.zIndex = "2";
  }

  automaticMovement = () => {
    this.x -= this.velocidad;
    this.positionUpdate();
  };

  positionUpdate = () => {
    this.rivalNode.style.left = `${this.x}px`;
  };
}
