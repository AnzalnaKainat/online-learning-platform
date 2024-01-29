import React from 'react';
import UJmap from '../assets/UJ map.png'; // Adjust the path accordingly

const  UserJourneyMap= () => {
  return (
    <section className="persona UJmap" id="UJmap">
        <h2>User Journey Map</h2>
        <p>Mapping Emily’s user journey 
revealed how helpful it 
would be for users to have 
access to an online learning platform.
</p>
        <img src={UJmap} alt="User Journey Map" />
    </section>
  );
};

export default UserJourneyMap;

