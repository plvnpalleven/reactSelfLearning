import {useState} from 'react';

function App() {
    const [inputText,setInputText] = useState('');
    const [items,setItems] = useState([]);

    const handleAdd = () => {
        if (inputText.trim() !== ''){
            setItems([...items,inputText]);
            setInputText('');
        }
    };
    return(
        <div>
        {/* Input Field */}
        <input
            type="text"
            placeholder="พิมพ์ข้อความที่นี่"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)} // อัปเดตข้อความใน Input
        />
        {/* ปุ่มสำหรับเพิ่มรายการ */}
        <button onClick={handleAdd}>เพิ่มตัวอักษร</button>

        {/* แสดงรายการ */}
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li> // แสดงรายการแต่ละอัน
            ))}
        </ul>
    </div>
    );
}

export default App;