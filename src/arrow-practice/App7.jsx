import React from 'react';

const doubleNumbers = (numbers) => numbers.map(number => number * 2);

const App = () => {
    const numbers = [1,2,3];
    const doubled = doubleNumbers(numbers);
    return (
        <div>
            <h1>{doubled.join(",")}</h1>
        </div>
    )
}
export default App;