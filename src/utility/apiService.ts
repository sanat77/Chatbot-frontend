import axios from "axios";

import { IDisplayMessage } from "../models/IDisplayMessage.type";

export async function apiPostHumanMessage(body: IDisplayMessage) {
    return await axios.post(`${process.env.REACT_APP_WEB_API}/message/human`, body);
}

export async function apiPostBotMessage(body: IDisplayMessage) {
    return await axios.post(`${process.env.REACT_APP_WEB_API}/message/bot`, body);
}

export async function apiFetchAllMessages() {
    return await axios.get(`${process.env.REACT_APP_WEB_API}/message`);
}

export async function apiFetchBotResponse(body: IDisplayMessage) {
    return await axios.post(`${process.env.REACT_APP_WEB_CHATBOT_MODEL}/bot-response`, body);
}