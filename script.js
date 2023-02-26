function createSquare(squareHeight, squareWidth) {
  const square = document.createElement('div');
  square.style.height = squareHeight + 'px';
  square.style.width = squareWidth + 'px';
  square.style.backgroundColor = 'blue';
  square.style.borderColor = 'red';
  square.style.borderStyle = 'solid';
  square.style.boxSizing = 'border-box';
  
  return square;
}

function createGrid(gridHeight, gridWidth, numberOfRows, numberOfColumns) {
  const grid = document.createElement('div');
  grid.style.height = gridHeight + 'px';
  grid.style.width = gridWidth + 'px';
  grid.style.boxSizing = 'border-box';
  grid.style.display = 'grid';
  
  const squareHeight = Math.floor(gridHeight / numberOfRows);
  const squareWidth = Math.floor(gridWidth / numberOfColumns);
  
  grid.style.gridTemplateColumns = `repeat(${numberOfColumns}, ${squareWidth + 'px'})`;
  
  for(let i = 0; i < numberOfRows * numberOfColumns; i++) {
    grid.appendChild(createSquare(squareHeight, squareWidth));
  }
  
  return grid;
}



const sketchContainer = document.getElementById('sketch-container');
const grid = createGrid(500, 500, 10, 10);
sketchContainer.appendChild(grid);
