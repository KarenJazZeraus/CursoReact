import { useState } from 'react'
import { MyFirstComponent } from './assets/MyFirstComponent'
import './App.css'

function App() {
  const [value,setValue] = useState(0);
   setTimeout(()=>{
        setValue(value + 1);
    }, 1000);
  return (
    <>
    <MyFirstComponent props={value}/>


    </>
  )
}

export default App
