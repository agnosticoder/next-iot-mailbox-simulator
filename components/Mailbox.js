import { useState, useRef, useEffect } from 'react';
import useMailBox from '../hooks/useMailBox';
import LogPanel from './LogPanel';
import NotificationPanel from './NotificationPanel';
import Buttons from './Buttons';

const Mailbox = () => {
    const intervalIDTracker = useRef(null);
    const [log, setLog] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [lightLevel, setLightLevel] = useState(null);

    const [isStart, setIsStart] = useState(false);
    const [isStop, setIsStop] = useState(true);
    const [isReset, setIsReset] = useState(true);

    const { startMonitoring, stopMonitoring } = useMailBox(setLightLevel);

    const onStartMonitoring = () => {
        intervalIDTracker.current = startMonitoring();
        setLog((prevState) => ['Monitoring Started', ...prevState]);
        setIsStart(true);
        setIsStop(false);
        setIsReset(false);
    };

    const onStopMonitoring = () => {
        stopMonitoring(intervalIDTracker.current);
        setLog((prevState) => ['Monitoring Stopped', ...prevState]);
        setIsStart(false);
        setIsStop(true);
    };

    const onReset = () => {
        setLog([]);
        setNotifications([]);
        stopMonitoring(intervalIDTracker.current);
        setIsReset(true);
        setIsStop(true);
        setIsStart(false);
        console.log('Reset');
    };

    useEffect(() => {
        if (lightLevel === null) return;
        setLog((prevState) => [lightLevel, ...prevState]);
    }, [lightLevel]);

    return (
        <div>
            <div>
                <Buttons
                    isStart={isStart}
                    isStop={isStop}
                    isReset={isReset}
                    onReset={onReset}
                    onStartMonitoring={onStartMonitoring}
                    onStopMonitoring={onStopMonitoring}
                />
                <h4>Notification Panel</h4>
                <NotificationPanel
                    notifications={notifications}
                    setNotifications={setNotifications}
                    onStartMonitoring={onStartMonitoring}
                    onStopMonitoring={onStopMonitoring}
                    onReset={onReset}
                    lightLevel={+lightLevel}
                />
                <LogPanel log={log} />
            </div>
        </div>
    );
};

export default Mailbox;
