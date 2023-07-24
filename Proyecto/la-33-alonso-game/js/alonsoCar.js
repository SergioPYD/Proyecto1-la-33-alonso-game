class Alonso {
  constructor(stage) {
    this.carNode = document.createElement("img");
    this.carNode.src = "./images/alonso-1.png"
    // if (stage === 1) {
    //   this.carNode.src = "./images/alonso-1.png";
    // } else if (stage === 2) {
    //   this.carNode.src = "./images/alonso-2.png";
    // } else if (stage === 3) {
    // this.carNode.src = "./images/alonso-2.png";

    // }

    gameBoxNode.append(this.carNode);

    // ajustes de velocidad
    this.velocidadAlonso = 0.4;

    this.x = 10;
    this.y = 200;
    this.w = 200;
    this.h = 70;

    this.carNode.style.width = `${this.w}px`;
    this.carNode.style.height = `${this.h}px`;
    this.carNode.style.position = "absolute";
    this.carNode.style.top = `${this.y}px`;
    this.carNode.style.left = `${this.x}px`;
    this.carNode.style.zIndex = "2";
  }

  // metodos del coche

  movimientoContinuo = () => {
    this.x += this.velocidadAlonso;
    this.actualizacionPosicion();
  };

  actualizacionPosicion = () => {
    // avanzamos hacia delante
    this.carNode.style.left = `${this.x}px`;
    this.carNode.style.top = `${this.y}px`;
  };
}

// aplicarlo en main--add event listeners

movimientoManual = () => {};
