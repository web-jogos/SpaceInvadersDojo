OFFSET_SPRITE_NAVE_X = 62;
OFFSET_SPRITE_NAVE_Y = 0;
SPRITE_NAVE_LARGURA = 22;
SPRITE_NAVE_ALTURA = 16;
DISTANCIA_NA_TELA_SEGUNDO = 0.5;

function Nave(game, sprite){
  this.game = game;
  this.sprite = sprite;
  this.context = game.context;
  this.game.nave = this;
  tela = this.game.tela;
  this.x = (tela.largura- (SPRITE_NAVE_LARGURA / 2)) / 2;
  var margem_nave_y = tela.altura*0.1 + (SPRITE_NAVE_ALTURA / 2);
  this.y = tela.altura - (margem_nave_y);
  this.distancia_na_tela_segundo = tela.largura_util*DISTANCIA_NA_TELA_SEGUNDO;
}

Nave.prototype.desenhar = function(){
  var context = this.context;
  var sprite = this.sprite;
  var x = this.x;
  var y = this.y;
  context.drawImage(sprite.imagem,
    sprite.x, sprite.y,sprite.largura, sprite.altura,
    x, y, sprite.largura, sprite.altura);
};

Nave.prototype.atualizar = function(){
  //movimento nave
  //colisão com bordas
  var teclado = this.game.teclado;
  var colisao_esquerda = this.game.x + this.game.tela.margem_x;
  var colisao_direita = this.game.tela.largura - this.game.tela.margem_x - this.sprite.largura;
  var delta = this.distancia_na_tela_segundo / this.game.frames_segundo;
  var x = this.x;
  if(teclado.estaApertada(SETA_ESQUERDA) ||
    teclado.estaPressionada(SETA_ESQUERDA)){
      if(x-delta >= colisao_esquerda){
        x -= delta;
      } else {
        x = colisao_esquerda;
      }
  }
  if(teclado.estaApertada(SETA_DIREITA) ||
  teclado.estaPressionada(SETA_DIREITA)){
    if(x+delta <= colisao_direita){
      x += delta;
    } else {
      x = colisao_direita;
    }
  }
  this.x = x;

  if(teclado.estaPressionada(BOTAO_TIRO)
  && this.game.bala_na_tela == false){
    this.game.balas.push(new Bala(this.game));
  }
}
