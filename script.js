const canvas = document.getElementById("canvas");
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
let gap = 50;

function initializePieces() {
  const pieceWidth = image.width / 3;
  const pieceHeight = image.height / 5;
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 5; y++) {
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
}



function drawPieces() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  pieces.forEach(function(piece) {
    ctx.drawImage(image, piece.imageX, piece.imageY, piece.width, piece.height, piece.x, piece.y, piece.width, piece.height);
    ctx.lineWidth = 2;
  ctx.strokeStyle = "black";
  ctx.strokeRect(piece.imageX+piece.gap,piece.imageY+piece.gap, piece.width, piece.height);
  });
}


// function IsFinish(){
//   pieces.forEach(function(piece) {
//     if (piece.block == false) {
//       return false;
//     }
//   });
//   return true;
// }

canvas.addEventListener("mousedown", function(event) { //Fonction qui s'active quand on clique sur la piece 
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;
  

  pieces.forEach(function(piece) {
    if (mouseX >= piece.x && mouseX < piece.x + piece.width && mouseY >= piece.y && mouseY < piece.y + piece.height) {
      selectedPiece = piece;
      offsetX = mouseX - piece.x;
      offsetY = mouseY - piece.y;
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
    console.log(selectedPiece.block);
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
      // if (IsFinish()) {
      //   alert("Bravo");
      // }else{
      //   drawPieces();
      // }
      drawPieces();
    }
  }
  selectedPiece = null;
});

canvas.addEventListener("touchend", function(event) {
  selectedPiece = null;
});
