import React from 'react';
import IdeationImage from '../assets/Ideation.jpg'; // Adjust the path accordingly

const  Ideation= () => {
  return (
    <section className="persona UJmap" id="UJmap">
        <h2>User Journey Map</h2>
        <p>Mapping Emily’s user journey 
revealed how helpful it 
would be for users to have 
access to an online learning platform.
</p>
        <img src={IdeationImage} alt="User Journey Map" />
    </section>
  );
};

export default Ideation;

