import React, { useState } from "react";
import useEmail from "../hooks/useEmail";
import { app } from "../firebase";
import { addDoc, getFirestore, collection } from "firebase/firestore";

const Contact = () => {
  const [from_name, setFromName] = useState("");
  const [message, setMessage] = useState("");
  const [to_email, setTo_Email] = useState("");
  const [subject, setSubject] = useState("");

  const db = getFirestore(app);

  const { sendEmail, emailSent, error } = useEmail();

  const handleSendEmail = async () => {
    const templateParams = {
      from_name,
      to_email,
      subject,
      message,
    };
    sendEmail(templateParams);
    addDoc(collection(db, "contactUs"), templateParams);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <h1 className="text-3xl lg:text-5xl capitalize font-bold title-font text-center text-primary">
        Contact Us
      </h1>
      <div className="container px-10 pt-16 pb-16 lg:pt-24 lg:pb-24 mx-auto flex sm:flex-nowrap sm:flex-col lg:flex-row flex-wrap">
        <div className="lg:w-1/2 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/chefguard-5ca00.appspot.com/o/images%2Fasset.png?alt=media&token=e73e7343-77d0-4262-a1ad-0be7dd3f69c3"
            alt="assets"
          />
        </div>
        <div className="lg:w-1/2 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:mt-0">
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Recipient Name"
              value={from_name}
              onChange={(e) => setFromName(e.target.value)}
              className="w-full bg-white rounded border border-gray-300 focus:border-[#125C21] focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#125C21] focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Recipient Email"
              value={to_email}
              onChange={(e) => setTo_Email(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Subject
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#125C21] focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-[#125C21] focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={handleSendEmail}
            className="text-white bg-[#125C21] border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
          >
            Submit
          </button>
          {emailSent && <p>Email sent successfully!</p>}
          {error && <p>Error sending email: {error.message}</p>}
        </div>
      </div>
    </section>
  );
};

export default Contact;
