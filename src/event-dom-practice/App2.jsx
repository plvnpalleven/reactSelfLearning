import React from "react";

function App() {
  const handleClick = () => {
    alert("Hello! You clicked the button.");
  };

  return (
    <div>
      <h1>React Event Example</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
