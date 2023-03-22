import Board from "./board.js";

let board = new Board(); // creates a new game board

function eListener(row, column, cell) {
  cell.addEventListener("click", () => {
    let input = board.makeHit(row, column);
    if (!input) {
      console.log(`Miss!`);
      let grabCell = document.getElementById(`${row}${column}`);
      grabCell.style.backgroundColor = "#FF0000";
    } else {
      console.log(`Hit`);
      let grabCell = document.getElementById(`${row}${column}`);
      grabCell.style.backgroundColor = "#00FF00";
      grabCell.style.height = "10px";
      grabCell.style.verticalAlign = "center";
      grabCell.style.fontSize = "25px";
      grabCell.innerText = `${input}`;
    }
    // else it turns the cell red and saves it to localStorage
  });
}
// initialize the game board, set attributes and append it to body
let boardContainer = document.createElement("div");
boardContainer.setAttribute("id", "board-container");
document.body.append(boardContainer);

// populate with cells
let table = document.createElement("table");
for (let i = 0; i < board.numRows; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < board.numCols; j++) {
    let cell = document.createElement("td");
    cell.setAttribute("id", `${i}${j}`);
    console.log(i, j);
    cell.dataset.row = i;
    cell.dataset.col = j;
    eListener(i, j, cell);

    row.appendChild(cell);
  }
  table.appendChild(row);
}

boardContainer.append(table);

let title = document.getElementById("title");
title.style.width = "450px";
title.style.height = "50x";
title.style.textAlign = "center";

// will do an event listner for a click

// if hit (red) else (blue)

// ('click', makeHit(row, col))

// Examine the grid of the game board in the browser console.

// Create the UI of the game using HTML elements based on this grid.

console.log(board.grid);

// Your code here
