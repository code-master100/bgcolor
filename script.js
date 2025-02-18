//function changeColor() {
   // const colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink", "cyan"];
   // const randomColor = colors[Math.floor(Math.random() * colors.length)];
   // document.body.style.backgroundColor = randomColor;
//}
function changeColor() {
      let r = Math.trunc(Math.random() * 256);
      let g = Math.trunc(Math.random() * 256);
      let b = Math.trunc(Math.random() * 256);

     let body_bg = document.querySelector('body');
     body_bg.style.cssText =   `background-color: rgb(${r} ${g} ${b})`;

     let h2_bg = document.querySelector('h2');
     h2_bg.innerHTML =  `rgb(${r} ${g} ${b})`;

}