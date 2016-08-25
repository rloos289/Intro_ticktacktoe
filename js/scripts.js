//<!-- Back End -->
// function game (turn,victory,players,board,spaces) {
//   this.turn = turn;
//   this.win = victory;
//   this.players = players;
//   this.board = board;
//   this.space = spaces;
// }
//
// function board (spaces, marked, coordinates, newboard) {
//
// }
//





function generateBoard (array) {

}


function createPlayers() {
  var playerarray = [];
  var player1 = new player('X', true, [], game); //for testing
  var player2 = new player('O', false, []);
  playerarray.push(player1, player2);
  return playerarray;
}

function player(piece, turn, array, overlord) {
  this.piece = piece;
  this.turn = turn;
  this.winarray= array;
  this.overlord = overlord;
}

function generateSpaces (a,b) {
  var spaceArray = [];
  var newSpace;
  for (var x = 1; x <= a; x++) {
    for (var y = 1; y <= b; y++) {
      spaceArray.push(newSpace = new space ( x, y));
    }
  }
  return spaceArray;
}

function space (x, y) {
  this.mark =
  this.spacex = x
  this.spacey = y
}


//<!-- Front End  -->
$(document).ready(function(){
  $('#createGame').click(function (){
    var playerarray = createPlayers();
    var player1 = playerarray[0];
    var player2 = playerarray[1];

    var array = generateSpaces(3,3);
    $('.space').click(function() {
      var id = parseInt($(this).attr('id'));
      if (($(this).hasClass('backgroundX'))|| (($(this).hasClass('backgroundO')))) {
        return;
      }
      if (player1.turn) {
        $(this).addClass('backgroundX');
        var value = $(this).data('value');
        player1.addMark(value, array, id);
        if (fuck.test(player1.winarray)) {
          console.log("Player One Wins!")
          // var array = [];
          console.log(array);
        }
        player1.turnSwitch();
        player2.turnSwitch();
      } else {
        var value = $(this).data('value');
        player1.addMark(value, array, id);
        if (fuck.test(player2.winarray)) {
          console.log("Player Two Wins!")
          // var array = [];
          console.log(array);
        }
        player2.turnSwitch();
        player1.turnSwitch();
        $(this).addClass('backgroundO');
      }
    });
  });
});
