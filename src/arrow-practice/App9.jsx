import React from 'react';

const capitalizeWords = (words) => words.map(word => word.charAt(0))

const App = () => {
    const words = ['apple' , 'cherry' , 'banana'];
    const capitalized = capitalizeWords(words);

    return(
        <div>
            <h1>
                ({capitalized.join(",")});
            </h1>
        </div>
    )
}