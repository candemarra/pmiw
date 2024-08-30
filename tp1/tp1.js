//enlace a yotube videos tp3 https://youtu.be/tSzaE5jDvr0?si=WuIsRPT4m1KlhpkA
//enlace a youtube video tp1 https://youtu.be/Jvumtdvrbhw?si=PihaQkjl32i-U9dd
 
 let optico;
let colorcito = 10;

function preload() {
  optico = loadImage('data/arte-optico.png');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);

  // IMAGEN DE REFERENCIA
  noStroke();
  fill(255);
  rect(0, 0, 400, 400);
  image(optico, 0, 25);

  // DIBUJO
  colorMode(RGB);
  // cambia de color moviendo el Mouse en Y
  fill(245, map(mouseY, 0, 400, 0, 255), colorcito);

  // For anidado que con el i va achicando los triangulos y moviendolos para que queden centrados y con la j cambia la línea
  for (let i = 195; i > 0; i -= 15) {
    for (let j = 10; j > 0; j -= 1) {
      let c = map(i, j * 20, 230, 90, 230);
      stroke(c);
      strokeWeight(2);

      // triángulos chiquitos
      if (i <= 15) {
        fill(colorcito + 150, map(mouseY, 0, 400, 0, 150), colorcito + 50);
      }        

      // triángulos
      tri(602.5 - i / 2, 140 + i / 4, i);
      tri(502.5 - i / 2, 316 + i / 4, i);
      tri(702.5 - i / 2, 316 + i / 4, i);
    }
  }

  // triángulo del medio
  push();
  fill(interactive(0, 800));
  rotate(radians(60));
  for (let i = 200; i > 0; i -= 15) {
    stroke(0);
    strokeWeight(0.5);
    tri(517 - i / 2, i / 4 - 389, i);
  }
  pop();
}

function mousePressed() {
  colorcito = colorcito + 10;
  if (colorcito >= 100) {
    colorcito = 100;
  }
}

function keyPressed() {
  if (key === 'r') { 
    colorcito = 10;
  }
}
