import React from 'react';

const squareNumbers = (numbers) => numbers.map(number => number * number);

const App = () => {
    const numbers = [1,2,3];
    const squared = squareNumbers(numbers);

    return(
        <div>
            <h1>
                {squared.join(",")}
            </h1>
        </div>
    )
}
export default App;