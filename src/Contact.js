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
      document.getElementById('contact-form').reset();

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
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
            <div className="sidebar-text">
              <h2>Github</h2>
              <p>
                <a
                  className="link"
                  href="https://github.com/ricefarmernft"
                  target="_blank"
                  rel="noreferrer"
                >
                  @ricefarmernft
                </a>
              </p>
            </div>
          </div>
        </div>
        <form className="contact-form" id="contact-form" ref={form} onSubmit={sendEmail}>
          <input
            type="hidden"
            name="number"
            value={(Math.random() * 100000) | 0}
          />
          <input
            className="contact-form-item"
            required
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <input
            className="contact-form-item"
            required
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            className="contact-form-item"
            required
            name="message"
            placeholder="Message"
            rows="5"
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
