COR_TELA = "rgb(0,0,0)";

function Tela(game){
  this.game = game;
  this.context = game.context;
  this.largura = context.canvas.width;
  this.altura = context.canvas.height;
  this.game.elementos.push(this);
}

Tela.prototype.desenhar = function(){
  context = this.context;
  context.save();
  context.fillStyle = COR_TELA;
  context.fillRect(0,0,this.largura, this.altura);
  context.restore();
}

Tela.prototype.atualizar = function(){

}
