# _Template_

#### By _Ryan Loos_

## Description

_A template website that has confirmed functional Javascript, CSS, Bootstrap (v3.3.7), and jQuery(v3.1.0)_

## Setup/Installation Requirements

##BDD

* _Copy the repository from GitHub_
* _Open the index.html file a browser of your choice_
* _Open the console to confirm that javascript and jQuery are running_

##BDD
Front End
{-3x3 grid
 -individual ids for each box, onclick trigger the correct symbol
  -automatically triggers move to other player's turn
  -in each div put picture of X and O and hide them}
-indicator of who's turn
-error/prevent player from clicking an already chosen box
-reset button
-victory condition (use coordinates to check win conditions, if check if x or y go up, make sure its in the same row or column). check for horizontal, diagonal, and vertical win.

Back End
  -four constructors
  -2 player, 9 spaces, 1 board, 1 game (all objects)
  -game {
    players {}
    board {
      spaces
    }
  }
  -game: turn, win-state, players, board, spaces
  -board: spaces, which spaces marked by which player, return space by coordinates, generate board
  -player: turn, which symbol
  -spaces: if marked and by who, coordinates
f






## GitHub link
https://github.com/rloos289/Template

## Licensing

* MIT

Copyright (c) 2016 **_Ryan Loos_**
