import React , {useState} from 'react';

function App() {
    const [isVisible,setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return(
        <div>
            <button onClick = {toggleVisibility}> {isVisible ? "Hide" : "Show"}Text</button>
            {isVisible && <p>Hello React!</p>}
        </div>
       
    )
}
export default App;