COR_BALA = "#fff";
LARGURA_BALA = 2;
ALTURA_BALA = 6;
VELOCIDADE_BALA = 8;

function Bala(game){
  this.game = game;
  this.context = game.context;
  this.cor = COR_BALA;
  this.x = game.nave.x + SPRITE_NAVE_LARGURA / 2;
  this.y = game.nave.y;
}


Bala.prototype.atualizar = function(){
  var colisao_cima = this.game.y;
  var delta = VELOCIDADE_BALA;
  var y = this.y;
  if(y - delta >= colisao_cima){
    y -= delta;
  } else {
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
  context.save();
  context.fillStyle = COR_BALA;
  context.fillRect(this.x, this.y, LARGURA_BALA, ALTURA_BALA);
  context.restore();
}
