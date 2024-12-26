import React , {useState} from 'react';

function App(){
    const [treeInput,setTreeInput] = useState("");
    const [treeList,setTreeList] = useState([]);

    const handleNewTree = (event) => setTreeInput(event.target.value);
    const handleAddTree = () => {
        if(treeInput.trim() != ""){
            setTreeList([...treeList,treeInput]);
            setTreeInput("");
        }
    };
    return(
        <div>
            <input text='text' placeholder='Enter your tree...' value={treeInput} onChange={handleNewTree}/>
            <button onClick={handleAddTree}>Add</button>
            <ul>
                {treeList.map((tree,index)=>(
                    <li key={index}>tree</li>
                ))}    
            </ul> 
        </div>
    );
}

export default App;