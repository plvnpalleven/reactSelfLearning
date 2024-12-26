import React from 'react';

const sumNumbers = (numbers) => numbers.reduce((accumulator , currentValue) => accumulator + currentValue , 0);

const App = () => {
    const numbers = [1,2,3,4,5];
    const sum = sumNumbers(numbers);
    return (
        <div>
            <h1>
                {numbers.join(",")}
            </h1>
            <h2>
                {sum}
            </h2>
        </div>
    )
}
export default App;