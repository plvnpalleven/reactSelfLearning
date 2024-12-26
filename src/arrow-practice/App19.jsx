import React from 'react';

const calculateProduct = (numbers) => numbers.reduce((accumulator,currentValue) => accumulator * currentValue,1);

const App = () => {
    const numbers = [1,2,3,4,5,6];
    const calculated = calculateProduct(numbers);

    return(
        <div>
            <h1>
                {calculated}
            </h1>
        </div>
    );
};

export default App;