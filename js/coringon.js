function Coringon(game, sprites,x,y){
  this.game = game;
  this.sprites = sprites;
  this.x = x;
  this.y = y;
  this.game.coringons.push(this);
}

Coringon.prototype.desenhar = function(){

  var context = this.context;
  var sprite = this.sprite;
  var x = this.x;
  var y = this.y;
  context.drawImage(sprite.imagem,
    sprite.x, sprite.y,sprite.largura, sprite.altura,
    x, y, sprite.largura, sprite.altura);

};

Coringon.prototype.atualizar = function(){

};

//colisão: event listener (c/ margens)
//fazer com que todos os coringons chequem colisão com as margens
// quando colidirem, inverter movimento e baixar todos
