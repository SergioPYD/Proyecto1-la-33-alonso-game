class Game {
 constructor() {

    this.alonso = new Alonso();
    
    
    
    
    this.frames = 0;
    this.isGameOn = true;



 }




gameLoop = () => {
    this.frames++;
   this.alonso.movimientoContinuo()
      requestAnimationFrame(this.gameLoop);


    }

}