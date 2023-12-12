import { useEffect, useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from "@emailjs/browser";

const useEmail = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(null);

  // Replace these with your actual EmailJS configuration
  const sendEmail = (templateParams) => {
    // Replace these with your actual EmailJS configuration
    const EMAILJS_PUBLIC_KEY = "wcaBafP-zJUsJeOwd";
    const EMAILJS_TEMPLATE_ID = "template_nzeherq";
    const EMAILJS_SERVICE_ID = "service_h7l9z2n";

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        setEmailSent(true);
        setError(null);
      })
      .catch((error) => {
        setEmailSent(false);
        setError(error);
      });
  };

  // Expose the sendEmail function
  return {
    sendEmail,
    emailSent,
    error,
  };
};

export default useEmail;
