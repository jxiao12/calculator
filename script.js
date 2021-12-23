var display = document.querySelector("#display");

function press(num){
  if (num == ".") {

  } else {
    var result = document.querySelector("#display");
    display += num;
    result.innerHTML = display;
  }
}

function setOP(operation){
  var result = document.querySelector("#display");
  if (operation === "+") {

  } else if (operation === "-") {

  } else if (operation === "*") {

  } else if (operation === "/") {

  }
}

function calculate(){

}

function clr(){
  display = 0;
  var result = document.querySelector("#display");
  result.innerHTML = 0;
}
