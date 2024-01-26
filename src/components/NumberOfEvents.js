

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {

    const handleInputChanged = (event) => {
        const value = event.target.value;
        setCurrentNOE(value);

        let infoText;
        if (isNaN(value) || value <= 0) {
            infoText = 'Please enter a number greater than 0.';
            setErrorAlert(infoText);
        } else {
            infoText = '';
            setErrorAlert(infoText);
            setCurrentNOE(value);
        }
    }

    return (
        <div id="numberOfEvents">
            <label htmlFor="eventNumberInput">Show Events: </label>
            <input
                type="text"
                id="eventNumberInput"
                defaultValue="32"
                onChange={handleInputChanged}
                style={{
                    width: "40px", /* Set the width to make it smaller */
                    textAlign: "center", /* Center the text horizontally */

                }}
            />
        </div>
    );
}

export default NumberOfEvents;