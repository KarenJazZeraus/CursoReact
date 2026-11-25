import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import './App.css'
import Events from './assets/components/Events'

function App() {
  const [searchTerm,setSearchTerm]=useState('');
  const handleNavBarSearch=(termino)=>{
    setSearchTerm(termino);

  }

  return (
    <>
    <Navbar onSearch={handleNavBarSearch} />
    <Events searchTerm={searchTerm}/>


    </>
  )
}

export default App
