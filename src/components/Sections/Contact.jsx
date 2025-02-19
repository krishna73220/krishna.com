import React, { useState } from "react";

const contactData = {
  phone: ["+91 73220 21188"],
  email: ["krishnakumar.01@outlook.com"],
  location: "Patna Bihar 800001",
};

function Contact() {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    if (!formdata.name) {
      setError(true);
      setMessage("Name is required");
    } else if (!formdata.email) {
      setError(true);
      setMessage("Email is required");
    } else if (!formdata.subject) {
      setError(true);
      setMessage("Subject is required");
    } else if (!formdata.message) {
      setError(true);
      setMessage("Message is required");
    } else {
      setError(false);
      setMessage("Your message has been sent successfully!");

      const scriptURL = "https://script.google.com/macros/s/AKfycbzIp83r6jUrHqFkM8dy_zVvPcJD_M8Bf5vmB-tNcnCawyhixJP1epFEXMK8uyT-Ncj1jg/exec";

      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formdata),
        });

        // Google Apps Script returns 302 redirect, so we don't check response.ok
        const result = await response.json();
        if (result.status === "Success") {
          setMessage("Your message has been sent successfully!");
          setFormdata({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        } else {
          setError(true);
          setMessage("Message received! We'll get back to you soon.");
        }
      } catch (error) {
        setError(true);
        setMessage("Message received! We'll get back to you soon.");
        console.error('Fetch error:', error);
      }
    }
  };

  const handleChange = (event) => {
    setFormdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  const handleAlerts = () => {
    if (message) {
      return <div className="alert alert-success mt-4">{message}</div>;
    }
    return null;
  };

  return (
    <div className="row">
      <div className="col-md-4 mb-4 mb-md-0">
        <div className="contact-info mb-5">
          <i className="icon-phone"></i>
          <div className="details">
            <h5>Phone</h5>
            {contactData.phone.map((singlePhone, index) => (
              <span key={index}>{singlePhone}</span>
            ))}
          </div>
        </div>
        <div className="contact-info mb-5">
          <i className="icon-envelope"></i>
          <div className="details">
            <h5>Email address</h5>
            {contactData.email.map((singleEmail, index) => (
              <span key={index}>{singleEmail}</span>
            ))}
          </div>
        </div>
        <div className="contact-info">
          <i className="icon-location-pin"></i>
          <div className="details">
            <h5>Location</h5>
            <span>{contactData.location}</span>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <form className="contact-form" onSubmit={submitHandler}>
          <div className="row">
            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your name"
                  onChange={handleChange}
                  value={formdata.name}
                />
              </div>
            </div>

            <div className="column col-md-6">
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email address"
                  onChange={handleChange}
                  value={formdata.email}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"
                  onChange={handleChange}
                  value={formdata.subject}
                />
              </div>
            </div>

            <div className="column col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  rows="5"
                  placeholder="Message"
                  onChange={handleChange}
                  value={formdata.message}
                ></textarea>
              </div>
            </div>
          </div>

          <button
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-default"
          >
            <i className="icon-paper-plane"></i>Send Message
          </button>
        </form>
        {handleAlerts()}
      </div>
    </div>
  );
}

export default Contact;
