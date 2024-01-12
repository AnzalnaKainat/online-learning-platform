import React from 'react';
import Beforecourse from '../assets/Digital-wireframe/Course 2.png';
import Aftercourse from '../assets/Course-Info-page.png';
import Aftercourse1 from '../assets/My-Courses.png';

import BeforeCourseweek from '../assets/Digital-wireframe/Course week1.png';
import AfterCourseweek from '../assets/Course-material.png';

import BeforeDiscoverCourse from '../assets/Digital-wireframe/Discover Course.png';
import AfterDiscoverCourse from '../assets/Explore-Page.png';


const Iteration = () => {
  return (
    <section className="iteration" id="usability-findings">
      <h2>Mockups</h2>

      <div className="finding">
        <h3>Finding 1</h3>
        <p>
        Based on insights from usability studies, I implemented design changes, resulting in the creation of a new page named<b>"My Courses."</b>  This page now conveniently<b> displays all the courses that users have enrolled in.
</b>
        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={ Beforecourse} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={Aftercourse} alt="" />
            <img src={Aftercourse1} alt="" />
          </div>


        </div>
      </div>

      <hr />

      <div className="finding">
        <h3>Finding 2</h3>
        <p>
        For further design enhancement I included a <b>"Subtitle" and "Full Screen" option for better accessibility and user experience.</b> 

        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={BeforeCourseweek} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={AfterCourseweek} alt="" />
          </div>
        </div>
      </div>

      <hr />

      <div className="finding">
        <h3>Finding 3</h3>
        <p>
        Another design change involved <b>placing pricing information right at the beginning</b>, eliminating users needing to open each course individually to view its price.

        </p>
        <div className="showcasing-changes">
          <div className="usabilities">
            <h5>Before Usability</h5>
            <img src={BeforeDiscoverCourse} alt="" />
          </div>

          <div className="usabilities">
            <h5>After Usability</h5>
            <img src={AfterDiscoverCourse} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Iteration;
