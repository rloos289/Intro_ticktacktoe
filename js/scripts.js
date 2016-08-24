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

var fuck = /(?=.*2)(?=.*7)(?=.*6)|(?=.*9)(?=.*5)(?=.*1)|(?=.*4)(?=.*3)(?=.*8)|(?=.*2)(?=.*9)(?=.*4)|(?=.*7)(?=.*5)(?=.*3)|(?=.*6)(?=.*1)(?=.*8)|(?=.*2)(?=.*5)(?=.*8)|(?=.*4)(?=.*5)(?=.*6)/;

function generateBoard (array) {

}

function createPlayers() {
  var playerarray = [];
  var player1 = new player('X', true); //for testing
  var player2 = new player('O', false);
  playerarray.push(player1, player2);
  return playerarray;
}

function player(piece, turn) {
  this.piece = piece;
  this.turn = turn;
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

// shit that is useless
// function fuck() {
//   spaceindex = 1
//   for (var ridx = 1; ridx <= 3; ridx++) {
//     $('.game').append("<div class='row" + ridx + "'></div>");
//     for (var cidx = 1; cidx <= 3; cidx++) {
//       debugger;
//       // $('.game'+ (' row'+ ridx)).append("<div class='col-xs-4 space" + spaceindex  + "'></div>");
//       console.log('.game'+ (' row'+ ridx))
//       spaceindex++;
//     }
//   }
// }

//<!-- Front End  -->
$(document).ready(function(){
  $('#createGame').click(function (){
    var playerarray = createPlayers();
    var player1 = playerarray[0];
    var player2 = playerarray[1];

    var array = generateSpaces(3,3);
    console.log(player1);

    $('.space').click(function() {
      var id = parseInt($(this).attr('id'));
      if (($(this).hasClass('backgroundX'))|| (($(this).hasClass('backgroundO')))) {
        return;
      }
      console.log(array)
      if (player1.turn) {
        var value = $(this).data('value');
        console.log(value);
        array[id-1].mark = true;
        console.log(array[id-1]);
        player1.turn = false;
        player2.turn = true;
        $(this).addClass('backgroundX');
      } else {
        var value = $(this).data('value');
        console.log(value);
        array[id-1].mark = false;
        console.log(array[id-1]);
        player1.turn = true;
        player2.turn = false;
        $(this).addClass('backgroundO');
      }
    });
  });
});
