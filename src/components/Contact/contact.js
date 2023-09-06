import React, { useRef, useState } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sib9kqn",
        "template_v0qkfui",
        form.current,
        "PTnG9MUypmT5kWpHQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          alert("Email Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h2 className="contactTitle">Contact</h2>
      <p className="contactDes">
        Please fill out the form below to discuss any work opportunity.
      </p>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          className="contactname"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />
        <input
          className="contactemail"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
        />
        <textarea
          className="contactmsg"
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
        ></textarea>
        <button className="contactbtn" onClick={sendEmail}>
          Submit
        </button>
      </form>
    </section>
  );
}
