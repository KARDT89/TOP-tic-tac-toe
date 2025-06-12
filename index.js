const Gameboard = (function () {
  let board = new Array(9).fill(null)

  const getBoard = () => board

  function makeMove(boxNumber, player){
    if(board[boxNumber-1] === null){
        board[boxNumber] = player
    }else{
        return "Invalid Move"
    }
  }
  const printBoard = () => {
    const size = 3;
    const visualBoard = [];

    for (let i = 0; i < board.length; i += size) {
    visualBoard.push(board.slice(i, i + size));
    }
    console.log(visualBoard);
  };
  
  return {getBoard, makeMove, printBoard}
})();

const GameController = function (player1 = "player one", player2 = "player two"){
    const player = [
        {
            name: player1,
            symbol: "X"
        },
        {
            name: player2,
            symbol: "Y"
        }
    ]
    let activePlayer = player[0]
    const switchActivePlayer = () => activePlayer === player[0] ? player[1] : player[0]
    const getActivePlayer = () => activePlayer

}
