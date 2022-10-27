let cells = document.querySelectorAll("body main section article"),
  turn = "X",
  turnP = document.querySelector("p"),
  win = false;
for (let i = 0; i < cells.length; i++) {
  let cel = cells[i];
  cel.onclick = (e) => {
    if (!win && e.target.innerHTML === "" && turn == "X") {
      e.target.innerHTML = "X";
      turn = "O";
      turnP.innerText = "Its O Turn";
    } else if (!win && e.target.innerHTML === "" && turn == "O") {
      e.target.innerHTML = "O";
      turn = "X";
      turnP.innerText = "Its X Turn";
    } else if (!win) {
      cel.classList.add("shake");
      setTimeout(() => {
        cel.classList.remove("shake");
      }, 1000);
    }
    if (
      (cells[0].innerHTML == "X" &&
        cells[1].innerHTML == "X" &&
        cells[2].innerHTML == "X") ||
      (cells[0].innerHTML == "X" &&
        cells[3].innerHTML == "X" &&
        cells[6].innerHTML == "X") ||
      (cells[1].innerHTML == "X" &&
        cells[4].innerHTML == "X" &&
        cells[7].innerHTML == "X") ||
      (cells[2].innerHTML == "X" &&
        cells[5].innerHTML == "X" &&
        cells[8].innerHTML == "X") ||
      (cells[3].innerHTML == "X" &&
        cells[4].innerHTML == "X" &&
        cells[5].innerHTML == "X") ||
      (cells[6].innerHTML == "X" &&
        cells[7].innerHTML == "X" &&
        cells[8].innerHTML == "X") ||
      (cells[0].innerHTML == "X" &&
        cells[4].innerHTML == "X" &&
        cells[8].innerHTML == "X") ||
      (cells[2].innerHTML == "X" &&
        cells[4].innerHTML == "X" &&
        cells[6].innerHTML == "X")
    ) {
      turnP.innerText = "X Wins :)";
      win = true;
    }
    if (
      (cells[0].innerHTML == "O" &&
        cells[1].innerHTML == "O" &&
        cells[2].innerHTML == "O") ||
      (cells[0].innerHTML == "O" &&
        cells[3].innerHTML == "O" &&
        cells[6].innerHTML == "O") ||
      (cells[1].innerHTML == "O" &&
        cells[4].innerHTML == "O" &&
        cells[7].innerHTML == "O") ||
      (cells[2].innerHTML == "O" &&
        cells[5].innerHTML == "O" &&
        cells[8].innerHTML == "O") ||
      (cells[3].innerHTML == "O" &&
        cells[4].innerHTML == "O" &&
        cells[5].innerHTML == "O") ||
      (cells[6].innerHTML == "O" &&
        cells[7].innerHTML == "O" &&
        cells[8].innerHTML == "O") ||
      (cells[0].innerHTML == "O" &&
        cells[4].innerHTML == "O" &&
        cells[8].innerHTML == "O") ||
      (cells[2].innerHTML == "O" &&
        cells[4].innerHTML == "O" &&
        cells[6].innerHTML == "O")
    ) {
      turnP.innerText = "O Wins :)";
      win = true;
    }
    if (
      cells[2].innerHTML == "O" &&
      cells[4].innerHTML == "O" &&
      cells[7].innerHTML == "O"
    ) {
      turnP.innerText = "O Wins واسطة :)";
      win = true;
    } else if (
      cells[2].innerHTML == "X" &&
      cells[4].innerHTML == "X" &&
      cells[7].innerHTML == "X"
    ) {
      turnP.innerText = "X Wins واسطة :)";
      win = true;
    }
  };
}
