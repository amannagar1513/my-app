// src/components/PopupForm.jsx
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"; // ✅ use the new EmailJS SDK
import "./PopupForm.css"; // for styling

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState(null);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // Show popup after slight delay
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  const onSubmit = (data) => {
    console.log("Form data before sending:", data);

    // Make sure these keys match your EmailJS template variables
    const templateParams = {
      title: "contact",                      // static field
      name: data.fullName,                   // maps to {{name}} in template
      time: new Date().toLocaleTimeString(), // dynamic time
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      address: data.address,
      postcode: data.postcode,
      service: data.service,
    };

    emailjs
      .send(
        "service_6wual6a",   // ✅ your EmailJS service ID
        "template_dynww6n",  // ✅ your EmailJS template ID
        templateParams,
        "DDww6fjgz0X1sUXtz"  // ✅ your EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        reset();
        setShow(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
      });
  };

  if (!show) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-form">
        <button className="close-btn" onClick={() => setShow(false)}>✕</button>
        <h2>Get Started With Us</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("fullName")} placeholder="Full Name" required />
          <input {...register("email")} type="email" placeholder="Email" required />
          <input {...register("address")} placeholder="Address" required />
          <input {...register("phone")} placeholder="Phone Number" required />
          <input {...register("postcode")} placeholder="Postcode" required />

          <select {...register("service")} required>
            <option value="">Select Service</option>
            <option value="ssdi">SSDI</option>
            <option value="debt-settlement">Debt Settlement</option>
            <option value="health-insurance">Health Insurance</option>
            <option value="final-expenses">Final Expenses</option>
            <option value="auto-insurance">Auto Insurance</option>
            <option value="credit-repair">Credit Repair</option>
            <option value="pay-per-call">Pay Per Call</option>
            <option value="advertisers">Advertisers</option>
            <option value="publishers">Publishers</option>
            <option value="media-buying">Media Buying</option>
          </select>

          <button type="submit">Submit</button>
        </form>

        {status === "success" && (
          <p className="success-msg">✅ Form sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error-msg">❌ Failed to send. Try again.</p>
        )}
      </div>
    </div>
  );
};

export default PopupForm;
