import { useEffect, useState } from "react";

import { Chatbot } from "./Chatbot/Chatbot";
import { Form } from "./Chatbot/Form/Form";
import { IDisplayMessage } from "./IDisplayMessage.type";

import './App.css';

export const App = () => {

    const [displayMessage, setDisplayMessage] = useState<IDisplayMessage[]>([]);
    
    const handleHumanChange = (message: string) => {
        if (!message) {
            return;
        }
        const newMessage = {
            user: 'human',
            message: message
        }
        setDisplayMessage(oldMessages => [...oldMessages, newMessage]);

        // provide action on the message
        
        const botReply = {
            user: 'bot',
            message: 'changing my reply'
        }
        setDisplayMessage(oldMessages => [...oldMessages, botReply]);
    }

    return (
      <div className='box'>
        <div className='bot-container'>
            <Chatbot displayMessages={displayMessage}></Chatbot>
        </div>
        <div className="form">
            <Form handleChange={handleHumanChange}></Form>
        </div>
      </div>
    );
}
