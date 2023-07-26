class Speed {
    constructor(posY, posX) {
      this.itemSpeedNode = document.createElement("img");
      this.itemSpeedNode.src = "./images/speed.gif";
      gameBoxNode.append(this.itemSpeedNode);
  
      this.x = posX;
      this.y = posY;
      this.w = 80;
      this.h = 80;
  
      this.itemSpeedNode.style.width = `${this.w}px`;
      this.itemSpeedNode.style.height = `${this.h}px`;
      this.itemSpeedNode.style.position = "absolute";
      this.itemSpeedNode.style.top = `${this.y}px`;
      this.itemSpeedNode.style.left = `${this.x}px`;
      this.itemSpeedNode.style.zIndex = "2";
    }
  }
  