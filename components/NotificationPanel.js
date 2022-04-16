import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import styles from '../styles/modules/NotificationPanel.module.scss';

const NotificationPanel = ({ notifications, setNotifications, lightLevel }) => {
    const [isOpen, setIsOpen] = useState(null);

    useEffect(() => {
        if (lightLevel === null) return;
        if (lightLevel >= 0.5) {
            setIsOpen(true);
            return;
        }
        setIsOpen(false);
    }, [lightLevel]);

    useEffect(() => {
        if (isOpen === null) return;
        if (isOpen) {
            setNotifications((prevState) => ['Door Open', 'Mail Received', ...prevState]);
            return;
        }
        setNotifications((prevState) => ['Door Closed', ...prevState]);
    }, [isOpen, setNotifications]);

    return (
        <>
            <div className={`${styles.panel} ${styles.notificationPanel}`}>
                {notifications.map((item) => {
                    return (
                        <div className={styles.item} key={uuid()}>
                            {item}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default NotificationPanel;
