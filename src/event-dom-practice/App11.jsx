import React , {useState} from 'react';

function App() {
    const [inputValue, setInputValue] = useState("")

    const handleChange = (event) => setInputValue(event.target.value);

    return(
        <div>
            <input type="text" placeholder='Type something...' value={inputValue} onChange={handleChange}/>
            <p>You typed: {inputValue}</p>
        </div>
    );
}

export default App;