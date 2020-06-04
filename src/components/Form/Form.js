import React, { useRef } from 'react';

import './Form.scss';

const Form = props => {
    const nameRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const sendEmailHandler = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5000/api/email`, 'POST',
            // body: {
            // name: nameRef,
            // email: emailRef,
            // message: messageRef
            // }
        );

    };

    return (
        <div className='form-box'>
            <form onSubmit={sendEmailHandler}>
                <label>Name:</label>
                <input type='text' placeholder='Name or company name' ref={nameRef} />
                <label>Email:</label>
                <input type='email' placeholder='Email address' ref={emailRef} />
                <label>Message:</label>
                <textarea rows="6" cols="29" placeholder='Enter a message for Joshua McCue' ref={messageRef} />
            </form>
            <div>Thank you for your time and consideration</div>
            <button type='submit' > Send Message</button>
        </div>
    );
}

export default Form;