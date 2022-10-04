var rotate = document.querySelectorAll("button[class]");
var cube = document.getElementsByClassName('cube')[0];
var referenceNames = document.querySelectorAll("[id=reference-names]");
var about = document.querySelectorAll("[id=about]").div;
console.log(about);

function Rotate(side){
    if(side === "move-front"){
      cube.style.transform = "translateZ(-2vw) rotateY(0deg)";
    } else if(side === "move-right"){
      cube.style.transform = "translateZ(-2vw) rotateY( -90deg)";
      console.log("Hi");
    } else if(side === "move-back"){
      cube.style.transform = "translateZ(-2vw) rotateY(-180deg)";
      /*text.style.transform = "translateZ(10vw) rotateY(-180deg)";*/
    } else if(side === "move-left"){
      cube.style.transform = "translateZ(-2vw) rotateY(  90deg)";
    } else if(side === "move-top"){
      cube.style.transform = " translateZ(-2vw) rotateX( -90deg)";
    } else if(side === "move-bottom"){
      cube.style.transform = "translateZ(-2vw) rotateX(  90deg)";
    }
}

rotate.forEach((button) => {
  button.addEventListener('click', (event) =>{
      /*console.log(button.getAttribute('class'));*/
      Rotate(button.getAttribute('class'));
  });
});
