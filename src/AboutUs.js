import React from "react";

function AboutUs() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">About Us</h2>

      <div className="row justify-content-center">
        <div className="col-lg-8">
          <p className="lead text-muted mb-4">
            Smart Campus AI Assistant is an AI-powered platform designed to
            streamline campus operations and improve student and faculty
            experiences. It integrates workflow automation, AI-driven career
            guidance, smart leave management, and intelligent communication
            tools into a single ecosystem.
          </p>

          <h5 className="fw-semibold mt-4">Our Mission</h5>
          <p className="text-muted">
            To empower students and faculty by simplifying campus workflows,
            providing personalized career guidance, and enhancing
            communication using AI technology.
          </p>

          <h5 className="fw-semibold mt-4">Our Vision</h5>
          <p className="text-muted">
            To create a seamless and intelligent campus ecosystem where
            students focus on learning and faculty focus on teaching, while AI
            handles administrative tasks efficiently.
          </p>

          <h5 className="fw-semibold mt-4">Core Modules</h5>
          <ul className="list-group list-group-flush mb-3">
            <li className="list-group-item">Career Guidance AI Assistant</li>
            <li className="list-group-item">Smart Leave & Permission Manager</li>
            <li className="list-group-item">AI Office Admin Assistant (Campus Communication Automation)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
    