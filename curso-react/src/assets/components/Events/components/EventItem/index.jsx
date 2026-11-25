
const EventItem = ({info,id,name,image,onEventClick,onImageMauseOver}) => {
    const handelSeeMoreButton =(evento)=>{
        evento.stopPropagation();
        onEventClick(id);
    }

    return(
        <div >
            <img src={image} alt={name} width={200} height={200} onMouseOver={()=>onImageMauseOver(name)}/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handelSeeMoreButton}> Ver más</button>



        </div>
    );
    

};
export default EventItem