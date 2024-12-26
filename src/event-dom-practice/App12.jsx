import React , {useState} from 'react';

function App() {
    const [inputValue,setInputValue] = useState("")

    const handleChange = (e) => setInputValue(e.target.value);

    return (
        <div>
            <input type="text" placeholder="Input your name..." value={inputValue} onChange={handleChange}/>
            <p>Hello! {inputValue}</p>
        </div>
    );
}

export default App;