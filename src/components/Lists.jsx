import React, { useState } from "react";

function Lists(props) {
  const [isDone, setDone] = useState(false);

  function handleClick() {
    setDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div onClick={handleClick}>
      <ul>
        <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
          {props.item}
        </li>
      </ul>
    </div>
  );
}

export default Lists;
