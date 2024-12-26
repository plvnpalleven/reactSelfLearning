import React from 'react';

const findEvenAverage = (numbers) => numbers.filter(number => number % 2 === 0).reduce((accumulator,currentValue)=> accumulator + currentValue,0);

const App = () => {
    const numbers = [1,2,3,4,5,6]
    const evenNum = numbers.filter((number)=> number % 2 === 0);
    const evenSum = findEvenAverage(numbers);
    const evenAverage = evenNum.length > 0 ? evenSum / evenNum.length : 0;
    return(
        <div>
            <h1>
                {evenAverage}
            </h1>
        </div>
    );
};

export default App;