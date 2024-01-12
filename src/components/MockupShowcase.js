import React from 'react';
import ExplorePage from '../assets/Explore-Page.png';
import homepageMobile from '../assets/Explore-Page mobile.png';
import CourseInfopage from '../assets/Course-Info-page.png';
import menupageMobile from '../assets/Course-Info-page mobile.png';
import Coursematerial from '../assets/Course-material.png';
import reservationpageMobile from '../assets/Course-material mobile.png';
import Completionpage from '../assets/Completion-page.png';
import ConfirmReservationMobile from '../assets/Completion-page mobile.png';

const MockupShowcase = () => {
  return (
      <section className="mockup-showcase">
        <div className="mockup1">
          <img src={ExplorePage} alt="homepage" />
          <img src={homepageMobile} alt="homepage mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={CourseInfopage} alt="menu mobile version" />
          <img src={menupageMobile} alt="menu mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={Coursematerial} alt="reservation" />
          <img src={reservationpageMobile} alt="reservation mobile version" className="mobile-res" />
        </div>

        <div className="mockup1">
          <img src={Completionpage} alt="confirmed reservation" />
          <img src={ConfirmReservationMobile} alt="confirmed reservation mobile version" className="mobile-res" />
        </div>
      </section>
  );
};

export default MockupShowcase;
