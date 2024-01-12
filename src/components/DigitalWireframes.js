import React from "react";
import DiscoverCourse from '../assets/Digital-wireframe/Discover Course.png'
import digitalHomepageMobile from '../assets/Homepage-wireframe 1.png'
import digitalMenu from '../assets/menu-wireframe.png'


const DigitalWireframes = () =>{
    return (
       <div>
  <section className="persona digital-wireframe">
    <h2>Digital Wireframes</h2>
    <p>Following the paper wireframe sketches, I designed the app to facilitate user-friendly course discovery based on their interests and subjects, alongside streamlining scholarship access. The aim is to create an accessible platform that supports education and financial aid for all.

</p>
    <img src={DiscoverCourse} alt="Digital wireframe" />
  </section>

  {/* Digital Wireframes Mobile responsive */}
  <section className="persona digital-wireframe-mobile">
    <h2>Digital Wireframes For Mobile Screen</h2>
    <p>Spending time on paper wireframes for the smaller screen version was essential in ensuring that the digital wireframes effectively addressed user concerns. The focus on the home screen remained the same, emphasizing solutions for pain points like language selection and restaurant categories.</p>
    <div className="images">
    <img src={digitalHomepageMobile} alt="" />
    <img src={digitalMenu} alt="" className="img-menu" />
    </div>
  </section>
       </div>
    );
};
export default DigitalWireframes;