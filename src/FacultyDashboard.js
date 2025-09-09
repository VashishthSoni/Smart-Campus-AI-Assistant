import React from "react";
import { Link } from "react-router-dom";

function FacultyDashboard() {
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">👩‍🏫 Faculty Dashboard</h2>

      <div className="row">
        {/* Profile Card */}
        <div className="col-md-4">
          <div className="card shadow-lg mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">My Profile</h5>
              <p className="card-text">View and update your faculty profile details.</p>
              <button className="btn btn-primary">View Profile</button>
            </div>
          </div>
        </div>

        {/* Courses Card */}
        <div className="col-md-4">
          <div className="card shadow-lg mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">My Courses</h5>
              <p className="card-text">Manage courses, assignments, and resources.</p>
              <button className="btn btn-success">Manage Courses</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-lg mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Students</h5>
              <p className="card-text">View enrolled students and their performance.</p>
              <Link to="/Faculty Functions/view-students" className="btn btn-warning">
                View Students
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Notifications Card */}
        <div className="col-md-6">
          <div className="card shadow-lg mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Notifications</h5>
              <p className="card-text">Check updates and announcements.</p>
              <button className="btn btn-info">View Notifications</button>
            </div>
          </div>
        </div>

        {/* Settings Card */}
        <div className="col-md-6">
          <div className="card shadow-lg mb-4">
            <div className="card-body text-center">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">Manage account settings and security.</p>
              <button className="btn btn-dark">Settings</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FacultyDashboard;
