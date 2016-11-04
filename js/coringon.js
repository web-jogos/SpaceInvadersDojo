function Coringon(game, sprites,x,y){
  this.game = game;
  this.context = game.context;
  this.sprites = sprites;
  this.x = x + (this.game.tela.largura_maior_coringon - this.sprites[0].largura) / 2;
  this.y = y;
  this.game.coringons.push(this);
  this.largura = sprites[0].largura;
  this.altura = sprites[0].altura;
}

Coringon.prototype.colidiu = function(bala){

  ax = bala.x;
  ay = bala.y;
  ah = bala.altura;
  aw = bala.largura;
  bx = this.x;
  by = this.y;
  bh = this.altura;
  bw = this.largura;

  return ax < bx+bw && bx < ax+aw && ay < by+bh && by < ay+ah;

}

Coringon.prototype.desenhar = function(){

  var context = this.context;
  var sprites = this.sprites;
  var x = this.x;
  var y = this.y;

  context.drawImage(sprites[0].imagem,
    sprites[0].x, sprites[0].y,sprites[0].largura, sprites[0].altura,
    x, y, sprites[0].largura, sprites[0].altura);
};

Coringon.prototype.atualizar = function(){

};

//colisão: event listener (c/ margens)
//fazer com que todos os coringons chequem colisão com as margens
// quando colidirem, inverter movimento e baixar todos
