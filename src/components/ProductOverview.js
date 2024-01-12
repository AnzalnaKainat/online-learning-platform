import React from 'react';

const ProductOverview = () => {
  return (
    <div>
        
       {/* Product Description */}
      <section className="the-product">
        <h1>Online Learning Platform  Website
</h1>
        <p>
        
        Virtual Scholars is our online learning platform designed to empower individuals with the knowledge and skills needed to kickstart and advance careers. We offer a wide range of courses and resources for accessible, high-quality education, enabling learners to excel in their professional journeys. Our scholarship program ensures that financial obstacles don't limit access to this valuable opportunity. Our mission is to support and nurture talent, fostering personal and career growth for all.

        </p>
      </section>

      {/* Tool & Technologies */}
      <section className="row">
          <div className="col">
            <h5>Timeline</h5>
            <p>September 2023 to October 2023
</p>
          </div>

          <div className="col">
            <h5>Tools</h5>
            <p>AdobeXD</p>
          </div>

          <div className="col">
            <h5>Platform</h5>
            <p>Desktop</p>
          </div>
    </section>

    {/* Product Overview */}
    <div className="containers">
        <h2>Product Overview</h2>
        <section className="product-overview">
            <div className="col">
              <h5>My Role</h5>
              <p>UX designer designing a website for online learning platform from Ideation to Implementation</p>
            </div>
    
            <div className="col">
              <h5>The Problem</h5>
              <p>The problem we've observed is that many individuals face limited access to quality education and career advancement opportunities, whether due to financial constraints or because they are busy with their current jobs. This hinders their ability to acquire the knowledge and skills needed to excel in their careers or make successful career transitions.

              </p>
            </div>
            
            <div className="col">
              <h5>The Goal</h5>
              <p>Our goal is to create an inclusive online learning platform that empowers individuals, regardless of their financial background or current employment status, with the knowledge and skills required to excel in their careers and achieve successful career transitions. We aim to break down the barriers to quality education and professional growth.

</p>
            </div>
      </section>
    </div>

    {/* responsibilty */}
    <section className="responsibilty">
        <h2>My Responsibilities</h2>
        <p>Conducting interviews, paper and digital wireframing, low and high-fidelity prototyping, conducting usability studies, accounting for accessibility, and iterating on designs</p>
    </section>
    
    {/* user research pain points */}
    <section className="responsibilty">
        <h2>User Research: Summary</h2>
        <p>In our user research, we started with the assumption that users were primarily concerned about the cost of education. However, through surveys and interviews, our understanding evolved. We found that the flexibility of learning and the need for scholarships were more prominent concerns. Our insights now drive us to prioritize accessible and affordable learning options to cater to the diverse needs of our users. 
 
</p>
    </section>
    
    {/* User Research: Pain Points */}
    {/* <div class="containers color">
        <h2>User Research: Pain Points</h2>
        <section class="product-overview">
            <div class="col-findings one">
              <h5>Accessibility</h5>
              <p>The lack of language proficiency makes it, difficult to navigate</p>
            </div>
    
            <div class="col-findings two">
              <h5>Long Waiting Lines</h5>
              <p>Customers find waiting in lines at restaurants frustrating, especially when dining with family or friends.</p>
            </div>
            
            <div class="col-findings three">
              <h5>IA</h5>
              <p>Text-heavy menus in apps are often difficult to read and order from</p>
            </div>
      </section>
    </div> */}
    </div>
  );
};

export default ProductOverview;
