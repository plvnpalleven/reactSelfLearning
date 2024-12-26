import React from 'react';

const addNumbers = (num1,num2) => {
    return num1 + num2;
}

const App = ()=> {
    const sum = addNumbers(1,3);
    return(
        <div>
             <h1>
            {sum}
            </h1>
        </div>
    )
}

export default App;