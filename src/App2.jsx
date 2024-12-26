import { useState } from 'react';

function App() {
  // สร้าง State สำหรับเก็บข้อความ
  const [count, setCount] = useState(0);

  // ฟังก์ชันสำหรับเปลี่ยนข้อความเมื่อกดปุ่ม
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p> {/* นับการคลิก */}
      <button onClick={handleClick}>กดที่นี่</button> {/* ปุ่มที่เรียก handleClick */}
    </div>
  );
}

export default App;
