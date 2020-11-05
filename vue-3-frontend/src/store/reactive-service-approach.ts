// Using reactivity

import { reactive, ref, provide, readonly, inject, toRefs } from 'vue';
import { mapTypeToIconInfo } from '@/utils/tile-utils';

export interface Player {
  name: string;
  strength: number;
}

export interface GameCell {
  row: number;
  col: number;
  occupants: Player[]
}

export interface Position {
  row: number;
  col: number;
}

export interface GameState {
  rows: number;
  cols: number;
  board: Array<Array<GameCell>>;
  lastMove: string;
  currentPosition: Position
}

const backgroundTile = mapTypeToIconInfo('mountains');
const playerTile = mapTypeToIconInfo('player');


const state = reactive({
  rows: 1,
  cols: 1,
  board: new Array(),
  lastMove: '',
  currentPosition: { row: 3, col: 2 } as Position
});

const createBoard = (rows: number, cols: number) => {
  // build board to size
  state.board = new Array(rows);
  state.rows = rows;
  state.cols = cols;
  for (let row = 1; row <= rows; row++) {
    state.board[row] = new Array(cols);
    for (let col = 1; col <= cols; col++) {
      state.board[row][col] = {
        row, col, occupants: []
      };
    }
  }
}
const legalMoves = ['N', 'S', 'E', 'W'];

const move = (direction: string): void => {
  if (legalMoves.filter(m => direction && direction === m).length > 0) {
    state.lastMove = direction;
  }
};

const calcTile = (row: number, col: number) => {
  if (state.currentPosition.row === row &&
    state.currentPosition.col === col) {
    return playerTile;
  } else {
    return backgroundTile;
  }
}

setInterval(() => {
  state.currentPosition = {row: Math.ceil(Math.random() * state.rows), col: Math.ceil(Math.random() * state.cols)};
}, 500);

export { state, createBoard, calcTile, move };
