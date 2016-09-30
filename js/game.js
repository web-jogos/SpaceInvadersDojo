/*
 Everaldo Gomes - 15/09/2016 - everaldo.gomes@ifpr.edu.br,
                               everaldo.gomes@gmail.com
http://www.github.com/everaldo

Baseado no Livro: Desenvolva Jogos com HTML5, Canvas e Javascript
Autor: Éderson Cássio

*/

function Game(context, frames_segundo){
  this.context = context;
  this.elementos = [];
  this.total_frames = 0;
  this.frames_segundo = frames_segundo;
  this.tempo = new Tempo();
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
  for(var i in this.elementos){
    this.elementos[i].atualizar();
  }
}

Game.prototype.desenhar = function(){
  for(var i in this.elementos){
    this.elementos[i].desenhar();
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
