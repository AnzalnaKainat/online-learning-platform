import React from 'react';
import personaImage from '../assets/Emily Martinez Persona.jpg'; 

const Persona = () => {
  return (
    <section className="persona" id="persona">
      <h2>Persona: Emily Martinez</h2>
      <img src={personaImage} alt="Persona" />
      <h4>Problem Statement</h4>
      <p>
      Emily is a dedicated and hardworking administrative assistant in her mid-40s who needs to advance her career by gaining new skills and knowledge because she feels stuck in her current role due to her inability to pursue higher education after high school.
      </p>
    </section>
  );
};

export default Persona;

