import React, { useState } from "react";
import Lists from "./Lists";

function App() {
  const [text, setText] = useState("");
  const [input, setInput] = useState([]);

  function handleChange(event) {
    const newVal = event.target.value;
    setText(newVal);
  }

  function handleClick() {
    setInput(function (prevValue) {
      return [...prevValue, text];
    });
    setText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={text} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {input.map((value, index) => {
          return <Lists key={index} item={value} />;
        })}
      </div>
    </div>
  );
}

export default App;
