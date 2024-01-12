import React from 'react';
import HighFiPrototypeImage from '../assets/OLP-highfi.PNG'; 

const HighFiPrototype = () => {
  return (
    <section className="prototype" id="high-fi">
      <div className="prototype-info">
        <h3>High-Fidelity Prototype</h3>
        <p>
        The high-fidelity prototype followed the same user flow as the low-fidelity prototype, including design changes made after the usability study.


        </p>
        <a href="https://xd.adobe.com/view/bfcfbfd4-bdb9-414a-83a2-7b2d86a9e1a6-ea9c/" target="_blank" rel="noopener noreferrer">View High-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={HighFiPrototypeImage} alt="High-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default HighFiPrototype;
