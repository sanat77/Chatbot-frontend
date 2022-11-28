import { useState } from "react";

import { Chatbot } from "./Chatbot/Chatbot";
import { Form } from "./Chatbot/Form/Form";
import { IDisplayMessage } from "./models/IDisplayMessage.type";

import './App.css';

export const App = () => {

    const [displayMessage, setDisplayMessage] = useState<IDisplayMessage[]>([]);
    const [loading, setLoading] = useState(false);

    const sleep = (ms: any) => new Promise(r => setTimeout(r, ms));
    
    const handleHumanChange = async (message: string) => {
        if (!message) {
            return;
        }
        const newMessage = {
            user: 'human',
            message: message
        }
        setDisplayMessage(oldMessages => [...oldMessages, newMessage]);
        
        setLoading(true);

        await sleep(5000);

        // provide action on the message

        const botReply = {
            user: 'bot',
            message: 'changing my reply'
        }
        setDisplayMessage(oldMessages => [...oldMessages, botReply]);
        setLoading(false);
    }

    return (
      <div className='box'>
        <div className='bot-container'>
            <Chatbot displayMessages={displayMessage} loading={loading}></Chatbot>
        </div>
        <div className="form">
            <Form handleChange={handleHumanChange}></Form>
        </div>
      </div>
    );
}
