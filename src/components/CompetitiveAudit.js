import React from 'react';
import audit1 from '../assets/CAudit1.PNG';
import audit2 from '../assets/CAudit2.PNG'; 

const  CompetitiveAudit= () => {
  return (
    <section className="persona UJmap" id="UJmap">
        <h2>User Journey Map</h2>
        <p>Mapping Emily’s user journey 
revealed how helpful it 
would be for users to have 
access to an online learning platform.
</p>
        <img src={audit1} alt="User Journey Map" />
        <img src={audit2} alt="User Journey Map" />
    </section>
  );
};

export default CompetitiveAudit;
