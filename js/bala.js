COR_BALA = "#fff";
LARGURA_BALA = 3;
ALTURA_BALA = 9;
VELOCIDADE_BALA = 8;
OFFSET_SPRITE_BALA_X = 65;
OFFSET_SPRITE_BALA_Y = 18;

function Bala(game){
  this.game = game;
  this.context = game.context;
  this.cor = COR_BALA;
  this.x = game.nave.x + SPRITE_NAVE_LARGURA / 2;
  this.y = game.nave.y;
  var sprite = this.game.sprite_bala;
  this.largura = sprite.largura;
  this.altura = sprite.altura;
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
  context.drawImage(sprite.imagem,
    sprite.x, sprite.y,sprite.largura, sprite.altura,
    x, y, sprite.largura, sprite.altura);
}
