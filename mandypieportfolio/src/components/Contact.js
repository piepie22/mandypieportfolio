import React from 'react';

// info boxes with header, resume, email, and social links
export default function Contact() {
  return (
    <section id="contact">
      <h2 className="contact-heading">Connect with Me!</h2>
      <div className="info-container">
        <div className="info-box">
          <div className="info-title">Resume</div>
          <a className="info-link" href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:79d8af49-b28c-4d6d-81ce-3a5633c03b1a" target="_blank" rel="noopener noreferrer">
            View Here
          </a>
        </div>
        <div className="info-box">
          <div className="info-title">Email</div>
          <a className="info-link" href="mailto:pieczynskimandy@yahoo.com" target="_blank" rel="noopener noreferrer">
            pieczynskimandy@yahoo.com
          </a>
        </div>
        <div className="info-box">
          <div className="info-title">Follow Along</div>
          <a className="info-link" href="https://github.com/piepie22" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a className="info-link" href="https://www.linkedin.com/in/mandy-pieczynski/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
