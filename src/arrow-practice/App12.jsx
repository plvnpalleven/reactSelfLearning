import React from 'react';

const countEvenNumbers = (numbers) => numbers.filter(number => number % 2 === 0).length;

const App = ()=> {
    const numbers = [1,2,3,4,5,6]
    const evenNum = countEvenNumbers(numbers)
    return (
        <div>
            <h1>
                {evenNum}
            </h1>
        </div>
    )
}
export default App;