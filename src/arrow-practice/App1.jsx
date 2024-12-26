import React from 'react';
const greet = (name) => {
    return `Greetings ${name}`;
  };

const App = () => {
    const message = greet("John");
    return(
        <div>
            <h1>
                {message} 
            </h1>
        </div>
    )
}


  export default App;