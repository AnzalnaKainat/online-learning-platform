import React from "react";
import LowFiPrototypeImage from '../assets/OLP lowfi.PNG'; // Adjust the path accordingly

const LowFiPrototypeSection = () => {
  return (
    <section className="prototype" id="low-fi">
      <div className="prototype-info">
        <h3>Low-Fidelity Prototype</h3>
        <p>
        To prepare for usability testing, I developed a low-fidelity prototype that connected the user flow for enrolling in a desired course, with an option to apply for a scholarship if the user couldn't afford it.


        </p>
        <a href="https://xd.adobe.com/view/6bfcde09-1743-4abb-9eea-1f9d81c76690-3eaf/" target="_blank" rel="noopener noreferrer">View Low-fidelity prototype</a>
      </div>

      <div className="prototype-image">
        <img src={LowFiPrototypeImage} alt="Low-Fidelity Prototype" />
      </div>
    </section>
  );
};

export default LowFiPrototypeSection;
