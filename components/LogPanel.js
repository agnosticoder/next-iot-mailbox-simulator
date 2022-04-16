import { v4 as uuid } from 'uuid';
import styles from '../styles/modules/Mailbox.module.scss';

const LogPanel = ({ log }) => {
    // console.log(log !== [null]);
    // console.log(log);
    return (
        <div>
            <h4>Log Panel</h4>
            <div className={`${styles.panel} ${styles.logPanel}`}>
                {log !== [null] &&
                    log.map((item) => {
                        return (
                            <div className={styles.item} key={uuid()}>
                                {item}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default LogPanel;
