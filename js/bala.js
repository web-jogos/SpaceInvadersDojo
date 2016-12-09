COR_BALA = "#fff";
LARGURA_BALA = 3;
ALTURA_BALA = 9;
VELOCIDADE_BALA = 8;
OFFSET_SPRITE_BALA_X = 65;
OFFSET_SPRITE_BALA_Y = 18;
DANOBARREIRA_A1 = 0;
DANOBARREIRA_B1 = 0;
DANOBARREIRA_C1 = 0;
DANOBARREIRA_D1 = 0;

function Bala(game){
  this.game = game;
  this.context = game.context;
  this.cor = COR_BALA;
  this.x = game.nave.x + SPRITE_NAVE_LARGURA / 2;
  this.y = game.nave.y;
  var sprite = this.game.sprite_bala;
  this.largura = sprite.largura;
  this.altura = sprite.altura;
  this.danoBarreiraA = 0;
    this.danoBarreiraB = 0;
    this.danoBarreiraC = 0;
        this.danoBarreiraD = 0;
}


Bala.prototype.atualizar = function(){
  var colisao_cima = this.game.y;
  var delta = VELOCIDADE_BALA;
  var y = this.y;
  if(y - delta >= colisao_cima){
    y -= delta;
    this.game.bala_na_tela = true;
  } else {
    this.game.bala_na_tela = false;
    var balas = this.game.balas;
    var index = balas.indexOf(this);
    if(index > -1){
      balas.splice(index, 1);
    }
  }
  this.y = y;
}

Bala.prototype.desenhar = function(){
  var context = this.context;
  var sprite = this.game.sprite_bala;
  var x = this.x;
  var y = this.y;

  if(DANOBARREIRA_A1 < 9){

  if(this.x>=50 && this.x<=85){
		if(this.danoBarreiraA ==4){
			DANOBARREIRA_A1 ++;
		  this.game.bala.splice(this.index, 1);
		  this.game.bala_na_tela = false;
		 }
		this.danoBarreiraA +=1;
  }
	  } else{
      DANOBARREIRA_A1 = 9;
    }

  if(DANOBARREIRA_B1 < 9){

  if(this.x>=140 && this.x<=175){
		if(this.danoBarreiraB ==4){
			DANOBARREIRA_B1 ++;
		  this.game.balas.splice(this.index, 1);
		  this.game.bala_na_tela = false;
		 }
		this.danoBarreiraB +=1;
	  }
  } else{
    DANOBARREIRA_B1 = 9;
  }

  if(DANOBARREIRA_C1 < 9){
  if(this.x>=230 && this.x<=265){

		if(this.danoBarreiraC ==4){
			DANOBARREIRA_C1 ++;
		  this.game.balas.splice(this.index, 1);
		  this.game.bala_na_tela = false;
		 }
		this.danoBarreiraC +=1;
	  }
  } else{
    DANOBARREIRA_C1 = 9;
  }


  if(DANOBARREIRA_D1 < 9){

  if(this.x>=320 && this.x<=355){
		if(this.danoBarreiraD ==4){
			DANOBARREIRA_D1 ++;
		  this.game.balas.splice(this.index, 1);
		  this.game.bala_na_tela = false;
		 }
		this.danoBarreiraD +=1;
	  }
  } else{
    DANOBARREIRA_D1 = 9;
  }


  context.drawImage(sprite.imagem,
    sprite.x, sprite.y,sprite.largura, sprite.altura,
    x, y, sprite.largura, sprite.altura);
  }
