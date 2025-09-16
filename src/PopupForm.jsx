// src/components/PopupForm.jsx
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./PopupForm.css"; // for styling

const PopupForm = () => {
  const [show, setShow] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    // Show popup after slight delay
    setTimeout(() => {
      setShow(true);
    }, 500);
  }, []);

  const onSubmit = async (data) => {
    try {
      // You can replace this with your backend API or email service
      console.log("Form Data:", data);

      // Example API POST (adjust URL)
      await axios.post("https://your-backend.com/api/submit-form", data);

      alert("Thank you! Form submitted.");
      reset();
      setShow(false);
    } catch (error) {
      console.error("Submission error", error);
      alert("Error submitting form.");
    }
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
            <option value="Consulting">Consulting</option>
            <option value="Product Demo">Product Demo</option>
            <option value="Sales Inquiry">Sales Inquiry</option>
            <option value="Support">Support</option>
          </select>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
