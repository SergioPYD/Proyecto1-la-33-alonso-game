class RedLine {
    constructor(posY, lineaArriba) {
      this.redLineNode = document.createElement("img");
      if (lineaArriba === true) {
        this.redLineNode.src = "./images/red-line.png";
      } else {
        this.redLineNode.src = "./images/red-line.png";
      };
  
      gameBoxNode.append(this.redLineNode);
  
      this.x = gameBoxNode.offsetWidth ;
      this.y = posY;
      this.w = 70;
      this.h = 23;
  
      this.redLineNode.style.width = `${this.w}px`;
      this.redLineNode.style.height = `${this.h}px`;
      this.redLineNode.style.position = "absolute";
      this.redLineNode.style.top = `${this.y}px`;
      this.redLineNode.style.left = `${this.x}px`;
    }
   
   
    automaticMovement = () => {
      this.x -= 12;
      this.positionUpdate();
  }
  
    positionUpdate = () => {
      this.redLineNode.style.left = `${this.x}px`;
     }
  
     
  }
  
  