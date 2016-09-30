$(function(){
  FRAMES_POR_SEGUNDO = 60;
  var sprite_nave = undefined;


  var img = new Image();
	img.addEventListener("load", function() {
		sprite_nave = new Sprite(this, OFFSET_SPRITE_NAVE_X,
      OFFSET_SPRITE_NAVE_Y, SPRITE_NAVE_LARGURA, SPRITE_NAVE_ALTURA);

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var teclado = new Teclado(document);
    var game = new Game(context, FRAMES_POR_SEGUNDO);
    var tela = new Tela(game);
    game.teclado = teclado;

    var nave = new Nave(game, sprite_nave);
    game.iniciar();

	});
	img.src = "res/invaders.png";



});
