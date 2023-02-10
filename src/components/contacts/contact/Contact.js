import React from "react";
import "./Contact.css";
import * as img from "./image/image";

const Contact = (contactsData) => {
  return (
    <div className="wrapper">
      {contactsData.gender === "female" ? (
        <img
          className="contact-gender"
          src={img.female}
          alt={contactsData.gender}
        ></img>
      ) : (
        <img
          className="contact-gender"
          src={img.male}
          alt={contactsData.gender}
        ></img>
      )}
      <div className="contact-content">
        <div className="content">
          <p>{contactsData.firstName}</p>
        </div>
        <div className="content">
          <p className="LastName">{contactsData.lastName} </p>
        </div>
        <div className="content">
          <a className="contact-phone" href={contactsData.phone}>
            {contactsData.phone}
          </a>
        </div>
        <div className="content">
          <p>{contactsData.serch}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
