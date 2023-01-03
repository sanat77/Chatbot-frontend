// react imports
import { useEffect, useState } from "react";

// file imports
import { Chatbot } from "./Chatbot/Chatbot";
import { Form } from "./Chatbot/Form/Form";

// model imports
import { IDisplayMessage } from "./models/IDisplayMessage.type";

// utility imports
import uuidv4 from "uuidv4";
import { Users } from "./utility/constants";
import { apiFetchAllMessages, apiFetchBotResponse, apiPostBotMessage, apiPostHumanMessage } from "./utility/apiService";
import { sleep } from "./utility/sleep";

// style imports
import './App.css';

export const App = () => {

    const [displayMessage, setDisplayMessage] = useState<IDisplayMessage[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const allMessages = await (await apiFetchAllMessages()).data;
        setDisplayMessage(allMessages);
    }
    
    const handleHumanChange = async (message: string) => {
        if (!message) {
            return;
        }
        const newMessage: IDisplayMessage = {
            user: Users.HUMAN,
            message: message,
            messageId: uuidv4()
        };
        
        setDisplayMessage(oldMessages => [...oldMessages, newMessage]);
        
        setLoading(true);

        // post human message and get a bot reply
        let botReplyMessage;
        try {
            const response = await apiPostHumanMessage(newMessage);
            botReplyMessage = await (await apiFetchBotResponse(newMessage)).data;
        } catch (err) {
            return err;
        }

        const botReply: IDisplayMessage = {
            user: Users.BOT,
            message: botReplyMessage,
            messageId: uuidv4()
        };

        // post bot reply to backend
        try {
            await apiPostBotMessage(botReply);
        } catch(err) {
            return err;
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
