import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    services: {
      obm: false,
      virtualAssistant: false,
      consulting: false,
      retailSupport: false,
      unsure: false,
    },
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        services: {
          ...formData.services,
          [name]: checked,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call email service here to send the form data
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-section">
      <div className="contact-left">
        <h2>
          Ready to streamline your tasks, boost your success, and create space
          for what truly matters?
          <br />
          <br />
          Let's make it happen together!
        </h2>
        <p>
          Excited to help you achieve your goals and streamline your workflow!
        </p>
        <p>
          Fill out the form, and I'll reach out to discuss how we can get
          started.
        </p>
      </div>
      <div className="contact-right">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              First Name<span className="required-star">*</span>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Last Name<span className="required-star">*</span>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </label>
          </div>

          <label>
            Email<span className="required-star">*</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Company/Organisation<span className="required-star">*</span>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </label>

          <fieldset>
            <legend>
              Please indicate which services you're interested in
              <span className="required-star">*</span>
            </legend>
            <label>
              <input
                type="checkbox"
                name="obm"
                checked={formData.services.obm}
                onChange={handleChange}
              />{" "}
              Administrative services
            </label>
            <label>
              <input
                type="checkbox"
                name="virtualAssistant"
                checked={formData.services.virtualAssistant}
                onChange={handleChange}
              />{" "}
              Web Development
            </label>
            <label>
              <input
                type="checkbox"
                name="consulting"
                checked={formData.services.consulting}
                onChange={handleChange}
              />{" "}
              Social Media Management
            </label>
            <label>
              <input
                type="checkbox"
                name="retailSupport"
                checked={formData.services.retailSupport}
                onChange={handleChange}
              />{" "}
              Content Creation
            </label>
          </fieldset>

          <label>
            Describe your needs<span className="required-star">*</span>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
