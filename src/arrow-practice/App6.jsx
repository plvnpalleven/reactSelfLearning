import React from 'react';

const filterLongNames = (names) => names.filter(name => name.length > 5);

const App = () => {
  const names = ["John", "Elizabeth", "Alex", "Catherine"]; // ชื่อทั้งหมด
  const longNames = filterLongNames(names); // กรองชื่อ

  return (
    <div>
      <h1>Long Names:</h1>
      <ul>
        {longNames.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
