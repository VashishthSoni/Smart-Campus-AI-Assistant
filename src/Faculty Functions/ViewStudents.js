import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FacultyViewStudents = () => {
  const [facultyId, setFacultyId] = useState("");
  const [department, setDepartment] = useState("");
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStudents([]);

    try {
      const response = await fetch(
        "https://ruthtomaskg.app.n8n.cloud/webhook/8c68efa3-8db0-4e64-9900-173e50455959fstu",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ facultyId, department }),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch students");

      const data = await response.json();
      setStudents(data.students || []);
    } catch (error) {
      console.error(error);
      alert("Error fetching students. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="text-center mb-4">
        <h1 className="fw-bold">Student Management System</h1>
        <p className="text-muted">Faculty portal for viewing student information</p>
      </div>

      {/* Faculty Form */}
      <div className="card shadow-sm p-4 mb-5 rounded-4" style={{ borderRadius: "1rem" }}>
        <h5 className="mb-3 text-dark ">Faculty Information</h5>
        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Enter your faculty ID"
              value={facultyId}
              onChange={(e) => setFacultyId(e.target.value)}
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="text"
              className="form-control rounded-pill"
              placeholder="Enter department name"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <div className="col-12 text-center">
            <button
              type="submit"
              className="btn btn-gradient px-5 py-2 rounded-pill"
              disabled={loading}
            >
              {loading ? "Fetching..." : "View Students"}
            </button>
          </div>
        </form>
      </div>

      {/* Student Table */}
      {students.length > 0 && (
        <div className="table-responsive shadow-sm rounded-4 overflow-hidden">
          <table className="table table-hover align-middle mb-0" style={{ background: "#f63ffcff" }}>
            <thead className="table-light">
              <tr>
                <th>Enrollment</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Semester</th>
                <th>Department</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Fee Status</th>
                <th>Mentor Name</th>
                <th>Mentor ID</th>
                <th>SPI</th>
                <th>CPI</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, idx) => (
                <tr key={idx}>
                  <td>{student.Enrollment}</td>
                  <td>{student["First Name"]}</td>
                  <td>{student["Last Name"]}</td>
                  <td>{student["Current Semester"]}</td>
                  <td>{student.Department}</td>
                  <td>{student["Student Email"]}</td>
                  <td>{student.Phone}</td>
                  <td>{student["Fee Status"]}</td>
                  <td>{student["Mentor Name"]}</td>
                  <td>{student["Mentor ID"]}</td>
                  <td>{student.SPI}</td>
                  <td>{student.CPI}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Gradient Button CSS */}
      <style>
        {`
          .btn-gradient {
            background: linear-gradient(90deg, #a18cd1 0%, #fbc2eb 100%);
            color: white;
            font-weight: 500;
            transition: transform 0.2s;
          }
          .btn-gradient:hover {
            transform: translateY(-2px);
          }
        `}
      </style>
    </div>
  );
};

export default FacultyViewStudents;
