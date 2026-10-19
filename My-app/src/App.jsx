// import React, {useState} from 'react'

// const App=()=>{
  
//   const [user,setUser] = useState("Nipun")
//   const ChangeUser=()=>{
//     setUser("Shridhar")
//     }
//   return (
//     <div>
//       <h1>Username is {user}</h1>
//       <button onClick={ChangeUser}>Change user</button>
//     </div>

    
//   )
  
// }

// import React, { useState } from 'react';
// const App=()=>{
//   const[num,setNum]=useState(10)

//   const ChangeValue=()=>{
//     setNum(20)
//   }
//   return(
//     <div>
//       <h1>Number is {num}</h1>
//       <button onClick={ChangeValue}>Change Number</button>
//     </div>
//   )
// }

import React, { useState } from "react";

const App=()=>{
  const [a,updateNum] = useState(10);
  const updateNumber=()=>{
    updateNum(a+10)
  };
  return(
    <div>
      <h1>Current Nuber is {a}</h1>
      <button onClick={updateNumber}>Updated Number is </button>
    </div>
  )
}

export default App;