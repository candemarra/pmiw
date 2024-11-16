class Enemigo {
  constructor() {
    this.posX = random(20, width - 20);
    this.posY = random(-100, 0);
    this.vida = true;
  }
  
  dibujar() {
    if (this.vida) {
      image(imgEnemigo, this.posX - 15, this.posY - 15, 120, 70);
      this.mover();
    }
  }
  
  mover() {
    this.posY +=0.7;
  }
  
  matar() {
    this.vida = false;
  }
  
  enemigoTocaBala(bala) {
    if (dist(this.posX, this.posY, bala.posX, bala.posY) < 100) {
      this.matar();
      bala.disparada = false;
    }
  }
}
