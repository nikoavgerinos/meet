import { useState } from "react";


const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event">
            <h2>{event.summary}</h2>
            <p>{event.created}</p>
            <p>{event.location}</p>
            <button className='btn-details' onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide' : 'Show Details'}
            </button>
            {showDetails ? (
                <div className="details">
                    <h3>Event Details:</h3>
                    <p>{event.description}</p>
                </div>)
                : null}
        </li>
    )
}

export default Event;