$(function(){
  FRAMES_POR_SEGUNDO = 60;
  var sprite_nave = undefined;
  var sprite_bala = undefined;


  var img = new Image();
	img.addEventListener("load", function() {
		sprite_nave = new Sprite(this, OFFSET_SPRITE_NAVE_X,
      OFFSET_SPRITE_NAVE_Y, SPRITE_NAVE_LARGURA, SPRITE_NAVE_ALTURA);
    coringons_sprites = [
    			[new Sprite(this,  0, 0, 22, 16), new Sprite(this,  0, 16, 22, 16)],
    			[new Sprite(this, 22, 0, 16, 16), new Sprite(this, 22, 16, 16 , 16)],
    			[new Sprite(this, 38, 0, 24, 16), new Sprite(this, 38, 16, 24, 16)]
    		];


    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var teclado = new Teclado(document);
    var game = new Game(context, FRAMES_POR_SEGUNDO);
    game.sprite_bala = new Sprite (this, OFFSET_SPRITE_BALA_X,
      OFFSET_SPRITE_BALA_Y, LARGURA_BALA, ALTURA_BALA);  //esconder implementação interna
    var tela = new Tela(game);
    game.teclado = teclado; //esconder implementação interna

var coringons = [];
for(var i = tela.margem_x; i+(tela.largura_maior_coringon*1.0) <= tela.margem_x
+ tela.area_coringon;i = i+(tela.largura_maior_coringon*1.5)){

    coringons[0] = new Coringon (game,coringons_sprites[0],i,16);
    coringons[1] = new Coringon (game,coringons_sprites[1],i,48);
    coringons[2] = new Coringon (game,coringons_sprites[2],i,80);
  }
    var nave = new Nave(game, sprite_nave);

    game.iniciar();

	});
	img.src = "res/invaders.png";



});
