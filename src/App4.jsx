import {useState} from 'react';

function App() {
    const [inputText,setInputText] = useState('');
    
    return(
        <div>
            <input type = "text" placeholder="พิมพ์ข้อความที่นี่" value={inputText} onChange={(e) => setInputText(e.target.value)} />
            <p>{inputText}</p>
        </div>
    );
}

export default App;