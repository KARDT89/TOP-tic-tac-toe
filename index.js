const Gameboard = (function () {
  const rows = 3;
  const columns = 3;
  const board = [];
  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push(null);
    }
  }

  const getBoard = () => board;

  const makeMove = (number, player) => {
    const row = Math.floor((number - 1) / 3);
    const column = (number - 1) % 3;
    board[row][column] = player
  };

  return { getBoard, makeMove };
})();





