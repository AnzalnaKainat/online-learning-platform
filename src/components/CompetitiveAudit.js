import React from 'react';
import audit1 from '../assets/CAudit1.PNG';
import audit2 from '../assets/CAudit2.PNG'; 

const  CompetitiveAudit= () => {
  return (
    <section className="persona UJmap" id="UJmap">
        <h2>Competitive Audit</h2>
        <p>An audit of a few competitor’s products provided direction on gaps and opportunities to address with the virtual scholar website. 
</p>
        <img src={audit1} alt="Competitive Audit" />
        <img src={audit2} alt="Competitive audit" />
    </section>
  );
};

export default CompetitiveAudit;
