import React from 'react';

const filterEvenNumbers = (numbers) => numbers.filter(number => (number % 2 === 0));

const App = () => {
    const numbers = [1,2,3,4,5,6];
    const evenNumbers = filterEvenNumbers(numbers);

    return(
        <div>
            <h1>
                {evenNumbers.join(",")}
            </h1>
        </div>
    )
}
export default App;