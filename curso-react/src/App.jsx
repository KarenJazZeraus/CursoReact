import { useState } from 'react'
import Navbar from './assets/components/Navbar'
import './App.css'
import Events from './assets/components/Events'
import SingupForm from './assets/components/SignupForm'

function App() {
  const [searchTerm,setSearchTerm]=useState('');
  const handleNavBarSearch=(termino)=>{
    setSearchTerm(termino);

  }

  return (
    <>
    <SingupForm/>
    <Navbar onSearch={handleNavBarSearch} />
    <Events searchTerm={searchTerm}/>


    </>
  )
}

export default App
