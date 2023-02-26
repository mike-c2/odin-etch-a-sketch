function createSquare(squareHeight, squareWidth) {
  const square = document.createElement('div');
  square.style.height = squareHeight + 'px';
  square.style.width = squareWidth + 'px';
  square.style.backgroundColor = '#000000';
  square.style.opacity = '0';
  square.style.boxSizing = 'border-box';

  square.addEventListener('mouseover', darkenSquare);

  return square;
}

function darkenSquare() {
  let opacity = Number(this.style.opacity);

  if(opacity < 1) {
    opacity += 0.1;
  }

  this.style.opacity = opacity.toString();

  if(opacity >= 1) {
    this.removeEventListener('mouseover', darkenSquare);
  }
}

function createGrid(numberOfRows, numberOfColumns) {
  const sketchScreen = document.getElementById('sketch-screen');
  
  height = sketchScreen.offsetHeight;
  width = sketchScreen.offsetWidth;

  const grid = document.createElement('div');
  grid.style.height = height + 'px';
  grid.style.width = width + 'px';
  grid.style.backgroundColor = 'silver';
  grid.style.boxSizing = 'border-box';
  grid.style.display = 'grid';
  sketchScreen.appendChild(grid);

  const squareHeight = Math.floor(height / numberOfRows);
  const squareWidth = Math.floor(width / numberOfColumns);

  grid.style.gridTemplateColumns = `repeat(${numberOfColumns}, 1fr)`;

  for(let i = 0; i < numberOfRows * numberOfColumns; i++) {
    grid.appendChild(createSquare(squareHeight, squareWidth));
  }

  return grid;
}

createGrid(100, 100);
