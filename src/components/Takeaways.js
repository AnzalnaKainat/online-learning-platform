import React from 'react';

const Takeaways = () => {
  return (
    <section className="takeaways">
      <h2>Takeaways</h2>
      <div className="takeaways-row">
        <div className="takeaways-col">
          <h4>Impacts</h4>
          <p>
          Users mentioned that the online learning platform, along with scholarship opportunities for low-income students, made a significant impact on their educational journey. 
            <br /><br />
            One quote from peer feedback:
            <i>"it opened doors they thought were closed."</i>
          </p>
        </div>

        <div className="takeaways-col">
          <h4>What I learned</h4>
          <p>
          I found that breaking down a big problem into smaller steps and focusing on what users truly need helped me create useful and doable solutions.

          </p>
        </div>
      </div>
    </section>
  );
};

export default Takeaways;
