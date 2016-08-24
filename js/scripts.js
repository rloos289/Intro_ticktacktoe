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

function generateSpaces (a,b) {
  var spaceArray = [];
  var newSpace;
  for (var x = 1; x <= a; x++) {
    for (var y = 1; y <= b; y++) {
      spaceArray.push(newSpace = new space (false, x, y));
    }
  }
  return spaceArray;
}

function space (marked, x, y) {
  this.mark = marked
  this.spacex = x
  this.spacey = y
}

//<!-- Front End  -->
$(document).ready(function(){

});
