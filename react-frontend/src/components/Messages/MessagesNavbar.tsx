import React from "react";
import "../../styles/Messages.css"

interface MessageThreadProps {
    username: string;
}

// pass in props to the component

const MessageThread = (props: MessageThreadProps) => {
    return (
        <div>
            <button className="contact-button">{props.username}</button>
        </div>
    );
}

// TODO get request number of active messages from backend
// 

function generate_name(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let counter = 0;

    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter++;
    }

    return result;

}

const MessagesNavbar = () => {

    // call generate_name multiple times and render MessageThread components

    const number_of_messages = 5;

    const generate_message_threads = () => {
        let message_threads = [];
        let counter = 0;

        while (counter < number_of_messages) {
            message_threads.push(<MessageThread username={generate_name(10)} />);
            counter++;
        }

        return message_threads;
    }

    return (
        <div>
        <h1>Messages Navbar</h1>
        {generate_message_threads()}
        </div>
    );
};

export default MessagesNavbar;
