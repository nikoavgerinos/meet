import { useState } from "react";

const NumberOfEvents = ({ setNumberOfEvents }) => {
    const [eventNumber, setEventNumber] = useState('32');

    const handleInputChange = (event) => {
        const value = event.target.value;
        setEventNumber(value);
        setNumberOfEvents(value);
    }

    return (
        <div id="numberOfEvents">
            <label htmlFor="eventNumberInput">Show Events: </label>
            <input
                type="text"
                id="eventNumberInput"
                value={eventNumber}
                onChange={handleInputChange}
                style={{
                    width: "40px", /* Set the width to make it smaller */
                    textAlign: "center", /* Center the text horizontally */

                }}
            />
        </div>
    );
}

export default NumberOfEvents;