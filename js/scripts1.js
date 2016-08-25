// Back End
function Game(state) {
  this.player1 = new player('X', true, []);
  this.player2 = new player('O', false, []);
  this.spaces = {};
  this.gameState = state;
  this.fuck = /(?=.*1)(?=.*2)(?=.*3)|(?=.*4)(?=.*5)(?=.*6)|(?=.*7)(?=.*8)(?=.*9)|(?=.*1)(?=.*4)(?=.*7)|(?=.*2)(?=.*5)(?=.*8)|(?=.*3)(?=.*6)(?=.*9)|(?=.*1)(?=.*5)(?=.*9)|(?=.*3)(?=.*5)(?=.*7)/;
}

//attach to button

//Constructors
function space (x, y) {
  this.mark;
  this.spacex = x
  this.spacey = y
}

function player(piece, turn, array) {
  this.piece = piece;
  this.turn = turn;
  this.winarray= array;
}

//prototypes
Game.prototype.createSpaces = function () {
  var spaceArray = [];
  var newSpace;
  for (var x = 1; x <= 3; x++) {
    for (var y = 1; y <= 3; y++) {
      spaceArray.push(newSpace = new space (x, y));
    }
  }
  this.spaces = spaceArray;
}

Game.prototype.addMark = function(value) {
  if (this.player1.turn) {
    this.player1.winarray.push(value);
  } else {
    this.player2.winarray.push(value);
  }
  this.turnSwitch();
}

Game.prototype.turnSwitch = function() {
  if (this.player1.turn) {
    this.player1.turn = false;
    this.player2.turn = true;
} else {
  this.player1.turn = true;
  this.player2.turn = false;
}
}

Game.prototype.winTest = function() {
  var winner = '';
  if(this.fuck.test(this.player1.winarray)){
    winner = 'X'
    this.gameState = false;
  } else if(this.fuck.test(this.player2.winarray)){
    winner = 'O'
    this.gameState = false;
  }
  return winner;
}

function gameWipe() {
  $('.space').removeClass('backgroundX');
  $('.space').removeClass('backgroundO');
  $('.space').removeClass('backgroundC');
}
// Game.prototype.gameWipe();
// Front End
$(document).ready(function(){
  var game;
  $('#createGame').click(function (){
    gameWipe();
    game = new Game(true);
  });
  $('.space').click(function() {
    var id = parseInt($(this).attr('id'));
    if (($(this).hasClass('backgroundX'))|| (($(this).hasClass('backgroundO'))||(($(this).hasClass('backgroundC'))))) {
      return;
    }
    if (game.player1.turn) {
      $(this).addClass('backgroundX');
    } else {
      $(this).addClass('backgroundO');
    }
    game.addMark(id);
    if (game.winTest() === 'X') {
      $('#results').text('Player 1 Wins!');
    } else if (game.winTest() === 'O') {
      $('#results').text('Player 2 Wins!');
    }
    if(game.gameState === false) {
      $('.space').addClass('backgroundC');
    }
    if ((game.player1.winarray.length + game.player2.winarray.length) === 9) {
      $('.space').addClass('backgroundC');
      $('#results').text('You got a Cats Game!');
    }
  });
});
