import { useState } from "react";
import {useForm} from "react-hook-form";
const SingupForm = () => {
    const { register, handleSubmit, reset, formState:{errors}}= useForm();
    const handleCleanButton=(evento)=>{
        evento.stopPropagation();
        reset();

    }
    const handleSubmitForm =(data)=>{
      console.log("hola",data);
 }

    return(
        <form onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Nombre
                <input {...register('name'), {required:true}} />
            </label>
             <label>
                Edad
                <input {...register('age'), {required:true}} />
            </label>
            <label>
                Dirección
                <input {...register('address'), {required:true}} />
            </label>
            <label>
                Telefono
                <input {...register('phone'), {required:true}}/>
            </label>
            <button type="button" onClick={handleCleanButton}>Limpiar</button>
            <button type="submit">Registrarse </button>
        </form>

    );

}
export default SingupForm