import './App.css'
import Card from './components/Card'

// function App() {

//   let myObj={

//     username: "John Doe",
//     age: 30,
//   }

//   let arr= [1,2,3];
  
//   return (
//     <>
//      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Vite + React!</h1>
//      <Card channel="chai" someObj={myObj} newArray={arr}/>
//      <Card />
//     </>
//   )
// }

function App() {
  
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello Vite + React!</h1>
     <Card username="Lia" btnText="try me"/>
     <Card username="Meghna" />
    </>
  )
}

export default App
