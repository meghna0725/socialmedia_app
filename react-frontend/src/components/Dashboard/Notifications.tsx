import * as React from 'react';
import { NotificationsNone } from "@mui/icons-material";
import { Button } from '@mui/material';
import '../../styles/Dashboard.css';

const Notifications = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const defaultMessage = "No new notifications";

    const onClickHandler = () => {
        console.log("clicked");
        setIsOpen(!isOpen); // Toggle the value of isOpen
    };

    return (
        <div>
            <Button variant="text" onClick={onClickHandler} startIcon={<NotificationsNone />}>
            </Button>

            {isOpen && (
                <div>
                    <h2>Notifications</h2>
                    {defaultMessage}
                </div>
            )}
        </div>
    );
};

export default Notifications;
