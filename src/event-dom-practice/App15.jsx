import React , {useState} from 'react';

function App(){
    const [teaInput,setTeaInput] = useState("");
    const [teaList,setTeaList] = useState([]);

    const handleNewTea = (event) => setTeaInput(event.target.value);
    const handleAddTea = ()=>{
        if(teaInput.trim() !== ""){
            setTeaList([...teaList,teaInput]);
            setTeaInput("");
        }else if(teaInput.trim() === ""){
            alert("Please enter a tea name!");
            return;
        }   
    }
    return(
        <div>
            <input type='text' placeholder='Add your tea..' value={teaInput} onChange={handleNewTea}/>
            <button onClick={handleAddTea}>Add</button>
            <ul>
                {teaList.map((tea,index)=>(
                    <li key={index}>{tea}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;