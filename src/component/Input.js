// import React, { useState } from 'react'

// function Input() {
// const [name,setName] =    useState("");
// const [inputs,setInputs] =    useState([]);

// const addHandler = () =>{
//     setInputs([...inputs,{name:''}])

// }


//     return (
//         <div>
//             { inputs.length > 0 && inputs.map((el,id) =>{
//                 return(
//             <div key={id}>
//             name:
//             <input type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
//             <button onClick={addHandler}>+</button>
//             </div>
//             )}) 
//              }
//         </div>
//     )
// }

// export default Input
import React, { useState } from "react";
 
function Input() {
  const [inputList, setInputList] = useState([{ firstName: "",  }]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };
 
  // handle click event of the Remove button
  
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: ""}]);
  };
 
  return (
    <div className="Input">
      <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="firstName"
              placeholder="Enter First Name"
              value={x.firstName}
              onChange={e => handleInputChange(e, i)}
            />
           
            <div className="btn-box">
            
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
    </div>
  );
}
 
export default Input;