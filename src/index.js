import React from "react";
import ReactDOM from "react-dom";

//Increase the counter.

var counter = 0;

function Increase(){
  counter++;
  console.log(counter);
}

ReactDOM.render(
  <div className="container">
    <h1>{counter}</h1>
    <button onClick={Increase}>+</button>
  </div>,
  document.getElementById("root")
);
