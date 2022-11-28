// Interface for storing messages, with user being who the message belongs to ['bot', 'human'] and message being the message
export interface IDisplayMessage {
    user: string;
    message: string;
}