import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FacultyRegister() {
  const [firstname, setFName] = useState("");
  const [lastname, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [facultyId, setFacultyId] = useState("");
  const [facultyCode, setFacultyCode] = useState("");
  const [DeptId, setDeptId] = useState("");
  const [department, setDepartment] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("https://ruthtomaskg.app.n8n.cloud/webhook-test/69e3bd23-b497-47a9-891d-b88bbd96e69bfr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          address,
          email,
          facultyId,
          facultyCode,
          department,
          DeptId,
          mobile,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Registration successful! Please login.");
        navigate("/faculty-login"); // redirect to login page
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-250">
      <div className="card p-4 m-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4">Faculty Registration</h2>

        {error && <p className="text-danger text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              value={firstname}
              onChange={(e) => setFName(e.target.value)}
              required
            />
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastname}
              onChange={(e) => setLName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Address */}
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="textarea"
              className="form-control"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          {/* Faculty ID */}
          <div className="mb-3">
            <label className="form-label">Faculty ID</label>
            <input
              type="text"
              className="form-control"
              placeholder="101"
              value={facultyId}
              onChange={(e) => setFacultyId(e.target.value)}
              required
            />
          </div>
          {/* Faculty Code */}
          <div className="mb-3">
            <label className="form-label">Faculty Code</label>
            <input
              type="text"
              className="form-control"
              placeholder="FAC-CSE-09"
              value={facultyCode}
              onChange={(e) => setFacultyCode(e.target.value)}
              required
            />
          </div>

          {/* Department */}
          <div className="mb-3">
            <label className="form-label">Department (Full Name)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Computer Engineering"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          {/* Department ID */}
          <div className="mb-3">
            <label className="form-label">Department ID</label>
            <input
              type="text"
              className="form-control"
              value={DeptId}
              onChange={(e) => setDeptId(e.target.value)}
              required
            />
          </div>

          {/* Mobile Number */}
          <div className="mb-3">
            <label className="form-label">Mobile Number</label>
            <input
              type="tel"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              pattern="[0-9]{10}"
              placeholder="Enter 10-digit number"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-3">
            <label className="form-label">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default FacultyRegister;
