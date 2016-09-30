$(function(){
  FRAMES_POR_SEGUNDO = 60;

  canvas = document.getElementById("canvas");
  context = canvas.getContext("2d");
  game = new Game(context, [], FRAMES_POR_SEGUNDO);
  tela = new Tela(game);
  game.iniciar()
});
