

class Alonso {
constructor(){

this.carNode = document.createElement("img");
this.carNode.src = "images/fhd0rp4f.png";
gameScreenNode.append(this.carNode)

// ajustes de velocidad
this.velocidadAlonso=0.4;



this.x = 400;
this.y = 150;
this.w = 200;
this.h = 70;

this.carNode.style.width = `${this.w}px`
this.carNode.style.height = `${this.h}px`
this.carNode.style.position = "absolute"
this.carNode.style.top = `${this.y}px`
this.carNode.style.left = `${this.x}px`

}

// metodos del coche

movimientoContinuo = () => {
this.x += this.velocidadAlonso
this.actualizacionPosicion()
}


actualizacionPosicion = () => {
// avanzamos hacia delante
    this.carNode.style.left = `${this.x}px`
    this.carNode.style.top = `${this.y}px`}

}

// aplicarlo en main--add event listeners

movimientoManual = () => {


}