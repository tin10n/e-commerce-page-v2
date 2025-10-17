import React, { useState } from "react";

const ContactForm = () => {
  // Form field states
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    topic: "",
    message: "",
  });

  // Error messages for fields
  const [errors, setErrors] = useState({});

  // Validation functions
  const getFieldName = (field) =>
    field.charAt(0).toUpperCase() + field.slice(1);

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.trim());
  };

  const validatePhoneNumber = (number) => {
    const re = /^[0-9]{10,15}$/;
    return re.test(number.trim());
  };

  const validateFieldLength = (value, min, max) => {
    return value.length >= min && value.length <= max;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" })); // Clear error on change
  };

  // Validate form fields and set errors
  const validateForm = () => {
    const newErrors = {};

    // Required fields
    ["firstname", "lastname", "email", "phonenumber", "message", "topic"].forEach(
      (field) => {
        if (!formData[field].trim()) {
          newErrors[field] = `${getFieldName(field)} is required`;
        }
      }
    );

    // Length checks
    if (
      formData.firstname &&
      !validateFieldLength(formData.firstname, 2, 20)
    ) {
      newErrors.firstname =
        "First Name must be between 2 and 20 characters";
    }
    if (
      formData.lastname &&
      !validateFieldLength(formData.lastname, 2, 20)
    ) {
      newErrors.lastname = "Last Name must be between 2 and 20 characters";
    }
    if (
      formData.message &&
      !validateFieldLength(formData.message, 10, 500)
    ) {
      newErrors.message = "Message must be between 10 and 500 characters";
    }

    // Email format
    if (formData.email && !validateEmail(formData.email)) {
      newErrors.email = "Email is not valid";
    }

    // Phone number format
    if (formData.phonenumber && !validatePhoneNumber(formData.phonenumber)) {
      newErrors.phonenumber = "Phone number must be between 10 and 15 digits";
    }

    // Topic selection
    if (formData.topic === "") {
      newErrors.topic = "Please select a topic";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // On form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // No errors: you can process form here (send to backend or show success)
      alert("Form submitted successfully!");
      // Reset form if you want
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        topic: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <form className="contact__form" onSubmit={handleSubmit} noValidate>
      <h2 className="contact__form--title">Send Us a Message</h2>

      {["firstname", "lastname", "email", "phonenumber", "topic", "message"].map((field) => {
        if (field === "topic") {
          return (
            <div
              key={field}
              className={`form-control ${errors[field] ? "error" : ""} ${
                !errors[field] && formData[field] ? "success" : ""
              }`}
            >
              <label htmlFor={field}>Topic</label>
              <select
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
              >
                <option value="">Select A Topic</option>
                <option value="1">Online Orders</option>
                <option value="2">In Store Purchases</option>
                <option value="3">Product Information</option>
                <option value="4">Returns & Exchange</option>
                <option value="5">Repairs</option>
                <option value="6">Store Information</option>
                <option value="7">Other</option>
              </select>
              <small>{errors[field]}</small>
            </div>
          );
        }

        if (field === "message") {
          return (
            <div
              key={field}
              className={`form-control ${errors[field] ? "error" : ""} ${
                !errors[field] && formData[field] ? "success" : ""
              }`}
            >
              <label htmlFor={field}>Message</label>
              <textarea
                id={field}
                name={field}
                placeholder="Type your message here..."
                value={formData[field]}
                onChange={handleChange}
                required
              />
              <small>{errors[field]}</small>
            </div>
          );
        }

        // For firstname, lastname, email, phonenumber inputs
        return (
          <div
            key={field}
            className={`form-control ${errors[field] ? "error" : ""} ${
              !errors[field] && formData[field] ? "success" : ""
            }`}
          >
            <label htmlFor={field}>
              {getFieldName(field === "phonenumber" ? "number" : field)}
            </label>
            <input
              type={field === "email" ? "email" : "text"}
              id={field === "phonenumber" ? "number" : field}
              name={field}
              placeholder={
                field === "phonenumber"
                  ? "Phone Number"
                  : getFieldName(field)
              }
              value={formData[field]}
              onChange={handleChange}
              required
            />
            <small>{errors[field]}</small>
          </div>
        );
      })}

      <button type="submit" aria-label="Send Message">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
