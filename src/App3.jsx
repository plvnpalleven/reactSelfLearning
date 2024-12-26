import { useState } from 'react';
function App() {
    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]); // เก็บรายการทั้งหมด
  
    const handleChange = (e) => {
      setInputText(e.target.value);
    };
  
    const handleAdd = () => {
      if (inputText.trim() !== '') {
        setItems([...items, inputText]); // เพิ่มข้อความใหม่ใน Array
        setInputText(''); // ล้างค่าใน Input
      }
    };
  
    return (
      <div>
        <input
          type="text"
          placeholder="เพิ่มข้อความ"
          value={inputText}
          onChange={handleChange}
        />
        <button onClick={handleAdd}>เพิ่ม</button>
  
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li> // แสดงรายการแต่ละอัน
          ))}
        </ul>
      </div>
    );
  }
  
  export default App;
  