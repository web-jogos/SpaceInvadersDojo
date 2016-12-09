SPRITE_BARREIRA_X = 85;
SPRITE_BARREIRA_Y = 10;
SPRITE_BARREIRA_LARGURA = 35;
SPRITE_BARREIRA_ALTURA = 30;

$(function(){
  FRAMES_POR_SEGUNDO = 60;
  var sprite_nave = undefined;
  var sprite_bala = undefined;
  var sprite_barreira = undefined;
  var sprites_barreira;
  var sprite_vida;
  var img1 = new Image();
  var img = new Image();
  var img2 = new Image();


      //  var imagem_vida = this;
	img.addEventListener("load", function() {
    var imagem_coringon = this;

  img2.addEventListener("load", function() {
      var imagem_vida = this;
		img1.addEventListener("load", function() {

			 sprites_barreira = [
    	/*	[new Sprite(this,  174,120, 35, 30)],
				[new Sprite(this,  22, 10, 35, 30)], [new Sprite(this,  98, 10, 35, 30)],
				[new Sprite(this,  174, 10, 35, 30)], [new Sprite(this,  250, 10, 35, 30)],
				[new Sprite(this,  326, 10, 35, 30)], [new Sprite(this,  98, 10, 35, 30)],
				[new Sprite(this,  22, 65, 35, 30)], [new Sprite(this,  98, 65, 35, 30)],*/
        new Sprite(this,  22, 10, 35, 30),
        new Sprite(this,  174, 10, 35, 30), new Sprite(this,  174, 65, 35, 30),
        new Sprite(this,  174, 120, 35, 30), new Sprite(this, 174, 175, 35, 30),
        new Sprite(this,  174, 230, 35, 30), new Sprite(this,  174, 285, 35, 30),
        new Sprite(this, 174, 340, 35, 30), new Sprite(this,  326, 340, 35, 30),
        new Sprite(this,  174, 395, 35, 30)

    		];

        sprite_vida = new Sprite(imagem_vida, 0, 0, 40, 35);


            sprite_barreira = new Sprite(this, SPRITE_BARREIRA_X, SPRITE_BARREIRA_Y,
              SPRITE_BARREIRA_LARGURA, SPRITE_BARREIRA_ALTURA);

        		sprite_nave = new Sprite(imagem_coringon, OFFSET_SPRITE_NAVE_X,
              OFFSET_SPRITE_NAVE_Y, SPRITE_NAVE_LARGURA, SPRITE_NAVE_ALTURA);
            coringons_sprites = [
            			[new Sprite(imagem_coringon,  0, 0, 22, 16), new Sprite(imagem_coringon,  0, 16, 22, 16)],
            			[new Sprite(imagem_coringon, 22, 0, 16, 16), new Sprite(imagem_coringon, 22, 16, 16 , 16)],
            			[new Sprite(imagem_coringon, 38, 0, 24, 16), new Sprite(imagem_coringon, 38, 16, 24, 16)]
            		];


            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");
            var teclado = new Teclado(document);
            var game = new Game(context, FRAMES_POR_SEGUNDO);
            game.sprite_bala = new Sprite (imagem_coringon, OFFSET_SPRITE_BALA_X,
              OFFSET_SPRITE_BALA_Y, LARGURA_BALA, ALTURA_BALA);  //esconder implementação interna
            var tela = new Tela(game, sprite_vida);
            game.teclado = teclado; //esconder implementação interna

        var coringons = [];
        for(var i = tela.margem_x; i+(tela.largura_maior_coringon*1.0) <= tela.margem_x
        + tela.area_coringon;i = i+(tela.largura_maior_coringon*1.5)){

            coringons[0] = new Coringon (game,coringons_sprites[0],i,16);
            coringons[1] = new Coringon (game,coringons_sprites[1],i,48);
            coringons[2] = new Coringon (game,coringons_sprites[2],i,80);
          }
            var nave = new Nave(game, sprite_nave);
            var barreiras = [];

            barreiras[0] = new Barreira(game, sprites_barreira);

            game.iniciar();


		});

	});
  	});

	img.src = "res/invaders.png";
    img2.src = "res/vida.png";
	img1.src = "res/teto.png";




});
