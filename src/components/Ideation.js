import React from 'react';
import IdeationImage from '../assets/Ideation.jpg'; // Adjust the path accordingly

const  Ideation= () => {
  return (
    <section className="persona UJmap" id="UJmap">
        <h2>Ideation</h2>
        <p>I conducted a brief brainstorming session to generate ideas for addressing the gaps identified in the competitive audit, with a specific focus on improving <b>course enrollment and creating a pathway for individuals in need to access scholarships.</b> 
 </p>
        <img src={IdeationImage} alt="User Journey Map" />
    </section>
  );
};

export default Ideation;

