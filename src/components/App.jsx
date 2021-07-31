import React from "react";

//Increase the counter.

var counter = 0;

function Increase(){
  counter++;
  console.log(counter);
}

function App(){
  return (<div className="container">
  <h1>{counter}</h1>
  <button onClick={Increase}>+</button>
</div>)
};

export default App;