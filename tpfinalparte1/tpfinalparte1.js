//Marra Candela
//link de youtube: https://youtu.be/eGREios89vM
let fondos = [];
let estado;
let texto = [];
let song;

function preload() {
  for (let i = 0; i < 26; i++) {
    fondos[i] = loadImage("data/fondo" + i + ".jpeg");
     soundFormats('mp3');
     song = loadSound('data/sonido.mp3');
  }
 texto = loadStrings ("data/cuento.txt");  
}
function setup() {
  createCanvas(640, 480);
   for (let i = 0; i < 26; i++) {
    fondos[i].resize(640, 480);
  }
  estado = "inicio";
}

function draw() {
  background(200);
  
  if (estado === "inicio") {
    image(fondos[0], 0, 0);
    dibujarBoton(50, 400, 100, 50);// Botón para ir a la imagen 1
    textSize (15);
    fill (0);
    text ("JUGAR", 75,430);
    dibujarBoton(490, 400, 100, 50);  // Segundo botón
    textSize (15);
    fill (0);
    text ("CREDITOS",500,430);
    cuento(0);
  } else if (estado === "img1") {
    image(fondos[1], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para ir a la imagen 2
    textSize (15);
    fill (0);
    text ("VOLVER", 70, 430);
    cuento(1);
  } else if (estado === "img2") {
    image(fondos[2], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para ir a la imagen 3
    textSize (15);
    fill (0);
    text ("SIGUIENTE",63,430);
    cuento(2);
  } else if (estado === "img3") {
    image(fondos[3], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para ir a la imagen 4
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63,430);
    cuento(3);
  } else if (estado === "img4") {
    image(fondos[4], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para ir a la imagen 5
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63,430);
    cuento(4);
  } else if (estado === "img5") {
    image(fondos[5], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para ir a la imagen 6
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(5);
  } else if (estado === "img6") {
    image(fondos[6], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para ir a la imagen 7
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63,430);
    cuento(6);
  } else if (estado === "img7") {
    image(fondos[7], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para ir a la imagen 8
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(7);
  } else if (estado === "img8") {
    image(fondos[8], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para ir a la imagen 9
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(8);
  } else if (estado === "img9") {
    image(fondos[9], 0, 0);
    dibujarBoton(50, 400, 140, 50); // Botón para ir a img10
    textSize (11);
    fill (0);
    text ("INVESTIGAR EL CASO", 63 ,430);
    dibujarBoton(490, 400, 140, 50);  // Botón para ir a img11
    textSize (10);
    fill (0);
    text ("NO INVESTIGAR EL CASO", 500 ,430);
    cuento(9);
  } else if (estado === "img10") {
    image(fondos[10], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para volver al inicio
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(11);
  } else if (estado === "img11") {
    image(fondos[11], 0, 0);
    dibujarBoton(50, 400, 100, 50); // Botón para volver al inicio
    textSize (15);
    fill (0);
    text ("VOLVER", 65 ,430);
    cuento(10);
  } else if (estado === "img12") {
    image(fondos[12], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(12);
  } else if (estado === "img13") {
    image(fondos[13], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(13);
  } else if (estado === "img14") {
    image(fondos[14], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(14);
  } else if (estado === "img15") {
    image(fondos[15], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("CULPARLO", 63 ,430);
    dibujarBoton(490, 400, 140, 50);
    textSize (10);
    fill (0);
    text ("SEGUIR INVESTIGANDO", 500 ,430);
    cuento(15);
  } else if (estado === "img16") {
    image(fondos[16], 0, 0);
    dibujarBoton(50, 400, 130, 50);
    textSize (10);
    fill (0);
    text ("ACOMPAÑAR A STAN", 63 ,430);
    dibujarBoton(490, 400, 140, 50);
    textSize (10);
    fill (0);
    text ("INVESTIGAR EL CADAVER", 500 ,430);
    cuento(17);
  } else if (estado === "img17") {
    image(fondos[17], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("VOLVER", 63 ,430);
    cuento(16);
  } else if (estado === "img18") {
    image(fondos[18], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("VOLVER", 63 ,430);
    cuento(18);
  } else if (estado === "img19") {
    image(fondos[19], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(19);
  } else if (estado === "img20") {
    image(fondos[20], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("LUCHAR", 63 ,430);
    dibujarBoton(490, 400, 130, 50); 
    textSize (10);
    fill (0);
    text ("LLAMAR A LA POLICIA", 500 ,430);
    cuento(20);
  } else if (estado === "img21") {
    image(fondos[21], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("VOLVER", 63 ,430);
    cuento(23);
  } else if (estado === "img22") {
    image(fondos[22], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(22);
  } else if (estado === "img23") {
    image(fondos[23], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(24);
  } else if (estado === "img24") {
    image(fondos[24], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (10);
    fill (0);
    text ("VOLVER A JUGAR", 63 ,430);
    cuento(25);
    } else if (estado === "img25") {
    image(fondos[25], 0, 0);
    dibujarBoton(50, 400, 100, 50);
    textSize (15);
    fill (0);
    text ("SIGUIENTE", 63 ,430);
    cuento(21);
  }
}

function mousePressed() {
  if (estado === "inicio") {
    if (song.isPlaying()) {
          song.pause();
    } else {
       song.play();
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img2";
    } else if (detectarBoton(490, 400, 100, 50)) {
      estado = "img1"; // Acción del segundo botón
  }
    }
  } else if (estado === "img2") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img3";
    }
  } else if (estado === "img1") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "inicio";
    }
  } else if (estado === "img3") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img4";
    }
  } else if (estado === "img4") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img5";
    }
  } else if (estado === "img5") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img6";
    }
  } else if (estado === "img6") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img7";
    }
  } else if (estado === "img7") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img8";
    }
  } else if (estado === "img8") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img9";
    }
  } else if (estado === "img9") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img10";
    } else if (detectarBoton(490, 400, 100, 50)) {
      estado = "img11"; // Acción del segundo botón
    }
  } else if (estado === "img10") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img12"; 
    }
  } else if (estado === "img11") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "inicio"; // Volver al inicio
    }
  } else if (estado === "img12") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img13"; 
    }
  } else if (estado === "img13") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img14"; 
    }
  } else if (estado === "img14") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img15"; 
    }
  } else if (estado === "img15") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img17"; 
  } else if (detectarBoton(490, 400, 100, 50)) {
      estado = "img16";
    }
  } else if (estado === "img17") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "inicio"; 
    }
  } else if (estado === "img16") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img18"; 
    } else if (detectarBoton(490, 400, 100, 50)) {
      estado = "img19";
    }
  } else if (estado === "img18") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "inicio"; 
    }
  } else if (estado === "img19") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img20";  
    }
  } else if (estado === "img20") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img23"; 
  } else if (detectarBoton(490, 400, 100, 50)) {
      estado = "img25";
    }
  } else if (estado === "img25") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img22"; 
    }
  } else if (estado === "img22") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img21"; 
    }
  } else if (estado === "img21") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "inicio"; 
    }
  } else if (estado === "img23") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "img24"; 
    }
  } else if (estado === "img24") {
    if (detectarBoton(50, 400, 100, 50)) {
      estado = "inicio"; 
    }
  }
}
function cuento(i) {
    textSize(15);
    noStroke();
    fill (255);
    rect (45, 10, 500, 55);
    fill (203, 62, 111);
    text (texto[i], 50, 20, 500);
 }
// Función para dibujar botones
function dibujarBoton(px, py, pan, pal) {
  if (detectarBoton(px, py, pan, pal)) {
    fill(203, 62, 111); // Cambia de color cuando el mouse está encima
  } else {
    fill(64, 147, 100); // Color normal del botón
  }
  rect(px, py, pan, pal, pal / 4); // Dibuja el botón con esquinas redondeadas
}

// Función para detectar si el mouse está sobre un botón
function detectarBoton(x, y, an, al) {
  return mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al;
}
   
