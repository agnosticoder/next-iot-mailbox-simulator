import styles from '../styles/modules/NotificationPanel.module.scss';

const Buttons = ({ onReset, onStartMonitoring, onStopMonitoring, isStart, isStop, isReset }) => {
    return (
        <div>
            <button disabled={isReset} className={styles.button} type="button" onClick={() => onReset()}>
                Reset
            </button>
            <button disabled={isStop} className={styles.button} type="button" onClick={() => onStopMonitoring()}>
                Stop Monitoring
            </button>
            <button disabled={isStart} className={styles.button} onClick={() => onStartMonitoring()} type="button">
                Start Monitoring
            </button>
        </div>
    );
};

export default Buttons;
