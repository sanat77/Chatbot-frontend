import { useEffect, useRef } from "react";

import { Message } from "./Message/Message";
import { IDisplayMessage } from "../models/IDisplayMessage.type";
import { Loader } from "../Loader/Loader";

import "./Chatbot.css";

export const Chatbot = (props: {
    displayMessages: IDisplayMessage[];
    loading: boolean;
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
                <Message user={displayMessage.user} message={displayMessage.message} loading={props.loading}></Message>
            ))}
            <div className="loader">{props.loading ? <Loader/> : ''}</div>
            <div ref={bottomRef}></div>
        </div>
    );
}