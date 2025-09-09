import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import StudentLogin from "./StudentLogin";
import FacultyLogin from "./FacultyLogin";
import StudentRegister from "./StudentRegister";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import FacultyRegister from "./FacultyRegister";
import StudentDashboard from "./StudentDashboard";
import FacultyDashboard from "./FacultyDashboard";
import CareerGuide from "./Student Functions/CarrerGuide";
import ViewStudents from "./Faculty Functions/ViewStudents";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand fw-semibold" to="/">
            Smart Campus AI Assistant
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item ms-lg-2">
                <Link className="nav-link" to="/student-login">
                  Student Login
                </Link>
              </li>
              <li className="nav-item ms-lg-2">
                <Link className="nav-link" to="/faculty-login">
                  Faculty Login
                </Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>

      {/* ROUTES */}
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <div className="container py-5">
              <div className="row justify-content-center g-4">
                {/* Student Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="card shadow-sm text-center h-100"
                    style={{ height: "420px" }}
                  >
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title fw-bold">Login as Student 🧑‍🎓</h5>
                      <p className="card-text text-muted">
                        Access career guidance, leave applications, and campus updates.
                      </p>
                      <Link to="/student-login" className="btn btn-primary mt-3">
                        Student Login
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Faculty Card */}
                <div className="col-12 col-md-6 col-lg-4">
                  <div
                    className="card shadow-sm text-center h-100"
                    style={{ height: "420px" }}
                  >
                    <div className="card-body d-flex flex-column justify-content-center">
                      <h5 className="card-title fw-bold">Login as Faculty 👨‍🏫</h5>
                      <p className="card-text text-muted">
                        Apply for leave, track approvals, and manage communication.
                      </p>
                      <Link to="/faculty-login" className="btn btn-primary mt-3">
                        Faculty Login
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        />

        {/* Student Login Page */}
        <Route path="/student-login" element={<StudentLogin />} />

        {/* Faculty Login Page */}
        <Route path="/faculty-login" element={<FacultyLogin />} />

        {/* Student Register Page */}
        <Route path="/student-register" element={<StudentRegister />} />

        {/* About Us Page */}
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* Contact Us Page */}
        <Route path="/contact-us" element={<ContactUs />} />
        
        {/* Student Register Page*/}
        <Route path="/faculty-register" element={<FacultyRegister />} />
        <Route path="/student-login" element={<StudentLogin />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
        <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
        <Route path="/Student Functions/career-guide" element={<CareerGuide />} />
        
        <Route path="/Faculty Functions/view-students" element={<ViewStudents />} />
      </Routes>
    </>
  );
}

export default App;
