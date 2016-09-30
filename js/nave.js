OFFSET_SPRITE_NAVE_X = 62;
OFFSET_SPRITE_NAVE_Y = 0;
SPRITE_NAVE_LARGURA = 22;
SPRITE_NAVE_ALTURA = 16;

function Nave(game, sprite){
  this.game = game;
  this.sprite = sprite;
  this.context = game.context;
  this.game.elementos.push(this);
  tela = this.game.tela;
  this.x = (tela.largura- (SPRITE_NAVE_LARGURA / 2))/ 2;
  var margem_nave_y = tela.altura*0.1 + SPRITE_NAVE_ALTURA;
  this.y = tela.altura - (margem_nave_y);

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

};
