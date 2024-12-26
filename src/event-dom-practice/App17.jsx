import React , {useState} from 'react';

function App(){
    const [carInput,setCarInput] = useState("");
    const [carList,setCarList] = useState([]);

    const handleNewCar = (event) => setCarInput(event.target.value);
    const handleAddCar = () => {
        if(carInput.trim() != ""){
            setCarList([...carList,carInput]);
            setCarInput("");
        }
    };
    return(
        <div>
            <input type='text' placeholder='Add your car brand...' value={carInput} onChange={handleNewCar}></input>
            <button onClick={handleAddCar}>Add</button>
            <ul>
                {carList.map((car,index)=>(
                    <li key={index}>{car}</li>
                )
                )}
            </ul>
        </div>
    )
}

export default App;