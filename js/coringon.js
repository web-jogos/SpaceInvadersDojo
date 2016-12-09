  var ESPACO = 1;
  var MOVIMENTO_DIREITA = 1;
  var MOVIMENTO_ESQUERDA = 2;

function Coringon(game, sprites, x, y){
  this.game = game;
  this.context = game.context;
  this.sprites = sprites;
  this.x = x + (this.game.tela.largura_maior_coringon - this.sprites[0].largura) / 2;
  this.y = y;
  this.game.coringons.push(this);
  this.largura = sprites[0].largura;
  this.altura = sprites[0].altura;

  this.direcao = MOVIMENTO_DIREITA;
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
  var margem_esquerda = this.game.tela.margem_x;
  var margem_direita = this.game.tela.largura - margem_esquerda;

  if(this.direcao == MOVIMENTO_DIREITA){
    if(this.x + ESPACO > margem_direita){
      this.x = margem_direita;
      this.direcao = MOVIMENTO_ESQUERDA;
      this.y += 50;
    }
    else{
      this.x += ESPACO;
    }
  }
  else if (this.direcao == MOVIMENTO_ESQUERDA) {
    if(this.x - ESPACO < margem_esquerda){
      this.x = margem_esquerda;
      this.direcao = MOVIMENTO_DIREITA;
      this.y += 50;
    }
    else{
      this.x -= ESPACO;
    }
  }
};

//colisão: event listener (c/ margens)
//fazer com que todos os coringons chequem colisão com as margens
// quando colidirem, inverter movimento e baixar todos
