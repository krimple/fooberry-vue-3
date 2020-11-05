import Vuex, { StoreOptions } from 'vuex'
import { mapTypeToIconInfo } from '@/utils/tile-utils';
import { state } from '@/store/reactive-service-approach';

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
const legalMoves = ['N', 'S', 'E', 'W'];

export const createGameStore  = (rows: number, cols:number) => {
  // set up initial state
  let state = {} as GameState;
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

  // create state root
  const store: StoreOptions<GameState> = {
    state: {
      ...state
    },
    getters: {
      calcTile: (state) => (row: number, col: number) => {
        //eslint-disable-next-line
        // debugger;
        if (state?.currentPosition?.row === row &&
          state?.currentPosition?.col === col) {
          return playerTile;
        } else {
          return backgroundTile;
        }
      }
    },
    mutations: {
      moveNorth(state) {
        console.log('moving north!');
        state.lastMove = 'north';
      },
      moveSouth(state) {
        state.lastMove = 'south';
      },
      moveEast(state) {
        state.lastMove = 'east';
      },
      moveWest(state) {
        state.lastMove = 'west';
      },
      randomPosition(state: GameState) {
        const newPosition =  { row: Math.ceil(Math.random() * state.rows), col: Math.ceil(Math.random() * state.cols)};
        state.currentPosition = newPosition;
      }
    },
    actions: {
    },
    modules: {
    }
  };

  return new Vuex.Store<GameState>(store);

}
