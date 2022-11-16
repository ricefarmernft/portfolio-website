import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xo2thd8",
        "contact_form",
        form.current,
        "10f3in4DBL1uKbAHP"
      )
      .then(
        (result) => {
          alert("Email Sent!");
        },
        (error) => {
          alert("Email not sent. Please try again.");
        }
      );
  };

  return (
    <>
      <div className="container-title" id="contact">
        <h1>Contact Me</h1>
      </div>
      <div className="container contact">
        <div className="contact-sidebar">
          <div className="sidebar-item">
            <div className="sidebar-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </div>
            <div className="sidebar-text">
              <h2>Email</h2>
              <p>ceejayxiong@gmail.com</p>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </div>
            <div className="sidebar-text">
              <h2>Location</h2>
              <p>Chicago, IL</p>
            </div>
          </div>
          <div className="sidebar-item">
            <div className="sidebar-img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </div>
            <div className="sidebar-text">
              <h2>Twitter</h2>
              <p>@RiceFarmerNFT</p>
            </div>
          </div>
        </div>
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="hidden"
            name="number"
            value={(Math.random() * 100000) | 0}
          />
          <input className="contact-form-item" required type="text" name="user_name" placeholder="Name" />
          <input className="contact-form-item" required type="email" name="user_email" placeholder="Email" />
          <textarea className="contact-form-item" required name="message" placeholder="Message" rows="5" />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
