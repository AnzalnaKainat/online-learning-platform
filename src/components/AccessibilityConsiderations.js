import React from 'react';

const AccessibilityConsiderations = () => {
  return (
    <div className="containers color">
      <h2>Accessibility considerations</h2>
      <section className="product-overview">
        <div className="col-findings one">
          <p>Ensured color choices meet WCAG standards for contrast, alternative information presentation, and avoid problematic color combinations.
</p>
        </div>

        <div className="col-findings two">
          <p>Provide subtitles for all videos and allow users to expand the video to full screen for improved visibility.
</p>
        </div>

        <div className="col-findings three">
          <p>Clear labels for interactive elements that can be read by screen readers.
</p>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityConsiderations;
