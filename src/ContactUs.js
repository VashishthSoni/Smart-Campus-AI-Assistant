import React from "react";

function ContactUs() {
  return (
    <div className="container py-5">
      <h2 className="fw-bold mb-4 text-center">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-lg-6">
          <p className="text-muted mb-4 text-center">
            Have questions or need support? Fill out the form below and we will get back to you as soon as possible.
          </p>

          <div className="card shadow-lg">
            <div className="card-body">
              <form>
                {/* Name */}
                <div className="mb-3">
                  <label htmlFor="contactName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contactName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="contactEmail" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="contactEmail"
                    placeholder="yourname@example.com"
                    required
                  />
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label htmlFor="contactMessage" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="contactMessage"
                    rows="5"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-4 text-center text-muted">
                <p>Email: support@smartcampusai.com</p>
                <p>Phone: +91 1234 567 890</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
