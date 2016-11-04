/*
 Everaldo Gomes - 15/09/2016 - everaldo.gomes@ifpr.edu.br,
                               everaldo.gomes@gmail.com
http://www.github.com/everaldo

Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
Autor: Éderson Cássio

*/

function Game(context, frames_segundo){
  this.context = context;
  this.total_frames = 0;
  this.balas = [];
  this.coringons = [];
  this.bala_na_tela = false;
  this.frames_segundo = frames_segundo;
  this.tempo = new Tempo();
  this.x = 0;
  this.y = 0;
}

Game.prototype.ligar = function(){
  this.ligado = true;
  this.proximoFrame();
}

Game.prototype.iniciar = function(){
  this.ligar();
}

Game.prototype.desligar = function(){
  this.ligado = false;
}

Game.prototype.pausar = function(){
  if(this.ligado){
    this.desligar();
  }
  else{
    this.ligar();
  }
}

Game.prototype.decorrido = function(){
  return this.tempo.ultimo_tick();
}

Game.prototype.limparTela = function(){
  this.context.clearRect(0, 0, this.context.canvas.width,
     this.context.canvas.height);
}

Game.prototype.atualizar = function(){
  this.tela.atualizar();
  this.nave.atualizar();
  for(var i in this.balas){
    this.balas[i].atualizar();
  }
  destruir = [];
  for(var i in this.coringons){
    this.coringons[i].atualizar();

    for(var j in this.balas){
      if(this.coringons[i].colidiu(this.balas[j])){
        destruir.push({coringon:this.coringons[i],
          bala:this.balas[j]});
      }
    }
  }
  for (var i in destruir){
    this.destruir_coringon_bala(destruir[i].coringon,destruir[i].bala);
  }
  //this.coringons.atualizar();
}

Game.prototype.desenhar = function(){
  this.tela.desenhar();
  this.nave.desenhar();
  for(var i in this.coringons){
    this.coringons[i].desenhar();
    }
  for(var i in this.balas){
    this.balas[i].desenhar();
  }
}

Game.prototype.tempoFrame = function(){
  var intervalo_frames = (1 / this.frames_segundo) * 1000;
  var tempo = this.tempo.ultimo_tick() >= intervalo_frames;
  if(tempo){
    return true;
  }
  return false;
}

Game.prototype.destruir_coringon_bala = function(coringon,bala){
  var index = this.balas.indexOf(bala);
  if(index > -1){
    this.balas.splice(index, 1);
  }
  this.bala_na_tela = false;
  index = this.coringons.indexOf(coringon);
  if(index > -1){
    this.coringons.splice(index, 1);
  }
}

Game.prototype.proximoFrame = function(){
  if(! this.ligado) return;
  if(this.tempoFrame()){
    this.total_frames += 1;
    this.limparTela();
    this.atualizar();
    this.desenhar();
    this.tempo.tick();
  }
  var animacao = this;
  requestAnimationFrame(function(){
    animacao.proximoFrame();
  });
}
