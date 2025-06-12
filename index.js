const Gameboard = (function () {
  let board = new Array(9).fill(null);

  const getBoard = () => board;

  function makeMove(boxNumber, player) {
    if (board[boxNumber - 1] === null) {
      board[boxNumber - 1] = player;
    } else {
      return "Invalid Move";
    }
  }
  const printBoard = () => {
    const size = 3;
    const visualBoard = [];

    for (let i = 0; i < board.length; i += size) {
      // visualBoard.push(board.slice(i, i + size));
      console.log(board.slice(i, i + size));
    }
    // console.log(visualBoard);
    console.log(" ");
  };

  return { getBoard, makeMove, printBoard };
})();

const GameController = function (
  player1 = "player one",
  player2 = "player two"
) {
  const board = Gameboard;
  const player = [
    {
      name: player1,
      symbol: "X",
    },
    {
      name: player2,
      symbol: "Y",
    },
  ];
  let activePlayer = player[0];
  const switchActivePlayer = () =>
    (activePlayer = activePlayer === player[0] ? player[1] : player[0]);
  const getActivePlayer = () => activePlayer;

  const startGame = (box) => {
    board.makeMove(box, getActivePlayer().symbol);
    switchActivePlayer();
    board.printBoard();
  };

  return { startGame, getActivePlayer };
};

const checkWin = () => {
  const winConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  const gameOver = false;
  const { getBoard } = Gameboard;
  for (let i = 0; i < winConditions.length; i++) {
    const winner = getBoard().filter(winConditions[i].map((pattern) => ))
  }
};

const game = GameController();
game.startGame(1);
game.startGame(4);
game.startGame(6);
game.startGame(9);
