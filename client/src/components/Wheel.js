// import styles from './Wheel.module.css';
import React, { useRef, useState, useEffect } from 'react';

const Wheel = ({activeClubs}) => {

    // let wheel = document.querySelector(".wheel");
    // let spinBtn = document.querySelector(".spinBtn");



    const [spinValue, setSpinValue] = useState(0);
    const [rotation, setRotation] = useState(0);
    const wheelRef = useRef(null);

    // useEffect(() => {
    //     console.log(spinValue);
    //     // setSpinValue(Math.ceil(Math.random() * 3600));
    //     console.log(spinValue);
    // }, [])
    const renderActiveClubs = () => {
        // setActiveClubs([...activeClubs, 'New Club']); // State update inside render function
        console.log('start')
        activeClubs.map((club, index) => {
            return <p key={index}>{club}</p>;
        });
    };

    // const spinWheel = () => {
    //     const wheel = wheelRef.current;
    //     const newRotation = Math.ceil(Math.random() * 360);
    //     setRotation(newRotation);
    //     if (wheel) {
    //         let prevSpinValue = spinValue;
    //         setSpinValue(prevSpinValue += Math.ceil(Math.random() * 3600));
    //         return;
    //     }
    // }

    // const playerArr = ["player-1", "player-5", "player-3", "player-7", "player-2", "player-6", "player-8", "player-4"];
    // let playerIndex = 0;

    // function addName() {
    //     if (playerIndex <= playerArr.length) {
    //         let userName = document.getElementById('name').value;
    //         document.querySelector(`#${playerArr[playerIndex]} span`).innerHTML = userName;
    //         playerIndex++;
    //     }
    // }
    // let submitBtn = document.getElementById('submit');
    // submitBtn.addEventListener('click',addName);

    // let enterName = document.getElementById('name');

    // enterName.addEventListener("keyup", function(event) {
    //     event.preventDefault();
    //     if (event.keyCode === 13) {
    //         document.getElementById('submit').click();
    //     }
    // });
    let clubs = ['Putter', 'Driver', '9 Iron', '8 Iron', '7 Iron', '6 Iron', 'Pitching Wedge', 'Sand Wedge', 'Ideal', 'Not Ideal'];

    return (
        <div class="wheelContainer">
            <div className="spinBtn" style={{ transform: `rotate(${rotation}deg)` }}>Send It!</div>
            <div className="wheel" ref={wheelRef}>
                {renderActiveClubs()}
            </div>
        </div>
    )
}

export default Wheel;