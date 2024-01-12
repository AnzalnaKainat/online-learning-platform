import React from 'react';
import StudyTypeImage from '../assets/study-type.png';
import LocationImage from '../assets/location.png';
import ParticipantsImage from '../assets/participants.png';
import LengthImage from '../assets/length.png';

const UsabilityParameters = () => {
  return (
    <div>
    
    {/* Usability Study: parameters */}
    <section className="usability">
      <h2>Usability Study: parameters</h2>
      <div className="parameter">
        <div className="group">
          <img src={StudyTypeImage} alt="Study Type" />
          <h4>Study Type</h4>
          <p>Unmoderated usability study</p>
        </div>
        <div className="group">
          <img src={LocationImage} alt="Location" />
          <h4>Location</h4>
          <p>Pakistan, Remote</p>
        </div>
        <div className="group">
          <img src={ParticipantsImage} alt="Participants" />
          <h4>Participants</h4>
          <p>5 participants</p>
        </div>
        <div className="group">
          <img src={LengthImage} alt="Length" />
          <h4>Length</h4>
          <p>30 minutes</p>
        </div>
      </div>
    </section>
    
    {/* Usability Study: Findings */}
    <div className="containers color" id="usabilty-findings">
        <h2>Usability Study: Findings</h2>
        <section className="product-overview">
          <div className="col-findings one">
            <h5>Enrolled Courses</h5>
            <p>The users desire a comprehensive and easily accessible list of their enrolled courses for better course management.
</p>
          </div>

          <div className="col-findings two">
            <h5>Accessibility Features</h5>
            <p>The users value accessibility features to accommodate various learning needs, including those with hearing or visual impairments such as subtitle and full screen feature on videos
</p>
          </div>

          <div className="col-findings three">
            <h5>Pricing Information</h5>
            <p>The users expect transparency in pricing details to make informed decisions about course enrollment.
</p>
          </div>
        </section>
      </div>
      
    </div>
  );
};

export default UsabilityParameters;
