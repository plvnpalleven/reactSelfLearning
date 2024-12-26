import { useState } from 'react';

function App() {
  // สร้าง State สำหรับเก็บข้อความ
  const [text, setText] = useState('กดฉัน!');

  // ฟังก์ชันสำหรับเปลี่ยนข้อความเมื่อกดปุ่ม
  const handleClick = () => {
    setText('คุณกดปุ่มแล้ว!');
  };

  return (
    <div>
      <p>{text}</p> {/* แสดงข้อความ */}
      <button onClick={handleClick}>กดที่นี่</button> {/* ปุ่มที่เรียก handleClick */}
    </div>
  );
}

export default App;
