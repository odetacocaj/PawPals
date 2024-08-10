import { useState } from "react";
import emailjs from "emailjs-com";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import "./ContactForm.scss";
import { contactUsInfo } from "../../../assets/static/dummydata/contactUs";
import { TextField, CircularProgress, Button } from "@mui/material";
import Alert from "@mui/material/Alert";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_USER_ID,
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => {
          setStatus("");
        }, 5000);
      });
  };

  return (
    <div className="contact-us-container">
      <div className="contact-form-container md:flex-row flex-col md:gap-0 gap-8">
        <form onSubmit={handleSubmit} className="md:w-[50%]">
          <h4 className="contact-us-title">Contact Us</h4>
          <TextField
            label="Name"
            name="name"
            className="contact-input-field"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="email"
            className="contact-input-field"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Message"
            className="contact-input-field"
            name="message"
            value={formData.message}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          {loading ? (
            <CircularProgress size={24} />
          ) : (
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          )}
          <span className="flex justify-center mt-3">
            {status && (
              <Alert severity={status}>
                {status === "success"
                  ? "Your email has been sent successfully!"
                  : "Failed to send email!"}
              </Alert>
            )}
          </span>
        </form>
        <div className="contact-details md:w-[50%]">
          <h4 className="contact-us-title">Contact Information</h4>
          <ul>
            <li>
              <div className="circle-icon">
                <LocationOnIcon />
              </div>
              Address: {contactUsInfo.address}
            </li>
            <li>
              <div className="circle-icon">
                <LocalPhoneIcon />
              </div>
              Phone: {contactUsInfo.telephone}
            </li>
            <li>
              <div className="circle-icon">
                <EmailIcon />
              </div>
              Email: {contactUsInfo.email}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
