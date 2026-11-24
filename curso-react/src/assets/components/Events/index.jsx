import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from '../../../data/events.json';

const Events = () => {
    const [data] =useState(eventsJSON);
    const {_embedded:{events}} =data;
    
    const handleEventItemClick = (id) =>{
        console.log('evento clickeado',id)
    }
    const handleMouseOver =(name) =>{
        console.log('evento de imagen llamado',name)
    }





    const eventsComponent =events.map((eventItem)=>

    <EventItem 
        key={`event-item-${eventItem.id}`}
        name={eventItem.name}
        info={eventItem.info}
        image={eventItem.images[0].url}
        onEventClick={handleEventItemClick}
        onImageMauseOver={handleMouseOver}
        id={eventItem.id}
    />)










    return(
        <div>Mi boletera perrona
            {eventsComponent}

        </div>
        
    );
    

};
export default Events