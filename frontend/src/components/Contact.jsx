import React, { useState } from "react";
import { Instagram, Linkedin, Github, Send, CheckCircle, UserRoundSearch } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import "../styles/Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "sourinemail",
        "template_p1qdf9p",
        e.target,
        "PhbXpt3M0kVhOX8Q-"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setIsSending(false);

          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });

          setTimeout(() => setIsSubmitted(false), 4000);
        },
        (error) => {
          console.error("EmailJS error:", error);
          setIsSending(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: <Instagram size={24} className="icon-instagram" />,
      label: "Instagram",
      value: "sourinsig",
      link: "https://www.instagram.com/sourinsig/",
    },
    {
      icon: <Linkedin size={24} className="icon-linkedin" />,
      label: "LinkedIn",
      value: "sourinmajumdar",
      link: "https://linkedin.com/in/sourinmajumdar",
    },
    {
      icon: <Github size={24} className="icon-github" />,
      label: "GitHub",
      value: "SourinMajumdar",
      link: "https://github.com/SourinMajumdar",
    },
    {
      icon: <FaXTwitter size={24} className="icon-twitter" />,
      label: "X (Twitter)",
      value: "sourinstwt",
      link: "https://x.com/sourinstwt",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            Get In Touch <UserRoundSearch size={30} opacity={0.7} />
          </h2>
          <div className="section-line"></div>
          <p className="section-subtitle">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-card"
              >
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <div className="contact-label">{info.label}</div>
                  <div className="contact-value">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Hidden fields for EmailJS */}
              <input type="hidden" name="from_name" value={formData.name} />
              <input type="hidden" name="from_email" value={formData.email} />

              <div className="form-row">
                <div className="form-group">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <Input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-textarea"
                />
              </div>

              <Button
                type="submit"
                className={`submit-btn ${isSubmitted ? 'submit-btn-success' : ''}`}
                disabled={isSending || isSubmitted}
              >
                {isSending ? (
                  <>
                    <Send size={20} />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;