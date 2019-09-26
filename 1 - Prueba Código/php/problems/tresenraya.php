<?php
/*
	Vamos a crear un juego de tres en raya y necesitamos controlar el estado del
	tablero. Para ello, crearemos una función.

	Supongamos que el tablero viene en la forma de un array de 3x3, en el que
	el valor es 0 si la casilla está vacía, 1 si es una X y 2 si es una O, tal
	que así:

	[[0,0,1],
	 [0,1,2],
	 [2,1,0]]

	Lo que queremos es que nuestra función devuelva -1 si el tablero no está
	resuelto, 1 si han ganado las X, 2 si han ganado las O y 0 en caso de
	empate.

	Supondremos que el tablero que se pasa como entrada siempre es válido, dado
	que estamos dentro del contexto de nuestro juego.
*/

/**
 * [
   [0,0,1],
   [0,1,2],
   [2,1,0]
 * ]
 * @param array $board
 * @return int -1 not resolved, 1 win X, 2 win O
 */
function boardState(array $board): int
{
    $board = array_flatten($board);

    if (is_win($board, 1))
        return 1;

    if (is_win($board, 2))
        return 2;

    if (in_array(0, $board))
        return -1;

    return 0;
}

function is_win($board, $player){
    return (
        ($board[0] == $player && $board[1] == $player && $board[2] == $player) ||
        ($board[3] == $player && $board[4] == $player && $board[5] == $player) ||
        ($board[6] == $player && $board[7] == $player && $board[8] == $player) ||
        ($board[0] == $player && $board[3] == $player && $board[6] == $player) ||
        ($board[1] == $player && $board[4] == $player && $board[7] == $player) ||
        ($board[2] == $player && $board[5] == $player && $board[8] == $player) ||
        ($board[0] == $player && $board[4] == $player && $board[8] == $player) ||
        ($board[2] == $player && $board[4] == $player && $board[6] == $player)
    );
}

function array_flatten(array $sourceArray)
{
    $iterator = new RecursiveIteratorIterator(
        new RecursiveArrayIterator($sourceArray),
        RecursiveIteratorIterator::LEAVES_ONLY
    );
    $flattenedArray = [];
    foreach ($iterator as $item) {
        $flattenedArray[] = $item;
    }
    return $flattenedArray;
}
