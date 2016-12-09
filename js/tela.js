COR_TELA = "rgb(0,0,0)";

function Tela(game, sprite){
  this.game = game;
  this.context = game.context;
  this.largura = this.context.canvas.width;
  this.altura = this.context.canvas.height;
  this.game.tela = this;
  this.margem_x = this.largura*0.1;
  this.largura_util = this.largura - (2*this.margem_x);
  this.largura_maior_coringon = 24;
  this.area_coringon = this.margem_x * 7;
  this.sprite = sprite;

}

Tela.prototype.desenhar = function(){

  context = this.context;
  context.save();
  context.fillStyle = COR_TELA;
  context.fillRect(0,0,this.largura, this.altura);
  context.restore();
  this.context.font="30px Verdana";
  this.context.fillStyle = "#cc0000";
  this.context.fillText(parseInt(this.game.nave.pontuacao),1,30);
if(VIDA_NAVE >= 1){
 context.drawImage(this.sprite.imagem,
    this.sprite.x, this.sprite.y,this.sprite.largura, this.sprite.altura,
    300, 470, this.sprite.largura, this.sprite.altura);
  }
    if(VIDA_NAVE >= 2){
    context.drawImage(this.sprite.imagem,
       this.sprite.x, this.sprite.y,this.sprite.largura, this.sprite.altura,
       330, 470, this.sprite.largura, this.sprite.altura);
     }
       if(VIDA_NAVE == 3){
       context.drawImage(this.sprite.imagem,
          this.sprite.x, this.sprite.y,this.sprite.largura, this.sprite.altura,
          360, 470, this.sprite.largura, this.sprite.altura);
        }

}

Tela.prototype.fim = function(){
  console.log("oi");
  this.context.font="60px Verdana";
  this.context.fillText(parseInt(this.game.nave.pontuacao),150,300);
}
Tela.prototype.atualizar = function(){

}
