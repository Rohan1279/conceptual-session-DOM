function makeRed() {
  document.body.style.backgroundColor = "tomato";
}
function makeGreen() {
  document.body.style.backgroundColor = "tomato";
}
const greenBtn = document.getElementById("green-btn");
greenBtn.addEventListener(
  "click",
  () => (document.body.style.backgroundColor = "green")
);
