// let button = document.getElementById("batn");
let input = document.querySelector(".box");
let min = document.querySelector(".input1");
let max = document.querySelector(".input2");
let a, b;
function mathrandom(min, max) {
  min = Math.floor(min);
  max = Math.ceil(max);
  return Math.ceil(min + Math.random() * (max - min));
}

min.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    a = min.value;
    console.log(a);
  }
});
max.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    b = max.value;
    console.log(b);
    input.innerHTML = mathrandom(a, b);
  }
});
