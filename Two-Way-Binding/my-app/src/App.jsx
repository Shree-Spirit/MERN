import React, { useState } from 'react';
import './App.css';

const App=()=>{
  const [name,setName] = useState("")
  const [submitName,setSubmitName]= useState("")

  const handleSubmit=(e)=>{
    e.preventDefault();

    setSubmitName(name);
  }

  return(
    <div>
      <h1>Enter your name</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder='Enter your Name'
        value={name}
        onChange={(e)=>setName(e.target.value)}>
        </input>
        <button type='submit'>submit</button>
      </form>

      <h2>your name is : {submitName}</h2>
    </div>
  )

}
export default App;
