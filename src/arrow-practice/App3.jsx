import React from 'react';

const multiplyNumbers = (num1,num2) => {
    return num1 * num2 ;
}

const App = () => {
    const sum = multiplyNumbers(3,5);
    return (
        <div><h1>{sum}</h1></div>
    )
} 

export default App;