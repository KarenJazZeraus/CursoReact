import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from '../../../data/events.json';

const Events = ({searchTerm}) => {

    const [data] =useState(eventsJSON);
    const {_embedded:{events}} =data;
    const handleEventItemClick = (id) =>{
        console.log('evento clickeado',id)
    }
    const handleMouseOver =(name) =>{
        console.log('evento de imagen llamado',name)
    }
    const renderEvents =()=>{
        let eventsFiltered= events;
        const termino = searchTerm.toLowerCase();

        eventsFiltered = eventsFiltered.filter((item) =>
            item.name.toLowerCase().includes(termino)
        );



     return eventsFiltered.map((eventItem)=>
            <EventItem 
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick}
                onImageMauseOver={handleMouseOver}
                id={eventItem.id}/>
            )};

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
            {renderEvents()}

        </div>
        
    );
    

};
export default Events