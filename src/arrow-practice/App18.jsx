import React from 'react';

const findMaxNumber = (numbers) =>  numbers.reduce((max,current) => (current > max ? current : max),numbers[0]);

const App = () => {
    const numbers = [1,2,3,4,5,6];
    const maxNumber = findMaxNumber(numbers);

    return(
        <div>
            <h1>
                ตัวเลขที่มากที่สุดก็คือ :{maxNumber}
            </h1>
        </div>
    );
};

export default App;