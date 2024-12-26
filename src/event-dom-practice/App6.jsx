import React , {useState} from 'react';

function App (){
    const[isVisible,setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <h1>
                Show Info
            </h1>
            <button onClick={toggleVisibility}>
                {isVisible ? "Close" : "Open" } 
            </button>
            {isVisible && <p>Info101</p>}
        </div>
    )

}

export default App;