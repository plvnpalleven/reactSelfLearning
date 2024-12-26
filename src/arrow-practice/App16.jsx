import React from 'react';

const calculateAverage = (numbers) => {
    const sum = numbers.reduce((accumulator,currentValue) => accumulator + currentValue,0);

    const average = sum / numbers.length;

    return average;
};

const App = () => {
    const numbers = [1,2,3,4,5]
    const average = calculateAverage(numbers);
    return(
        <div>
            <h1>
                {average}
            </h1>
        </div>
    )
}

export default App;
