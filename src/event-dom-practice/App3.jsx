import React, { useState } from "react";

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1); // เพิ่มตัวนับทุกครั้งที่คลิก
  };

  return (
    <div>
      <h1>Click Counter Example</h1>
      <p>You clicked {clickCount} times!</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
