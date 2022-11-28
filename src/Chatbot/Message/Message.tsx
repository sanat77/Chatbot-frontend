import "./Message.css";

export const Message = (props: {
    user: string;
    message: string;
}) => {
    return (
        <div className="message-container">
            {props.user === 'bot' && <div className="bot">
                <div className="icon">
                    {props.user.at(0)?.toUpperCase()}
                </div>
                <div className="message">
                    {props.message}
                </div>
            </div>}
            {props.user === 'human' && <div className="human">
                <div className="message">
                    {props.message}
                </div>
                <div className="icon">
                    {props.user.at(0)?.toUpperCase()}
                </div>
            </div>}
        </div>
    );
}