import React, { useState } from "react";
import { validateEmail } from '../utils/helpers';
const formUrl = 'docs.google.com/forms/d/1VGB5sFaFMRu5FRQFoDzTYmfCNhku9BPwpgez7uBPkXM/';

function ContactForm() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const { name, email, message } = formState;
    // const [errorMessage, setErrorMessage] = useState('');

    // function handleChange(e) {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     console.log('errorMessage', errorMessage);
    //     if (!errorMessage) {
    //         setFormState({...formState, [e.target.name]: e.target.value })
    //         console.log(formState);
    //     }
    // }

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     console.log(formState);
    //     e.target.name.value = '';
    //     e.target.email.value = '';
    //     e.target.message.value = '';
    // }


    // return(
    //     <section>
    //         <div className="section-title">
    //             <h2>Contact Me</h2>
    //         </div>
    //         <div id="contact-form" className="row d-flex justify-content-center">
    //             <div className="col-md-6 text-center">
    //                 <form className="col justify-space-between align-items-center" id="contact-form" onSubmit={handleSubmit}>
    //                     <div>
    //                         <label htmlFor="name">Name:</label><br />
    //                         <input type="text" defaultValue={name} onBlur={handleChange} name="name" />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="email">Email address:</label><br />
    //                         <input type="email" defaultValue={email} onBlur={handleChange}  name="email" />
    //                     </div>

    //                     <div>
    //                         <label htmlFor="message">Message:</label><br />
    //                         <textarea name="message" defaultValue={message} onBlur={handleChange} rows="5" />
    //                     </div>
    //                     {errorMessage && (
    //                         <div>
    //                             <p className="error-text">{errorMessage}</p>
    //                         </div>
    //                     )}
    //                     <button type="submit">Submit</button>
    //                 </form>
    //             </div>
    //         </div>
    //     </section>
    // );
    return(
        <section>
             <div className="section-title">
                 <h2>Contact Me</h2>
             </div>
             <div className="contact-info">
                        <div>
                            <h4>
                            4449 Atlantic Rd. <br />
                            Port Arthur, TX
                            77642 <br />
                            </h4>
                        </div>
                        <div>
                            <h4>
                               <a href= "tel:4093320236">409.332.0236</a>
                            </h4>
                        </div>
                        <div>
                            <h4>
                            <a href = "mailto:will.g.camp@gmail.com">will.g.camp@gmail.com</a>
                            </h4>
                        </div>
            </div>
        </section>
    );
};

export default ContactForm;