document.addEventListener("DOMContentLoaded", () => {
  var squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.addEventListener("click", handleClick);
  });
});

function handleClick(event) {
  let square = event.target;
  let postion = square.id;

  if (handleMove(postion)) {
    setTimeout(() => {
      alert(`O Jogo acabou - O Vencedor foi o jogador ${playerTime}`);
    }, 10);
  }
  updateSquare(postion);
}

function updateSquare(postion) {
  let square = document.getElementById(postion.toString());
  var symbol = board[postion];
  square.innerHTML = `<div class='${symbol}'></div>`;
}

