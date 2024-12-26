import React from 'react';

const groupByOddEven = (numbers) => ({
    odd: numbers.filter(number => number % 2 !== 0),
    even: numbers.filter(number => number % 2 === 0)
});

const App = () => {
    const numbers = [1,2,3,4,5,6];
    const groupedByNumber = groupByOddEven(numbers);

    return(
        <div>
            <h1>
                Odd Number : [ {groupedByNumber.odd.join(", ")}]
            </h1>
            <h1>
                Even Number : [ {groupedByNumber.even.join(", ")}]
            </h1>
        </div>
    )
}
export default App;