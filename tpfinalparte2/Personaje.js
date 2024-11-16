class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = 300;
    this.balas = []; 
  }
  
  dibujar() {
    image(imgPersonaje, this.posX, this.posY, 120, 100); 
    this.balas = this.balas.filter(bala => bala.disparada && !bala.fueraDePantalla()); 
    this.balas.forEach(bala => bala.dibujar());
  }
  
  teclaPresionada(keyCode) {
    if (keyCode === LEFT_ARROW) {
      this.moverIzquierda();
    } else if (keyCode === RIGHT_ARROW) {
      this.moverDerecha();
    } else if (keyCode === ENTER) {
      this.dispararBala();
    }
  }
  
  moverDerecha() {
    this.posX = min(width - 30, this.posX + 10);
  }
  
  moverIzquierda() {
    this.posX = max(0, this.posX - 10);
  }
  
  dispararBala() {
    const nuevaBala = new Bala(this.posX + 15, this.posY);
    this.balas.push(nuevaBala); 
  }
}
