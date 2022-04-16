import IOTMailBox from '../mailbox/mailbox';

const useMailBox = (setLightLevel) => {
    const mailbox = new IOTMailBox(
        1000,
        (lightLevel2) => {
            return lightLevel2;
        },
        setLightLevel
    );

    const { startMonitoring } = mailbox;
    const { stopMonitoring } = mailbox;

    return {
        startMonitoring,
        stopMonitoring,
    };
};

export default useMailBox;
