import styles from './Wheel.module.css';

import React, { useEffect } from 'react';

const Club = ({club, activeClubs, index, angleIncrement}) => {

    // const textRotation = -1 * (activeClubs.length - 1) * 5 * (index);
    // const textOffset = (activeClubs.length) + 100;
    const textRotation = -1 * index * (360 / activeClubs.length);
    let textOffset = 10;

    useEffect(() => {
        console.log(club.length + textOffset, 'offset')
        if ((club.length + textOffset) < 175) {
            textOffset = textOffset + 5;
        }
        // return;
    }, [club])

    let totalOffset = club.split('').length + textOffset;
    console.log('original total offset', totalOffset)
    console.log(club.split(' ') === true)
    // console.log(club.split(' ')[0].length > 1 && club.split(' ')[1].length > 1)
    
    if (totalOffset < 110) {
        let difference = 110 - totalOffset;
        console.log('difference', difference)
        totalOffset += difference;
        console.log('total offset', totalOffset)
    }
    return (
        <div className={styles.club}>
            <span
                style={{
                    transform: `rotate(${textRotation}deg) translateX(${totalOffset}px)`,
                    // display: 'flex',
                    // justifyContent: 'space-evenly'
                    // textAlign: 'left',
                    // marginLeft: '-10px'
                }}
            >
                {club}
            </span>
        </div>
    );
};

export default Club;