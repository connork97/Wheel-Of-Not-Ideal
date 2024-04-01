import styles from './Wheel.module.css';


const Club = ({club, activeClubs, index, angleIncrement}) => {

    // const textRotation = -1 * (activeClubs.length - 1) * 5 * (index);
    // const textOffset = (activeClubs.length) + 100;
    const textRotation = -1 * index * (360 / activeClubs.length);
    // const textOffset = 100;

    return (
        <div className={styles.club}>
            <span
                style={{
                    transform: `rotate(${textRotation}deg) translateX(${100}px)`
                }}
            >{club}
            </span>
        </div>
    );
};

export default Club;