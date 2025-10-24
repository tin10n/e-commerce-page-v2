import React from "react";
import ContactForm from "../components/ContactForm";
import '../styles/contact.css';
import '../styles/shared.css';

const ContactPage = () => {
  return (
    <>
      <main>
        <section>
          <img
            id="main-img2"
            src="/Images/sl1.avif"
            alt="Floral Valentino Bag"
          />
          <h1 className="contact__title">Contact Us</h1>
          <section className="contact__container">
            <div className="contact__options">
              <div className="contact__details">
                <h2 className="contact_subtitle">Can't Find What You're Looking For?</h2>
                <h3 className="contact__method">Call Us:</h3>
                <p>
                  For general inquiries and questions about your order status, give us a ring. We’re
                  always happy to hear from you. Hours: 7 AM to 1 PM EST daily.
                </p>
                <p>
                  <a href="tel:+12127847670" aria-label="Call SZN support at +1 212 784 7670">
                    +1-212-784-7670
                  </a>
                </p>
                <h3 className="contact__method">Text Us:</h3>
                <p>Hours: 7am to 1am EST 7 days a week</p>
                <p>
                  Text <strong>Hello</strong> to{" "}
                  <a href="sms:+12404484442">+1‑240‑448‑4442</a> to speak with us!
                </p>
                <em>
                  By texting the SZN: Autumn Customer Care team, you agree to receive text messages.
                  We use your personal information to respond to your MESSAGES and for training and
                  quality purposes. Read our privacy policy for more details.
                </em>
                <h3 className="contact__method">Live Chat:</h3>
                <p>Available 24/7 — our Customer Care team is here for you!</p>
              </div>
            </div>
            <div className="contact__form--container">
              <ContactForm />
            </div>
          </section>
        </section>
      </main>
    </>
  );
};

export default ContactPage;
