function createSquare(squareSize) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.style.height = squareSize;
  square.style.width = squareSize;
  square.style.backgroundColor = 'blue';
  square.style.borderColor = 'red';
  square.style.borderStyle = 'solid';
  square.style.boxSizing = 'border-box';
  
  return square;
}

const sketchContainer = document.getElementById('sketch-container');
const square = createSquare('100px');
sketchContainer.appendChild(square);
