function createSquare(squareSize) {
  const square = document.createElement('div');
  square.style.height = squareSize + 'px';
  square.style.width = squareSize + 'px';
  square.style.backgroundColor = 'blue';
  square.style.borderColor = 'red';
  square.style.borderStyle = 'solid';
  square.style.boxSizing = 'border-box';
  
  console.log(square.offsetHeight);
  console.log(square.offsetWidth);
  
  return square;
}

const sketchContainer = document.getElementById('sketch-container');
const square = createSquare(100);
sketchContainer.appendChild(square);
