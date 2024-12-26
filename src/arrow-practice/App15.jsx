import React from 'react';

const wordFrequency = (text) => {
  return text.split(" ").reduce((accumulator, word) => {
    if (accumulator[word]) {
      accumulator[word] += 1; // ถ้าคำมีอยู่แล้ว เพิ่มจำนวน
    } else {
      accumulator[word] = 1; // ถ้ายังไม่มี ให้เริ่มต้นที่ 1
    }
    return accumulator;
  }, {});
};

const App = () => {
  const text = "hello world hello"; // ข้อความต้นฉบับ
  const frequency = wordFrequency(text); // นับจำนวนคำ

  const displayResult = Object.entries(frequency)
    .map(([word, count]) => `${word}: ${count}`)
    .join(", ");

  return (
    <div>
      <h1>{displayResult}</h1>
    </div>
  );
};

export default App;
