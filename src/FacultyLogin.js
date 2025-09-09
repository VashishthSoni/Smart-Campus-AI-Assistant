import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FacultyLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = {
      email: e.target.facultyEmail.value,
      password: e.target.facultyPassword.value,
    };

    try {
      const response = await fetch(
        "https://ruthtomaskg.app.n8n.cloud/webhook/4a6ec039-0d8a-4c7a-ae08-63e44cadc44afl",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json(); // parse response
      
      if (result.success) {
        // ✅ login success
        setTimeout(() => {
          setLoading(false);
          navigate("/faculty-dashboard");
        }, 2000); // 2s delay if you want
      } else {
        // ❌ login failed
        setLoading(false);
        alert(result.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Login error:", err);
      setLoading(false);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">
                Faculty Login 👨‍🏫
              </h3>

              <form onSubmit={handleSubmit}>
                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="facultyEmail" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="facultyEmail"
                    placeholder="faculty@example.com"
                    required
                  />
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label htmlFor="facultyPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="facultyPassword"
                    placeholder="Enter your password"
                    required
                  />
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </div>
              </form>

              {/* Loading message */}
              {loading && (
                <div className="text-center mt-3">
                  <p>Please wait... processing your login 🔄</p>
                </div>
              )}

              {/* Extra Links */}
              <div className="mt-3 text-center">
                <a href="#forgot" className="small text-decoration-none">
                  Forgot Password?
                </a>
                <br />
                <a href="./faculty-register" className="small text-decoration-none">
                  New Faculty? Register here
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FacultyLogin;
