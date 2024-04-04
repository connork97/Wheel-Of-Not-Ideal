import styles from './Wheel.module.css';

import React, { useEffect } from 'react';

const Club = ({club, activeClubs, index, backgroundColor}) => {

    // const textRotation = -1 * (activeClubs.length - 1) * 5 * (index);
    // const textOffset = (activeClubs.length) + 100;
    const textRotation = -1 * (index) * (360 / activeClubs.length);
    let textOffset = 10;
    // const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'brown', 'black', 'cyan', 'lavender', 'navy', 'teal', 'salmon', 'olive', 'azure', 'coral', 'grey']
    const calculateClipPath = (index, totalOptions) => {
        const angle = 360 / totalOptions;
        const startAngle = index * angle;
        const endAngle = (index + 1) * angle;
        const clipPathPoints = `100% 0, 100% 0, 100% 100%, 0 35%`;
        // For simplicity, assuming a triangle shape here, adjust as needed
        return `polygon(${clipPathPoints})`;
      };
    // const calculateClipPath = (index, totalOptions) => {
    //     const angle = 360 / totalOptions;
    //     const startAngle = index * angle;
    //     const endAngle = (index + 1) * angle;
    
    //     // Convert angles to radians
    //     const startAngleRad = startAngle * (Math.PI / 180);
    //     const endAngleRad = endAngle * (Math.PI / 180);
    
    //     // Calculate clip path points based on start and end angles
    //     const startPointX = Math.cos(startAngleRad) * 50 + 50;
    //     const startPointY = Math.sin(startAngleRad) * 50 + 50;
    //     const endPointX = Math.cos(endAngleRad) * 50 + 50;
    //     const endPointY = Math.sin(endAngleRad) * 50 + 50;
    
    //     // Construct clip path points string
    //     const clipPathPoints = `
    //         50% 50%, 
    //         ${startPointX}% ${startPointY}%, 
    //         ${endPointX}% ${endPointY}%, 
    //         50% 50%`;
    
    //     return `polygon(${clipPathPoints})`;
    // };

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
                // zIndex: '1'
                // clipPath: `polygon(0 0, 57% 0, 50% 50%, 0 57%)`,
                // backgroundColor: `${colors[index]}`,
                backgroundColor: backgroundColor,
                // clipPath: `polygon(100% 0, 100% 0, 100% 100%, 0 35%)`,
                // clipPath: `polygon(100% 0%, 100% 50%, 0% 50%, 100% 0%)`,
                clipPath: `polygon(50% 0%, 100% ${75 - additionalClubs}%, 20% 50%, ${150 + (additionalClubs * 25)}% 0%)`,
                // clipPath: `polygon(100% 0, 100% 100%, 0% 100%, 0% 0%)`,
                // clipPath: calculateClipPath(index, activeClubs.length),
                transform: `rotate(${textRotation}deg) translateX(${totalOffset}px)`,
                zIndex: `${determineZIndex()}`
            }}
            >
            <span
                style={{
                    // clipPath: `polygon(0 0, ${1 / activeClubs.length * 100 / 2}% 0, 50% 50%, 0 ${1 / activeClubs.length * 100 / 2}%)`,
                    // zIndex: '11'
                }}
            >
                {club}
            </span>
        </div>
    );
};

export default Club;