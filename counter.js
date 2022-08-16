let count = 0;
// with event handler
function plusOne(){
    count++;
    document.getElementById('count').innerText=count; 
}

// with event listener
const countText = document.getElementById('count');

const plusBtn = document.getElementById("plus-btn");
// plusBtn.addEventListener("click", () => {
//     count++;
//     // document.getElementById('count').innerText=count;
//     // countText.innerText = count;
    
// });

const minusBtn = document.getElementById("minus-btn");
minusBtn.addEventListener('click',()=>{
    count--;
    document.getElementById('count').innerText=count;
})

//clock
// function random(number){
//     return Math.floor(Math.random()*(number+1));
// };
// const id = setInterval(() => {
//     count++;
//     countText.innerText = count;
//     const randomColor =  `rgb(${random(255)},${random(255)},${random(255)}`;
//     document.getElementById('count').style.color = randomColor;
//     const randomColor2 =  `rgb(${random(200)},${random(200)},${random(200)}`;
//     document.body.style.backgroundColor = randomColor2;
// }, 1000);



 





