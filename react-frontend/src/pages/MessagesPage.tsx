import * as React from 'react';
import Navbar from '../components/Dashboard/Navbar';
import MessagesNavbar from '../components/Messages/MessagesNavbar';

const MessagesPage = () => {
    return (
        <div>
            <Navbar />
            <MessagesNavbar />
        </div>
    );
};

export default MessagesPage;