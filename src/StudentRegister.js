import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentRegister() {
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [enrollment, setEnrollment] = useState("");
  const [semester, setSemester] = useState("");
  const [gender, setGender] = useState("");
  const [branch, setBranch] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://ruthtomaskg.app.n8n.cloud/webhook/69e3bd23-b497-47a9-891d-b88bbd96e69bsr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          password,
          enrollment,
          semester,
          gender,
          branch,
          mobile
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Registration successful! Please login.");
        navigate("/student-login"); // redirect to login page
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                Student Registration 📝
              </h3>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                {/* First Name */}
                <div className="mb-3">
                  <label htmlFor="studentFName" className="form-label">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentFName"
                    value={firstname}
                    onChange={(e) => setFName(e.target.value)}
                    required
                  />
                </div>

                {/* Last Name */}
                <div className="mb-3">
                  <label htmlFor="studentLName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentLName"
                    value={lastname}
                    onChange={(e) => setLName(e.target.value)}
                    required
                  />
                </div>

                {/* Enrollment */}
                <div className="mb-3">
                  <label htmlFor="studentEnrollment" className="form-label">Enrollment No.</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentEnrollment"
                    value={enrollment}
                    onChange={(e) => setEnrollment(e.target.value)}
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="studentEmail" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="studentEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                {/* Semester */}
                <div className="mb-3">
                  <label htmlFor="studentSemester" className="form-label">Semester</label>
                  <select
                    className="form-select"
                    id="studentSemester"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    required
                  >
                    <option value="">Select Semester</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>
                </div>

                {/* Gender */}
                <div className="mb-3">
                  <label className="form-label">Gender</label>
                  <div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setGender(e.target.value)}
                        required
                      />
                      <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label className="form-check-label">Female</label>
                    </div>
                  </div>
                </div>

                {/* Branch */}
                <div className="mb-3">
                  <label htmlFor="studentBranch" className="form-label">Branch (Full Name)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentBranch"
                    value={branch}
                    onChange={(e) => setBranch(e.target.value)}
                    required
                  />
                </div>

                {/* Mobile Number */}
                <div className="mb-3">
                  <label htmlFor="studentMobile" className="form-label">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="studentMobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    pattern="[0-9]{10}"
                    placeholder="Enter 10-digit number"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="studentPassword" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="studentPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Confirm Password */}
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-success">
                    Register
                  </button>
                </div>
              </form>

              {/* Already Registered */}
              <div className="mt-3 text-center">
                <a href="/student-login" className="small text-decoration-none">
                  Already have an account? Login here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentRegister;
