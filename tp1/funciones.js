// funcion del triangulo sin retorno
function tri(x, y, l) {
  triangle(x, y, x + l / 2, y - sin(PI / 3) * l, x + l, y);
}
// Función de color con retorno
function interactive(min, max) {
  colorMode(HSB);
  // mapea índice entre sus límites a escala 255
  let hue = map(mouseX, min, max, 0, 40);
  // retorna color según el tono calculado, con saturación y brillo constante
  return color(hue, 130, 200);
}
