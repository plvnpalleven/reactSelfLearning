import React , {useState} from 'react';

function App() {
    const [text,setText] = useState("Hello!");
    const changeText = () => setText("You clicked the button!");

    return(
        <div>
            <h1>
                {text}
            </h1>
            <button onClick={changeText}>
                changeText
            </button>
        </div>
    );
}

export default App;