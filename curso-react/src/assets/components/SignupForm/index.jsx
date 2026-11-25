import { useState } from "react";
const SingupForm = () => {
    const [name,setName]=useState('');
    const [age,setAge]=useState('');
    const [address,setAddress]=useState('');
    const [phone,setPhone]=useState('');
    const handleCleanButton=(evento)=>{
        evento.stopPropagation();
        setName('');
        setAge('');
        setPhone('');
        setAddress('');
    }
    const handleSubmitForm =(evento)=>{
        evento.preventDefault();
        console.log("no me actualizo por default",{name,age,address,phone});
    }

    return(
        <form onSubmit={handleSubmitForm}>
            <label>
                Nombre
                <input value={name} onChange ={(event)=>setName(event.target.value)}required/>
            </label>
             <label>
                Edad
                <input value={age} onChange ={(event)=>setAge(event.target.value)}required/>
            </label>
            <label>
                Dirección
                <input value={address} onChange ={(event)=>setAddress(event.target.value)}required/>
            </label>
            <label>
                Telefono
                <input value={phone} onChange ={(event)=>setPhone(event.target.value)}required/>
            </label>
            <button type="button" onClick={handleCleanButton}>Limpiar</button>
            <button type="submit">Registrarse </button>
        </form>

    );

}
export default SingupForm