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
  
  while(sketchScreen.firstChild) {
    sketchScreen.removeChild(sketchScreen.firstChild);
  }
  
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

function promptForSquaresPerSide() {
  let promptMessage = 'Enter the number of squares per side that the drawing';
  promptMessage += ' area will use.  The drawing area size will stay the same,';
  promptMessage += ' so the higher the square number, the smaller the squares';
  promptMessage += ' will be.  This must be a number of at least 1 and no';
  promptMessage += ' more than 100.'

  let answer = prompt(promptMessage);
  
  while(isNaN(answer) || answer < 1 || answer > 100) {
    answer = prompt(`${answer} is not valid. ${promptMessage}`)
  }
  
  return Number(answer);
}

function clearSketchScreen() {
  const squaresPerSideNode = document.getElementById('squares-per-side');
  let squaresPerSide = Number(squaresPerSideNode.textContent);

  createGrid(squaresPerSide, squaresPerSide);
}

function updateSquaresPerSide() {
  const newSquaresPerSide = promptForSquaresPerSide();
  const squaresPerSideNode = document.getElementById('squares-per-side');
  
  squaresPerSideNode.textContent = newSquaresPerSide.toString();
  
  clearSketchScreen();
}

function setButtonEventListeners() {
  const change = document.getElementById('change-button');
  const clear = document.getElementById('clear-button');
  
  
  change.addEventListener('click', updateSquaresPerSide);

  clear.addEventListener('click', clearSketchScreen);
}

setButtonEventListeners();
createGrid(10, 10);
