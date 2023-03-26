import {useState} from "react"
import { useRouter } from "next/router"



const EventList=({eventList})=>{
    const [events, setEvents]=useState(eventList)
    const router= useRouter()

    const handleSportEvent= async()=>{
        const response= await fetch('http://localhost:4000/events?category=sports')
        const data= await response.json()
        setEvents(data)
        router.push("/event?category=sports", undefined,{shallow:true})
    }
    return(
        <div>
            <button onClick={handleSportEvent}>Sport Event</button>
            <h1>List Of Events</h1>
            {
                events.map(event=>{
                    return(
                        <div key={event.id}>
                            <h2>{event.id} {event.title} {event.date} | {event.category}</h2>
                            <p>{event.description}</p>
                            <hr />
                        </div>
                    )
                })
            }
        </div>
    )
}
export default EventList

export const getServerSideProps= async(context)=>{
    const {query}=context
    const {category}=query
    const queryString= category? 'category= sports' : ""
    const response= await fetch(`http://localhost:4000/events?${queryString}`)
    const data= await response.json()

    return{
        props:{
            eventList:data
        }
    }
}