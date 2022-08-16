// yes
document.getElementById("yes").addEventListener("click", () => {
  document.getElementById("message").innerText = "You clicked Yes!! 😄";
//  sentMsg('message');
//   const id = setInterval(() => {
//     function random(number) {
//         return Math.floor(Math.random() * (number + 1));
//       }
//     const randomColor = `rgb(${random(255)},${random(255)},${random(255)}`;
//     document.body.style.backgroundColor = randomColor;
//   }, 700);

});
// no
function reject() {
  document.getElementById("message").innerText = "You clicked No!! 😫";
// sentMsg('message');

}

// function
// function sentMsg(id) {
//   document.getElementById(id).innerText = "Message recieved using function 👍"; 
// }
