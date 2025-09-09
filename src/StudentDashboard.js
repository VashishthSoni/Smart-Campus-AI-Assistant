import React from "react";
import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">🎓 Student Dashboard</h2>
      <p className="lead text-center text-muted mb-5">
        Welcome! Choose a section below to continue.
      </p>

      <div className="row g-4">
        {/* Career Guide */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">💼 Career Guidance</h5>
              <p className="card-text text-muted">
                Explore career paths, resources, and personalized guidance.
              </p>
              <Link to="/Student Functions/career-guide" className="btn btn-primary mt-2">
                Open
              </Link>
            </div>
          </div>
        </div>

        {/* Leave Requests */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">📝 Leave Requests</h5>
              <p className="card-text text-muted">
                Apply for leave and check your approval status.
              </p>
              <Link to="/leave-requests" className="btn btn-primary mt-2">
                Open
              </Link>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">🔔 Notifications</h5>
              <p className="card-text text-muted">
                Stay updated with campus circulars and announcements.
              </p>
              <Link to="/notifications" className="btn btn-primary mt-2">
                Open
              </Link>
            </div>
          </div>
        </div>

        {/* Profile */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">👤 Profile</h5>
              <p className="card-text text-muted">
                View and update your personal and academic details.
              </p>
              <Link to="/profile" className="btn btn-primary mt-2">
                Open
              </Link>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">📚 Resources</h5>
              <p className="card-text text-muted">
                Access learning materials, guides, and recommendations.
              </p>
              <Link to="/resources" className="btn btn-primary mt-2">
                Open
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="text-center mt-5">
        <button
          className="btn btn-danger"
          onClick={() => {
            window.location.href = "/student-login";
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default StudentDashboard;
