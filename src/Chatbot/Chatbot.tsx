import { useEffect, useRef } from "react";

import { Message } from "./Message/Message";
import { IDisplayMessage } from "../models/IDisplayMessage.type";

import "./Chatbot.css";

export const Chatbot = (props: {
    displayMessages: IDisplayMessage[];
}) => {
    const bottomRef = useRef<HTMLInputElement>(null);

    const scrollToBottom = () => {
        bottomRef.current?.scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        scrollToBottom();
    }, [props.displayMessages])

    return (
        <div className="chatbot-container">
            {props.displayMessages.map((displayMessage: IDisplayMessage) => (
                <Message user={displayMessage.user} message={displayMessage.message}></Message>
            ))}
            <div ref={bottomRef}></div>
        </div>
    );
}