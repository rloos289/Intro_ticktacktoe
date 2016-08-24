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

function arrangeHTML () {
  var next = 0
  next ++;
  $('.game').append("<div class='space" + next + "'></div>");
}

function space (marked, x, y) {
  this.mark = marked
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
  $('.space').click(function() {
    var id = parseInt($(this).attr('id'));
    var array = generateSpaces(3,3);
    array[id-1].mark = true;
    console.log(array[id-1]);
  });
});
