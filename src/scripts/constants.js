export const GRID_SIZE = 4;

export const INITIAL_STATE = Array(GRID_SIZE)
  .fill(null)
  .map(() => Array(GRID_SIZE).fill(0));

export const TARGET_TILE = 2048;

export const GAME_STATUS = {
  READY: 'ready',
  PLAYING: 'playing',
  WIN: 'win',
  GAMEOVER: 'gameover',
};

export const KEYBOARD = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
};
