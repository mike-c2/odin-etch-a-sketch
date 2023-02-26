function createSquare(squareHeight, squareWidth) {
  const square = document.createElement('div');
  square.style.height = squareHeight + 'px';
  square.style.width = squareWidth + 'px';
  square.style.backgroundColor = '#000000';
  square.style.opacity = '0';
  square.style.borderColor = 'red';
  square.style.borderStyle = 'solid';
  square.style.borderWidth = '1px';
  square.style.boxSizing = 'border-box';
  
  square.addEventListener('mouseover', darkenSquare);
  
  return square;
}

function darkenSquare() {
  console.log('event fired');
  let opacity = Number(this.style.opacity);
  
  if(opacity < 1) {
    opacity += 0.1;
  }
  
  if(opacity > 1) {
    opacity = 1;
  }
  
  this.style.opacity = opacity.toString();
  
  if(opacity === 1) {
    this.removeEventListener('mouseover', darkenSquare);
  }
}

function createGrid(gridHeight, gridWidth, numberOfRows, numberOfColumns) {
  const grid = document.createElement('div');
  grid.style.height = gridHeight + 'px';
  grid.style.width = gridWidth + 'px';
  grid.style.backgroundColor = '#ffffff';
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
