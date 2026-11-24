
const EventItem = ({info,id,name,image,onEventClick,onImageMauseOver}) => {

    return(
        <div >
            <img src={image} alt={name} width={200} height={200} onMouseOver={()=>onImageMauseOver(name)}/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={
                        ()=>onEventClick(id)
                    }>Ver más</button>



        </div>
    );
    

};
export default EventItem