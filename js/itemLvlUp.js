class LvlUp {
  constructor(posY, posX) {
    this.itemNode = document.createElement("img");
    this.itemNode.src = "./images/1up.gif";
    gameBoxNode.append(this.itemNode);

    this.x = posX;
    this.y = posY;
    this.w = 70;
    this.h = 70;

    this.itemNode.style.width = `${this.w}px`;
    this.itemNode.style.height = `${this.h}px`;
    this.itemNode.style.position = "absolute";
    this.itemNode.style.top = `${this.y}px`;
    this.itemNode.style.left = `${this.x}px`;
    this.itemNode.style.zIndex = "2";
  }
}
