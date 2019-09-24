/* El objeto jugador es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades

  mover: function(movimiento)
  {
    // TODO cambiar nombre
    var largo = 30;
    var ancho = 15;
 
    this.x += movimiento.deltaX;
    this.y += movimiento.deltaY;

    var newSprite = '';

    if (movimiento.tecla == 'izq') {
      newSprite = 'imagenes/auto_rojo_izquierda.png';
      this.ancho = largo;
      this.alto = ancho;
    }
    if (movimiento.tecla == 'arriba') {
      newSprite = 'imagenes/auto_rojo_arriba.png';
      this.ancho = ancho;
      this.alto = largo;
    }
    if (movimiento.tecla == 'der') {
      newSprite = 'imagenes/auto_rojo_derecha.png';
      this.ancho = largo;
      this.alto = ancho;
    }
    if (movimiento.tecla == 'abajo') {
      newSprite = 'imagenes/auto_rojo_abajo.png';
      this.ancho = ancho;
      this.alto = largo;
    }

    this.sprite = newSprite;
  },
  perderVidas: function(cantidadVidaPerdida)
  {
    this.vidas -= cantidadVidaPerdida;
  },
  perderTodasLasVidas: function()
  {
    this.vidas = 0;
  }
}
