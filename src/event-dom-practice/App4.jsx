import React, {useState} from "react";

function App() {
    const [text,setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);    
    };

    return(
        <div>
            <h1>Input event example</h1>
            <input
                type="text"
                placeholder="Your text"
                onChange={handleChange}
            />
            <p>You typed: {text}</p>
        </div>
    );
}

export default App;

