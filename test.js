const board = [1,2,3,4,5,6,7,8,9]
const newArr = []
newArr.push(board.slice(0,3))
newArr.push(board.slice(3,6))
newArr.push(board.slice(6,9))
console.log(newArr);
