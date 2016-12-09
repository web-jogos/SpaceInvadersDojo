
function Barreira(game, sprites){
  this.game = game;
  this.sprites = sprites;
  this.context = game.context;
  this.game.barreira = this;
  tela = this.game.tela;
  this.x = 50;
  this.y = 400;
}


Barreira.prototype.desenhar = function(){
  var context = this.context;
  var sprite = this.sprites;
  var x = this.x;
  var y = this.y;
  var i = 90;

if(DANOBARREIRA_A1 >= 9){

} else{
  context.drawImage(sprite[DANOBARREIRA_A1].imagem,
    sprite[DANOBARREIRA_A1].x, sprite[DANOBARREIRA_A1].y, sprite[DANOBARREIRA_A1].largura, sprite[DANOBARREIRA_A1].altura,
    x, y, sprite[DANOBARREIRA_A1].largura, sprite[DANOBARREIRA_A1].altura);
  }

    context.drawImage(sprite[DANOBARREIRA_B1].imagem,
        sprite[DANOBARREIRA_B1].x, sprite[DANOBARREIRA_B1].y, sprite[DANOBARREIRA_B1].largura, sprite[DANOBARREIRA_B1].altura,
        x + i, y, sprite[DANOBARREIRA_B1].largura, sprite[DANOBARREIRA_B1].altura);

      context.drawImage(sprite[DANOBARREIRA_C1].imagem,
        sprite[DANOBARREIRA_C1].x, sprite[DANOBARREIRA_C1].y, sprite[DANOBARREIRA_C1].largura, sprite[DANOBARREIRA_C1].altura,
        x + i + i, y, sprite[DANOBARREIRA_C1].largura, sprite[DANOBARREIRA_C1].altura);

        context.drawImage(sprite[DANOBARREIRA_D1].imagem,
          sprite[DANOBARREIRA_D1].x, sprite[DANOBARREIRA_D1].y, sprite[DANOBARREIRA_D1].largura, sprite[DANOBARREIRA_D1].altura,
          x + i + i + i, y, sprite[DANOBARREIRA_D1].largura, sprite[DANOBARREIRA_D1].altura);

};
