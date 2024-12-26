import React , {useState} from 'react';

function App() {
    const [inputValue,setInputValue] = useState("");
    const [displayMessage,setDisplayMessage] = useState("");

    const handleChange = (event) => setInputValue(event.target.value);
    const addMessage = (inputValue) => setDisplayMessage(inputValue);
    return(
        <div>
            <input type='text' placeholder='Say something...' value={inputValue} onChange={handleChange}/>
            <button onClick={() => addMessage(inputValue)}>Add</button>
            <h1>{displayMessage}</h1>
        </div>
    )
}
export default App;