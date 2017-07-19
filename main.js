let redDiv = document.getElementById("red");
let button = document.getElementById("button");

function grow(){
  redDiv.style.width = "200px";
  redDiv.style.height = "200px";
  redDiv.style.backgroundColor = "blue";
  setTimeout(function() {
    redDiv.style.width = "100px";
    redDiv.style.height = "100px";
    redDiv.style.backgroundColor = "red";
  }, 3000);
}

button.addEventListener("click", grow)
