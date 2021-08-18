import React from "react";

function Button(props) {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState("white");

  function handleOnBtnClick() {
    setCount(count + 1);
    setColor(color === "white" ? "blue" : "white");
  }
  return (
    <div>
      <button
        className="Button-container"
        onClick={handleOnBtnClick}
        style={{ background: color }}
      >
        click me
      </button>
      <p>you clicked {count} times</p>
    </div>
  );
}

export default Button;
