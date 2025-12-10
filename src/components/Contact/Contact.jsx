import React from "react";
import { contact, socialLinks } from "../../config";

function Contact() {
  return (
    <section id="contact" className="p-6 bg-white">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>📞 {contact.phone}</p>
      <p>📧 {contact.email}</p>
      <p>📍 {contact.location}</p>
      <div className="flex gap-4 mt-4 text-2xl">
        <a href={socialLinks.github} target="_blank">
          GitHub
        </a>
        <a href={socialLinks.linkedin} target="_blank">
          LinkedIn
        </a>
        <a href={socialLinks.facebook} target="_blank">
          Facebook
        </a>
      </div>
    </section>
  );
}

export default Contact;
