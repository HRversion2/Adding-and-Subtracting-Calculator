let x = 0;
document.querySelector("#num-ctnr").textContent = x;
document.querySelector("#add").addEventListener("click", function () {
  x += 1;
  document.querySelector("#num-ctnr").textContent = x;
});

document.querySelector("#subtract").addEventListener("click", function () {
  x -= 1;
  document.querySelector("#num-ctnr").textContent = x;
});
