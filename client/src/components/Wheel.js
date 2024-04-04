import styles from './Wheel.module.css';
import Club from './Club';
import React, { useRef, useState } from 'react';

const Wheel = ({ activeClubs }) => {
    const [spinValue, setSpinValue] = useState(0);
    const wheelRef = useRef(null);
    const wheelContainerRef = useRef(null);

    const angleIncrement = 360 / activeClubs.length;

    const renderActiveClubs = () => {
        return activeClubs.map((club, index) => {
            const colors = ['teal', 'gold', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'red', 'magenta', 'navy', 'salmon', 'olive', 'maroon', 'coral', 'grey']

            return (
                <Club
                    className={styles.club}
                    key={index}
                    index={index}
                    angleIncrement={angleIncrement}
                    club={club}
                    activeClubs={activeClubs}
                    backgroundColor={colors[index]}
                ></Club>
            );
        });
    };

    const spinWheel = () => {
        setSpinValue(spinValue + Math.ceil(Math.random() * 3600));
    }

    return (
        <div
            className={styles.wheelContainer}
            ref={wheelContainerRef}
        >
            <div 
                className={styles.spinBtn}
                onClick={() => spinWheel()}
            >
                Send It!
            </div>
            <div
                className={styles.wheel} 
                ref={wheelRef}
                style={{ transform: `rotate(${spinValue}deg)` }}
            >
                {renderActiveClubs()}
            </div>
        </div>
    )
}

export default Wheel;