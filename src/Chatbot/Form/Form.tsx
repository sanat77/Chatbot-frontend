import { useState } from "react";

import "./Form.css";

export const Form = (props: {
    handleChange: any;
}) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setMessage('');
        props.handleChange(message);
    }

    return (
        <div className="chatbot-container">
            <form className="form" onSubmit={handleSubmit}>
                <input className="input" type="text" onChange={e => setMessage(e.target.value)} value={message} placeholder="Enter your message..."></input>
                <button className="button" type="submit">Send</button>
            </form>
        </div>
    );
}