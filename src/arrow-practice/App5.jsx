import React from 'react';

const getFullName = (firstName,lastName) => firstName + " " + lastName ;

const App = () => {
    const fullName = getFullName('Jane','Doe');
    return(
        <div><h1>{fullName}</h1></div>
    )
}
export default App;