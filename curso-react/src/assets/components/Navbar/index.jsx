import { useState } from "react";
const Navbar = () => {
    const [search,setSearch]= useState('');
    const funcionParaManejarElCambio=(evento_de_cambio)=>{
        setSearch(evento_de_cambio.target.value);
    };

    return (
        
        <div>
            <h1>
                Hidro Tickets 
            </h1>
            <input 
            placeholder="Busca un trabajo" 
            onChange={funcionParaManejarElCambio}
            value={search}/>
        </div>
    );

};
export default Navbar;