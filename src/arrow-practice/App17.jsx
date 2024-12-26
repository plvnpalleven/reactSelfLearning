import React from 'react';

const sumEvenNumbers = (numbers) => numbers.filter(number => number % 2 === 0).reduce((accumulator,currentValue) => accumulator + currentValue,0);

const App = () => {
    const numbers = [1,2,3,4,5,6];
    const evenSum = sumEvenNumbers(numbers);

    return (
        <div>
            <h1>
                Summation of even number is : {evenSum} 
            </h1>
        </div>
    )
}

export default App;