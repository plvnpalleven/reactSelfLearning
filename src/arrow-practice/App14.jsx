import React from 'react';

const getLetterCount = (text) => {
  return text.split("").reduce((accumulator, letter) => {
    if (accumulator[letter]) {
      accumulator[letter] += 1;
    } else {
      accumulator[letter] = 1;
    }
    return accumulator;
  }, {});
};

const App = () => {
  const text = "hello"; // ข้อความต้นฉบับ
  const letterCount = getLetterCount(text); // นับตัวอักษร

  // แปลง object เป็นข้อความในรูปแบบ key: value
  const displayResult = Object.entries(letterCount)
    .map(([letter, count]) => `${letter}: ${count}`)
    .join(", ");

  return (
    <div>
      <h1>{displayResult}</h1>
    </div>
  );
};

export default App;
