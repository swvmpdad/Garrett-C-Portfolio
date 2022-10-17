import React, { useState } from "react";
import Resume from "../components/Resume";
import { validateEmail } from '../utils/helpers';

function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value })
            console.log(formState);
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        
    }

    return(
        <section>
            <div className="section-title">
                <h2>Contact Me</h2>
            </div>
            <div id="contact-form" className="row d-flex justify-content-center">
                <div className="col-md-6 text-center">
                    <form action="mailto:swvmpdad@gmail.com" method="POST" encType="text/plain" className="col justify-space-between align-items-center" id="contact-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name:</label><br />
                            <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
                        </div>

                        <div>
                            <label htmlFor="email">Email address:</label><br />
                            <input type="email" defaultValue={email} onBlur={handleChange}  name="email" />
                        </div>

                        <div>
                            <label htmlFor="message">Message:</label><br />
                            <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
            <div id="resume" className="row text-center mt-3">
                <Resume />
            </div>
        </section>
    );
};

export default ContactForm;