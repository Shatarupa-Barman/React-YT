import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

 function App() {
  
//   let counter=15;
//   //let random=Math.ceil(Math.random()*10+1);

//   const addValue=()=>{

//   //console.log("value added",Math.ceil(Math.random()*10+1));
//   counter=counter+1;
//   console.log(counter);

const [count, setCount] = useState(15);


const addValue=()=>{

  setCount(count+1);

  // setCount(prevCounter => prevCounter + 1);
  // setCount(prevCounter => prevCounter + 1 );
  // setCount(prevCounter => prevCounter + 1);
  // setCount(prevCounter => prevCounter + 1);
}

const removeValue=()=>{

  setCount(count-1);
}

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {count}</h2>

      <button onClick={addValue}>Add : {count}</button> 
      <br />
      <button onClick={removeValue}>Remove : {count}</button>
    
    <p>footer : {count}</p>
    </>
  )
}

export default App
