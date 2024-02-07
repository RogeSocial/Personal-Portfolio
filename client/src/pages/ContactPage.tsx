import "../styling/contact.css"

import { useState } from "react";
import { handleSubmit } from "../components/ValidateInputs.tsx";

function ContactPage() {

    const [errorMessage, setErrorMessage] = useState("");

    return (
        <div className="contact-page">
            <form onSubmit={(e) => handleSubmit(e, setErrorMessage)} name="contact-form">
                <h1>Contact Me</h1>
                <label>Enter your name</label>
                <input type="text" id="name" />
                <label>Your email address</label>
                <input type="email" id="email" />
                <label>Describe your matter</label>
                <textarea id="message"></textarea>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <button type="submit">Contact me!</button>
            </form>
        </div>
    );
}


export default ContactPage;
