COR_BALA_INIMIGO = "ff0000";
LARGURA_BALA_INIMIGO = 3;
ALTURA_BALA_INIMIGO = 9;
VELOCIDADE_BALA_INIMIGO = 8;
OFFSET_SPRITE_BALA_INIMIGO_X = 65;
OFFSET_SPRITE_BALA_INIMIGO_Y = 18;
VIDA_NAVE =3;


function BalaInimigo(game){
  this.game = game;
  this.context = game.context;
  this.cor = COR_BALA_INIMIGO;
  this.x = this.game.coringons[0].x + 24 /2;
  this.y = this.game.coringons[0].y+7;
  var sprite = this.game.sprite_bala;
  this.largura = sprite.largura;
  this.altura = sprite.altura;

}


BalaInimigo.prototype.atualizar = function(){
  var colisao_baixo = this.game.tela.altura;
  var delta = VELOCIDADE_BALA_INIMIGO;
  var y = this.y;
  if(y + delta < colisao_baixo){
    y += delta;
    this.game.bala_inimigo_na_tela = true;
  }
  else {
    this.game.bala_inimigo_na_tela = false;
    var balas = this.game.balas_inimigos;
    var index = balas.indexOf(this);
    if(index > -1){
      balas.splice(index, 1);
    }
  }
  this.y = y;
}

BalaInimigo.prototype.desenhar = function(){
  var context = this.context;
  var sprite = this.game.sprite_bala;
  var x = this.x;
  var y = this.y;

  if(DANOBARREIRA_A1 < 9){
    if(this.x>=50 && this.x<=85){
      if(this.y >=400){

        DANOBARREIRA_A1 ++;
        this.game.balas_inimigos.splice(this.index, 1);
        this.game.bala_inimigo_na_tela = false;
      }
    }
  } else{
      DANOBARREIRA_A1 = 9;
  }

  if(DANOBARREIRA_B1 < 9){
    if(this.x>=140 && this.x<=175){
        if(this.y >=400){
      DANOBARREIRA_B1 ++;
      this.game.balas_inimigos.splice(this.index, 1);
      this.game.bala_inimigo_na_tela = false;
      }
    }
  } else{
      DANOBARREIRA_B1 = 9;
  }

  if(DANOBARREIRA_C1 < 9){
    if(this.x>=230 && this.x<=265){
        if(this.y >=400){
      DANOBARREIRA_C1 ++;
      this.game.balas_inimigos.splice(this.index, 1);
      this.game.bala_inimigo_na_tela = false;
      }
    }
  } else{
      DANOBARREIRA_C1 = 9;
  }



if(DANOBARREIRA_D1 < 9){
    if(this.x>=320 && this.x<=355){
        if(this.y >=400){
      DANOBARREIRA_D1 ++;
      this.game.balas_inimigos.splice(this.index, 1);
      this.game.bala_inimigo_na_tela = false;
      }
    }
  } else{
      DANOBARREIRA_D1 = 9;
  }

  if(this.colidiu(this.game.nave)){
    this.game.balas_inimigos.splice(this.index, 1);
    this.game.bala_inimigo_na_tela = false;
     VIDA_NAVE--;
     console.log(VIDA_NAVE);
     if(VIDA_NAVE == 0){
       this.game.desligar();
       this.game.tela.fim();
     }
  }

  context.drawImage(sprite.imagem,
    sprite.x, sprite.y,sprite.largura, sprite.altura,
    x, y, sprite.largura, sprite.altura);
}

BalaInimigo.prototype.colidiu = function(nave){

  ax = nave.x;
  ay = nave.y;
  ah = nave.altura;
  aw = nave.largura;
  bx = this.x;
  by = this.y;
  bh = this.altura;
  bw = this.largura;

  return ax < bx+bw && bx < ax+aw && ay < by+bh && by < ay+ah;
}
