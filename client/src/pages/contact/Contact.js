import React from "react";
import { TitlePage, Button } from "../../components/index";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <TitlePage title="Contact Us" icon="😁" />
      <div className="container">
        <div className="contact-info">
          <h2>Call us or visit place</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className="conatac-info-list">
            <div className="contact-info-item">
              <i className="fas fa-mobile-alt"></i>
              <h5>Phone</h5>
              <p>+0123 456 789</p>
              <p>+0123 456 789</p>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h5>Address</h5>
              <p>Ha Noi</p>
              <p>Bac Ninh</p>
            </div>
            <div className="contact-info-item">
              <i className="far fa-envelope"></i>
              <h5>Email</h5>
              <p>vhkhuyen1810@gmail.com</p>
              <p>vukhuyen18102001@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contact-map-form">
          <div className="contact-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.113115808291!2d105.80123181415748!3d21.028159493176464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab424a50fff9%3A0xbe3a7f3670c0a45f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBHaWFvIHRow7RuZyBW4bqtbiB04bqjaQ!5e0!3m2!1svi!2s!4v1637396124117!5m2!1svi!2s"
              width="600"
              title="My location"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-form">
            <div className="contact-form-heading">
              <h2>Send us a message</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <form action="">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <textarea placeholder="Comment"></textarea>
              <Button come="/">SUBMIT</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
