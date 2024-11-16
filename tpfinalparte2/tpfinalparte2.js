//video:https://youtu.be/aKfLYCpS_Jo//

let objJuego;
let fondo, imgPersonaje, imgBala, imgEnemigo, ganasteJuego, perdisteJuego, creditos,song;
let estadoJuego = "inicio";
let enemigoActivo = 0;

function setup() {
  createCanvas(640, 400);
  objJuego = new Juego(10);
}

function preload() {
  fondo = loadImage("data/fondo.jpeg");
  imgBala = loadImage("data/bala.png");
  imgPersonaje = loadImage("data/personaje.png"); 
  imgEnemigo = loadImage("data/enemigo.png");
  ganasteJuego = loadImage("data/ganaste.jpeg"); 
  perdisteJuego = loadImage("data/perdiste.jpeg"); 
  creditos = loadImage("data/creditos.jpg"); 
  soundFormats('mp3');
  song = loadSound('data/sonido.mp3');
}

function draw() {
  background(fondo);
  if (estadoJuego === "inicio") {
    mostrarPantallaInicio();
    dibujarBoton(270, 300, 100, 50);
    textSize(15);
    fill(0);
    text("CREDITOS", 320, 330);
  } else if (estadoJuego === "jugando") {
    objJuego.dibujar();
    objJuego.controlarDisparosAEnemigos();
  } else if (estadoJuego === "ganaste") {
    mostrarPantallaGanar();
  } else if (estadoJuego === "perdiste") {
    mostrarPantallaPerder();
  } else if (estadoJuego === "creditos") {
    mostrarPantallaCreditos();
    dibujarBoton(270, 300, 100, 50); 
    textSize(15);
    fill(0);
    text("VOLVER", 320, 330);
  }
}

function mostrarPantallaInicio() {
  fill(255);
  textSize(22);
  textAlign(CENTER);
  text("Presiona ENTER para luchar contra las figuras de cera.", 320, 140);
  text("Muevete con RIGHT y LEFT", 320, 250);
  text("Dispara con ENTER", 320, 280);
}

function mostrarPantallaGanar() {
  background(ganasteJuego);
  fill(0, 255, 0);
  textSize(22);
  textAlign(CENTER);
  text("Derrotaste a las figuras! Su tio estara muy contento!", 320, 70);
  text("Presiona R para reiniciar", 320, 300);
}

function mostrarPantallaPerder() {
  background(perdisteJuego);
  fill(255,0,0);
  textSize(20);
  textAlign(CENTER);
  text("Las figuras de cera conquistaron el mundo.", 320, 70);
  text("Presiona R para reiniciar.", 320, 300);
}

function mostrarPantallaCreditos() {
  background(creditos);
  textSize(20);
  fill(255);
  textAlign(CENTER);
  text("Candela Marra",320,70);
  text("Comision 2",320,100);
}

function dibujarBoton(px, py, pan, pal) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(144, 107, 50);
  } else {
    fill(24, 103, 59);
  }
  rect(px, py, pan, pal, pal / 4);
}

function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}

function mousePressed() {
  if (estadoJuego === "inicio" && detectarBoton(270, 300, 100, 50)) {
    estadoJuego = "creditos"; 
  } else if (estadoJuego === "creditos" && detectarBoton(270, 300, 100, 50)) {
    estadoJuego = "inicio"; 
  }
}

function keyPressed() {
  if (estadoJuego === "inicio" && keyCode === ENTER) {
    estadoJuego = "jugando";
    song.play();
  } else if (estadoJuego === "jugando") {
    objJuego.teclaPresionada(keyCode);
  } else if ((estadoJuego === "ganaste" || estadoJuego === "perdiste") && keyCode === 82) { 
    reiniciarJuego();
  }
}
function reiniciarJuego() {
  estadoJuego = "inicio";
  objJuego = new Juego(10);
  enemigoActivo = 0;
 if (song.isPlaying()) { 
    song.stop();
} 
  }
