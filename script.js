var eq = "";
var number = [];
var opera = [];

function press(num){
  var display = document.querySelector("#display");
  eq += num;
  display.innerHTML = eq;
}

function setOP(operation){
  number.push(parseFloat(eq));
  if (operation === "+") {
    opera.push("+");
  } else if (operation === "-") {
    opera.push("-");
  } else if (operation === "*") {
    opera.push("*");
  } else if (operation === "/") {
    opera.push("/");
  }
  eq = "";
}

function calculate(){
  number.push(parseFloat(eq));
  var result = number[0];
  for (var i = 0; i < opera.length; i++) {
    if (opera[i] == "+") {
      result += number[i + 1];
    }else if (opera[i] == "-") {
      result -= number[i + 1];
    }else if (opera[i] == "*") {
      result *= number[i + 1];
    }else if (opera[i] == "/") {
      result /= number[i + 1];
    }
  }
  var display = document.querySelector("#display");
  display.innerHTML = result;
  number = [];
  opera = [];
  eq = result;
}

function clr(){
  number = [];
  eq = "";
  var display = document.querySelector("#display");
  display.innerHTML = 0;
  opera = [];
}
