import React, { useState } from "react";

function App() {
  const [cakeInput, setCakeInput] = useState("");
  const [cakeList, setCakeList] = useState([]);

  const handleNewCake = (event) => setCakeInput(event.target.value);
  const handleAddCake = () => {
    if (cakeInput.trim() != "") {
      setCakeList([...cakeList, cakeInput]);
      setCakeInput("");
    }
  };

  return(
    <div>
        <input type="text" placeholder="Input your cake......" onChange={handleNewCake} value={cakeInput}/>
        <button onClick={handleAddCake}>Add</button>
        <ul>
            {cakeList.map((cake,index)=>(
                <li key={index}>{cake}</li>
            ))}
        </ul>
    </div>
  )
}
export default App;
