import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from 'react';

import ClubsDropdown from './components/ClubsDropdown';
import Wheel from './components/Wheel';

function App() {

  const [activeClubs, setActiveClubs] = useState(['8 Iron', 'Driver', 'Putter','Ideal', 'Sand Wedge', 'Pitching Wedge', '9 Iron', '3 Wood', 'Not Ideal', '7 Iron', '6 Iron'])

  const woodsAndHybrids = ['3 Wood', '5 Wood', '1 Hybrid', '2 Hybrid', '3 Hybrid', '4 Hybrid', '5 Hybrid'];
  const irons = ['1 Iron', '2 Iron', '3 Iron', '4 Iron', '5 Iron'];
  const wedges = ['Gap Wedge', 'Lob Wedge', 'Trouble Wedge'];

  return (
    <div className="App">
      <div className='clubDropdownsWrapperDiv'>
        <ClubsDropdown
          clubs={woodsAndHybrids}
          setActiveClubs={setActiveClubs}  
        />
        <ClubsDropdown
          clubs={irons}
          setActiveClubs={setActiveClubs}  
        />
        <ClubsDropdown 
          clubs={wedges}
          setActiveClubs={setActiveClubs}  
        />
      </div>
      <Wheel
        activeClubs={activeClubs}
      />
    </div>
  );
};

export default App;