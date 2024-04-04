import styles from './Wheel.module.css';

const Club = ({club, activeClubs, index, backgroundColor}) => {

    const textRotation = -1 * (index) * (360 / activeClubs.length);
    let textOffset = 10;

    let additionalClubs = activeClubs.length - 10;

    let totalOffset = club.split('').length + textOffset;
    console.log('original total offset', totalOffset)
    console.log(club.split(' ') === true)
    
    if (totalOffset < 120) {
        let difference = 120 - totalOffset;
        console.log('difference', difference)
        totalOffset += difference;
        console.log('total offset', totalOffset)
    }

    const determineZIndex = () => {
        if (index === activeClubs.length - 1) return 1;
        else return;
    }

    return (
        <div
            className={styles.club}
            style={{
                backgroundColor: backgroundColor,
                clipPath: `polygon(50% 0%, 100% ${75 - additionalClubs}%, 20% 50%, ${150 + (additionalClubs * 25)}% 0%)`,
                transform: `rotate(${textRotation}deg) translateX(${totalOffset}px)`,
                zIndex: `${determineZIndex()}`
            }}
        >
            <span>{club}</span>
        </div>
    );
};

export default Club;