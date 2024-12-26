import React , {useState} from 'react';

function App() {
    const [isVisible,setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h1>Toggle Visibility Example</h1>
            <button onClick={toggleVisibility}>
                {isVisible ? "Hide" : "Show"} Text
            </button>

            {isVisible && <p> This is the text to show or hide!</p>}
        </div>
    );
}

export default App;