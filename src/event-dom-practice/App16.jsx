import React , {useState} from 'react';

function App() {
    const [bookInput,setBookInput] = useState("");
    const [bookList,setBookList] = useState([]);

    const handleNewBook = (event) => setBookInput(event.target.value);
    const handleAddBook = () => {
        if(bookInput.trim() !== ""){
            setBookList([...bookList,bookInput]);
            setBookInput("");
        }
    };
    return(
        <div>
            <input type="text" placeholder="Enter your book name..." onChange={handleNewBook} value={bookInput}></input>
            <button onClick={handleAddBook}>Add</button>
            <ul>
                {bookList.map((task,index)=>{
                    <li key={index}>{task}</li>
                }
                )}
            </ul>
        </div>
    )
}

export default App;