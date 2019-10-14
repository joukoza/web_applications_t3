var player = 1;
var the_cell;
var string;
var cell_location;
var timer = 0;
var width = 0;
var width_string;

function table_cell(y, x) {
  cell_location = String("cell" + y + x);
  string = String(document.getElementById(cell_location).innerHTML);
  return string;
}

function win_check() {
  if (
    table_cell(1, 1) +
      table_cell(1, 2) +
      table_cell(1, 3) +
      table_cell(1, 4) +
      table_cell(1, 5) ===
      "xxxxx" ||
    table_cell(2, 1) +
      table_cell(2, 2) +
      table_cell(2, 3) +
      table_cell(2, 4) +
      table_cell(2, 5) ===
      "xxxxx" ||
    table_cell(3, 1) +
      table_cell(3, 2) +
      table_cell(3, 3) +
      table_cell(3, 4) +
      table_cell(3, 5) ===
      "xxxxx" ||
    table_cell(4, 1) +
      table_cell(4, 2) +
      table_cell(4, 3) +
      table_cell(4, 4) +
      table_cell(4, 5) ===
      "xxxxx" ||
    table_cell(5, 1) +
      table_cell(5, 2) +
      table_cell(5, 3) +
      table_cell(5, 4) +
      table_cell(5, 5) ===
      "xxxxx" ||
    table_cell(1, 1) +
      table_cell(2, 2) +
      table_cell(3, 3) +
      table_cell(4, 4) +
      table_cell(5, 5) ===
      "xxxxx" ||
    table_cell(1, 1) +
      table_cell(2, 1) +
      table_cell(3, 1) +
      table_cell(4, 1) +
      table_cell(5, 1) ===
      "xxxxx" ||
    table_cell(1, 2) +
      table_cell(2, 2) +
      table_cell(3, 2) +
      table_cell(4, 2) +
      table_cell(5, 2) ===
      "xxxxx" ||
    table_cell(1, 3) +
      table_cell(2, 3) +
      table_cell(3, 3) +
      table_cell(4, 3) +
      table_cell(5, 3) ===
      "xxxxx" ||
    table_cell(1, 4) +
      table_cell(2, 4) +
      table_cell(3, 4) +
      table_cell(4, 4) +
      table_cell(5, 4) ===
      "xxxxx" ||
    table_cell(1, 5) +
      table_cell(2, 5) +
      table_cell(3, 5) +
      table_cell(4, 5) +
      table_cell(5, 5) ===
      "xxxxx" ||
    table_cell(1, 5) +
      table_cell(2, 4) +
      table_cell(3, 3) +
      table_cell(4, 2) +
      table_cell(5, 1) ===
      "xxxxx"
  ) {
    alert("Player 1 won!");
  }
  if (
    table_cell(1, 1) +
      table_cell(1, 2) +
      table_cell(1, 3) +
      table_cell(1, 4) +
      table_cell(1, 5) ===
      "ooooo" ||
    table_cell(2, 1) +
      table_cell(2, 2) +
      table_cell(2, 3) +
      table_cell(2, 4) +
      table_cell(2, 5) ===
      "ooooo" ||
    table_cell(3, 1) +
      table_cell(3, 2) +
      table_cell(3, 3) +
      table_cell(3, 4) +
      table_cell(3, 5) ===
      "ooooo" ||
    table_cell(4, 1) +
      table_cell(4, 2) +
      table_cell(4, 3) +
      table_cell(4, 4) +
      table_cell(4, 5) ===
      "ooooo" ||
    table_cell(5, 1) +
      table_cell(5, 2) +
      table_cell(5, 3) +
      table_cell(5, 4) +
      table_cell(5, 5) ===
      "ooooo" ||
    table_cell(1, 1) +
      table_cell(2, 2) +
      table_cell(3, 3) +
      table_cell(4, 4) +
      table_cell(5, 5) ===
      "ooooo" ||
    table_cell(1, 1) +
      table_cell(2, 1) +
      table_cell(3, 1) +
      table_cell(4, 1) +
      table_cell(5, 1) ===
      "ooooo" ||
    table_cell(1, 2) +
      table_cell(2, 2) +
      table_cell(3, 2) +
      table_cell(4, 2) +
      table_cell(5, 2) ===
      "ooooo" ||
    table_cell(1, 3) +
      table_cell(2, 3) +
      table_cell(3, 3) +
      table_cell(4, 3) +
      table_cell(5, 3) ===
      "ooooo" ||
    table_cell(1, 4) +
      table_cell(2, 4) +
      table_cell(3, 4) +
      table_cell(4, 4) +
      table_cell(5, 4) ===
      "ooooo" ||
    table_cell(1, 5) +
      table_cell(2, 5) +
      table_cell(3, 5) +
      table_cell(4, 5) +
      table_cell(5, 5) ===
      "ooooo" ||
    table_cell(1, 5) +
      table_cell(2, 4) +
      table_cell(3, 3) +
      table_cell(4, 2) +
      table_cell(5, 1) ===
      "ooooo"
  ) {
    alert("Player 2 won!");
  }
}

function cell_click(id) {
  the_cell = "cell" + id;
  if (player === 1) {
    document.getElementById(the_cell).innerHTML = "x";
    document.getElementById(the_cell).style.backgroundColor = "#7CFC00";
    player = 2;
    timer = 0;
  } else {
    document.getElementById(the_cell).innerHTML = "o";
    document.getElementById(the_cell).style.backgroundColor = "#FA8072";
    player = 1;
    timer = 0;
  }
  win_check();
}

setInterval(function funky_timer() {
  timer++;
  width = width + 10;
  width_string = String(width) + "%";
  document.getElementById("baari").style.width = width;
  if (timer === 10 && player === 1) {
    player = 2;
    timer = 0;
    width = 0;
  } else if (timer === 10 && player === 2) {
    player = 1;
    timer = 0;
    width = 0;
  }
}, 1000);
window.cell_click = cell_click;
