class Rivales {
  constructor(posY, cocheArriba) {
    this.rivalNode = document.createElement("img");
    if (cocheArriba === true) {
      this.rivalNode.src = "./images/enemy1.png";
    } else {
      this.rivalNode.src = "./images/enemy1.png";
    };

    gameBoxNode.append(this.rivalNode);

    this.x = gameBoxNode.offsetWidth ;
    this.y = posY;
    this.w = 200;
    this.h = 70;

    this.rivalNode.style.width = `${this.w}px`;
    this.rivalNode.style.height = `${this.h}px`;
    this.rivalNode.style.position = "absolute";
    this.rivalNode.style.top = `${this.y}px`;
    this.rivalNode.style.left = `${this.x}px`;
    this.rivalNode.style.zIndex = "1";
  }
 
 
  automaticMovement = () => {
    this.x -= 4;
    this.positionUpdate();
}

  positionUpdate = () => {
    this.rivalNode.style.left = `${this.x}px`;
   }

   
}


