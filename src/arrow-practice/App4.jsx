import React from 'react';

const calculateArea = (width,height) => {
    return width * height;
}

const App = () => {
    const area = calculateArea(5,7) ;
    return (
        <div><h1>This square area is {area}</h1></div>
    )
}
export default App;