COR_TELA = "rgb(0,0,0)";

function Tela(game){
  this.game = game;
  this.context = game.context;
  this.largura = this.context.canvas.width;
  this.altura = this.context.canvas.height;
  this.game.tela = this;
  this.margem_x = this.largura*0.1;
  this.largura_util = this.largura - (2*this.margem_x);

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
