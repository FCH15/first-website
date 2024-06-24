// Assignment

/* 

Cuando haces clic en el buton, que cambia
el color del fondo de pagina,
de verde a morado

event-listener

necesitas anadir un event-listener, 
al buton

*/

function changeBackgroundColor() {
  const bodyElement = document.querySelector("body");
  const currentBackgroundColor = bodyElement.style.backgroundColor;

  //console.log(currentBackgroundColor);

  if (currentBackgroundColor === "red") {
    bodyElement.style.backgroundColor = "rgb(135, 168, 130)";
  } else {
    bodyElement.style.backgroundColor = "red";
  }
}

function addButtonEventListener() {
  const buttonElement = document.querySelector("#background-changer");
  buttonElement.addEventListener("click", changeBackgroundColor);
}

addButtonEventListener();
