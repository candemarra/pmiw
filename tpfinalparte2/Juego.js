class Juego {
  constructor(cantidadEnemigos) {
    this.cantidadEnemigos = cantidadEnemigos;
    this.enemigosEliminados = 0; 
    this.crearPersonaje();
    this.crearEnemigos();
  }
  
  dibujar() {
    this.personaje.dibujar();

    if (this.enemigos[enemigoActivo]) {
      this.enemigos[enemigoActivo].dibujar();
      
      if (this.enemigos[enemigoActivo].vida && this.enemigos[enemigoActivo].posY > this.personaje.posY) {
        estadoJuego = "perdiste";
      } else if (!this.enemigos[enemigoActivo].vida) {
        enemigoActivo++;
        this.enemigosEliminados++; 
        
        if (this.enemigosEliminados >= this.cantidadEnemigos) {
          estadoJuego = "ganaste";
        }
      }
    }
  }
  
  crearEnemigos() {
    this.enemigos = [];
    for (let i = 0; i < this.cantidadEnemigos; i++) {
      this.enemigos[i] = new Enemigo(i * 40 + 20, 50);
    }
  }
  
  crearPersonaje() {
    this.personaje = new Personaje(width / 2, height - 50);
  }
  
  teclaPresionada(keyCode) {
    this.personaje.teclaPresionada(keyCode);
  }
  
  controlarDisparosAEnemigos() {
    this.personaje.balas.forEach(bala => {
      this.enemigos[enemigoActivo].enemigoTocaBala(bala);
    });
  }
}
