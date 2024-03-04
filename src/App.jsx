import React, {useState} from 'react';
import './App.css';

function App() {

    const [textValue, setTextValue] = useState("");

    const[ageValue, setAgeValue]= useState(0);

    const [textAreaValue, setTextAreaValue] = useState("")

    const [subscribeValue, toggleSubscribeValue ]= useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        console.log(textValue,ageValue,subscribeValue,textAreaValue)
    }


    return (
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend> Gegevens </legend>
                    <label htmlFor="Name">
                        Naam:
                        <input
                            type = "text"
                            id="form-name"
                            name="name"
                            value= {textValue}
                            onChange={(e) => setTextValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="Age">
                        Leeftijd:
                        <input
                            type = "age"
                            id="form-age"
                            name="name"
                            value= {ageValue}
                            onChange={(e) => setAgeValue(parseInt(e.target.value))}
                        />
                    </label>
                </fieldset>
                <fieldset>
                    <legend> Jouw Review </legend>
                    <label htmlFor="Comments">
                        Opmerkingen:
                        <textarea
                            id="form-comments"
                            name="comments"
                            rows="4"
                            cols="40"
                            value= {textAreaValue}
                            placeholder="Plaats hier je opmerking"
                            onChange={(e) => setTextAreaValue(e.target.value)}
                        />
                    </label>
                    <label htmlFor="subscribe">
                        <input
                            type = "checkbox"
                            id="form-subsribe"
                            name="subscribe checkbox"
                            checked={subscribeValue}
                            onChange={() => toggleSubscribeValue(!subscribeValue)}
                        />
                        Ik schrijf me in voor de nieuwsbrief
                    </label>

                <button type="submit">
                    Versturen
                </button>
                </fieldset>
            </form>

    );
}

export default App;
