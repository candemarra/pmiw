class Bala {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.disparada = true;
  }
  
  dibujar() {
    if (this.disparada) {
      image(imgBala, this.posX, this.posY, 20, 20); 
      this.mover();
    }
  }
  
  mover() {
    this.posY -= 5;
  }
  
  fueraDePantalla() {
    return this.posY < 0;
  }
} 
