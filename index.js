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
    // const visualBoard = [];

    for (let i = 0; i < board.length; i += size) {
      // visualBoard.push(board.slice(i, i + size));
      console.log(board.slice(i, i + size));
    }
    // console.log(visualBoard);
    console.log(" ");
  };

  const reset = () => board = new Array(9).fill(null);

  return { getBoard, makeMove, printBoard, reset };
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

    board.printBoard();
    const result = checkWin();
    if (result) {
      if (result === "draw") {
        console.log("Game Over: It's a draw.");
      } else {
        console.log(
          `Game Over: ${getActivePlayer().name} loses, ${result} wins!`
        );
      }
      return;
    }
    switchActivePlayer();
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
    let gameOver = false;
  const board = Gameboard.getBoard();
  for (let conditions of winConditions) {
    const [a, b, c] = conditions;
    let valueA = board[a - 1];
    let valueB = board[b - 1];
    let valueC = board[c - 1];

    if (valueA && valueA === valueB && valueA === valueC) {
      console.log(`${valueA} wins`);
        gameOver = true
      return valueA;
    }
  }

  if (board.every((cell) => cell !== null)) {
    console.log("It's a draw!");
    gameOver = true
    return "draw";
  }

  return null;
};

function ticTacToe(player1="tamal", player2="dt89"){
  const game = GameController(player1, player2)
  const boxes = document.querySelectorAll(".box")
  const gameStatus = document.querySelector(".display-winner")
  boxes.forEach((box, idx) => {
    box.addEventListener("click", () => {
      if(box.textContent === ""){
        const currentPlayer = game.getActivePlayer()
        box.textContent = currentPlayer.symbol
        game.startGame(idx + 1)
        const nextPlayer = game.getActivePlayer()
        const status = checkWin()
        // console.log("gui status", status);
        if (status === "draw") {
            gameStatus.innerHTML = `It's a Draw`;
          } else if (status !== null) {
            gameStatus.innerHTML = `${currentPlayer.name} Won!`;
          } else {
            gameStatus.innerHTML = `${nextPlayer.name}'s move`;
          }
      }
    })
  })
  
}

const displayController = () => {
  const gameBoard = document.querySelector(".gameboard");
  const form = document.querySelector("form");
  const status = document.querySelector(".display-winner")
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const player1 = e.target["player1"].value;
    const player2 = e.target["player2"].value;
    console.log("player1:", player1, "player2:", player2);
    // const game = GameController(player1, player2);
    if(player1 === "" || player2 === ""){
      status.innerHTML = "Enter player names to Start Game";
    }else {
      Gameboard.reset();
      gameBoard.innerHTML = "";
      for (let i = 1; i <= 9; i++) {
      const div = document.createElement("div");
      div.classList.add("box", `box-${i}`);
      gameBoard.appendChild(div);
    }
    ticTacToe(player1, player2)
    }
    
  });
};

displayController();
