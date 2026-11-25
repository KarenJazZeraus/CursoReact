import { useState } from "react";
const Navbar = ({onSearch}) => {
    const [search,setSearch]= useState('');
    const funcionParaManejarElCambio=(evento_de_cambio)=>{
        setSearch(evento_de_cambio.target.value);
    };
    const handleInputKeyDown=(evento)=>{
        if(evento.key==='Enter'){
            onSearch(search);
        }
    };

    return (
        
        <div>
            <h1>Hidro Tickets </h1>
            <input 
                placeholder="Busca un trabajo" 
                onChange={funcionParaManejarElCambio}
                onKeyDown={handleInputKeyDown}
                value={search}/>
        </div>
    );

};
export default Navbar;