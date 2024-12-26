import React from "react";

const findMinMax = (numbers) =>
    ({
    min: numbers.reduce((min, current) => (current < min ? current : min),numbers[0]),
    max: numbers.reduce((max, current) => (current > max ? current : max),numbers[0]),
  });

const App = () => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const minMaxNumber = findMinMax(numbers);

  return(
    <div>
        <h1>
            Min number is {minMaxNumber.min}
        </h1>
        <h1>
            Max number is {minMaxNumber.max}
        </h1>
    </div>
  )
};

export default App;
