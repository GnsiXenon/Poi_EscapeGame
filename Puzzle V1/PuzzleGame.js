const canvas = document.getElementById("Puzzle");
const ctx = canvas.getContext("2d");

const image = new Image();
image.onload = function() {
  initializePieces();
  drawPieces();
};

//taille de l'image par rapport à la taille du canvas
image.src = "abc.png";

const pieces = [];
let selectedPiece = null;
let offsetX, offsetY;
let win = false;

function initializePieces() {
  const row = 5;
  const col = 5;
  const pieceWidth = image.width / row;
  const pieceHeight = image.height / col;
  for (let x = 0; x < row; x++) {
    for (let y = 0; y < col; y++) {
      pieces.push({
        gap : 50,
        x: Math.floor(Math.random() * (canvas.width - pieceWidth)),
        y: Math.floor(Math.random() * (canvas.height - pieceHeight)),
        width: pieceWidth,
        height: pieceHeight,
        imageX: x * pieceWidth,
        imageY: y * pieceHeight,
        block : false
      });
    }
  }
  console.log(pieces);
}
function drawPuzzlePiece(piece, x, y, width, height) {
  const curveSize = 10;
  ctx.beginPath();
  ctx.moveTo(x, y + curveSize);

  // Haut
  ctx.lineTo(x + width / 2 - curveSize, y);
  ctx.quadraticCurveTo(x + width / 2, y - curveSize, x + width / 2 + curveSize, y);
  ctx.lineTo(x + width - curveSize, y);

  // Droite
  ctx.lineTo(x + width, y + curveSize);
  ctx.quadraticCurveTo(x + width + curveSize, y + height / 2, x + width, y + height - curveSize);

  // Bas
  ctx.lineTo(x + width / 2 + curveSize, y + height);
  ctx.quadraticCurveTo(x + width / 2, y + height + curveSize, x + width / 2 - curveSize, y + height);
  ctx.lineTo(x + curveSize, y + height);

  // Gauche
  ctx.lineTo(x, y + height - curveSize);
  ctx.quadraticCurveTo(x - curveSize, y + height / 2, x, y + curveSize);

  ctx.closePath();
}



function drawPieces() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  pieces.forEach(function(piece) {

    ctx.drawImage(image, piece.imageX, piece.imageY, piece.width, piece.height, piece.x, piece.y, piece.width, piece.height);


    // Dessine les bordures
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.strokeRect(piece.imageX+piece.gap,piece.imageY+piece.gap, piece.width, piece.height);

  });
}






function IsFinish(){
  for (let i = 0; i < pieces.length; i++) {
    if (pieces[i].block == false) {
      return false;
    }
  };
  return true;
}

canvas.addEventListener("mousedown", function(event) { //Fonction qui s'active quand on clique sur la piece 
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;
  

  pieces.forEach(function(piece) {
    if (mouseX >= piece.x && mouseX < piece.x + piece.width && mouseY >= piece.y && mouseY < piece.y + piece.height) {
      selectedPiece = piece;
      offsetX = mouseX - piece.x;
      offsetY = mouseY - piece.y;
      //put selectedPiece a the end of the array pieces
      if (selectedPiece.block == true) {
        return;
      }
      pieces.splice(pieces.indexOf(selectedPiece), 1);
      pieces.push(selectedPiece);
      drawPieces();
    }
  });
});



canvas.addEventListener("mousemove", function(event) { // lors du déplacement de la piece
  if (selectedPiece) {
    if (selectedPiece.block == true) {
      return;
    }
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;
    selectedPiece.x = mouseX - offsetX;
    selectedPiece.y = mouseY - offsetY;
    drawPieces();
  }
});



canvas.addEventListener("mouseup", function(event) {
  //Checker si la piece est bien placée
  if (selectedPiece) {
    if (selectedPiece.x >= selectedPiece.imageX && selectedPiece.x < selectedPiece.imageX + selectedPiece.width && selectedPiece.y >= selectedPiece.imageY && selectedPiece.y < selectedPiece.height + selectedPiece.imageY) {
      selectedPiece.x = selectedPiece.imageX + selectedPiece.gap;
      selectedPiece.y = selectedPiece.imageY + selectedPiece.gap;
      selectedPiece.block = true;
//put selectedPiece a the start of the array pieces
      pieces.splice(pieces.indexOf(selectedPiece), 1);
      pieces.unshift(selectedPiece);
    }
  }
  drawPieces();
  if (IsFinish() && win == false) {
      //timer de 1 seconde
      setTimeout(function(){
        win = true;
        alert("Bravo !")
      }, 50);
  }
  selectedPiece = null;
});

canvas.addEventListener("touchend", function(event) {
  selectedPiece = null;
});
