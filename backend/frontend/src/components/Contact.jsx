import React, { useState } from "react";
import Navbar from "./Navbar";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../context/Authcontext";

function Contact() {

  const { isLoggedIn } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDetail = { name, email, subject, message };

      if (!name || !email || !subject || !message) {
        return toast.error("Please fill all the fields");
      }
      const response = await fetch("/api/v1/contact/createcontact", {
        method: "POST",
        body: JSON.stringify(userDetail),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");

        return toast.success("Message sent successfully");
      }
      if(!isLoggedIn){
        return toast.error("Please login to send message");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="flex relative font-['bellota'] items-center justify-center min-h-screen  py-10">
        <div className="bg-white  p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-light text-center mb-8">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                placeholder="Your email"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <div>
              <button

               
                type="submit"
                className="w-full border-2 border-['#006fee']  px-4 py-2 hover:text-white rounded-lg font-light hover:bg-blue-600 transition duration-1000"
              >
                Send Message
              </button>
              <Toaster />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
