import React , {useState} from 'react';

function App() {
    const [textInput,setTextInput] = useState("");

    const handleChange = (event) => setTextInput(event.target.value);

    return (
        <div>
            <input type="text" placeholder="Say something..." onChange={handleChange} value={textInput}/>
            <p>You have typed {textInput.length} Characters</p>
        </div>
    );
}

export default App;