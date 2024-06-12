import React, { useState } from "react";
import Navbar from "./Navbar";

function Contact() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
  try {
const userDetail = { name, email, subject, message };
    const response = await fetch("/api/v1/contact/createcontact", {
      method: "POST",
      body: JSON.stringify(userDetail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if(response.ok){
      setname("");
      setemail("");
      setsubject("");
      setmessage("");
      response= ""
      console.log(data) 

    }

    
  } catch (error) {
    console.log(error)
  }
  
  };

  return (
    <>
      <Navbar />
      <section className=" py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-light text-center  mb-8">Contact Us</h2>
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <img
                src="https://media.istockphoto.com/id/1248207920/photo/wooden-block-cube-symbol-telephone-address-and-e-mail-website-page-contact-us-email-marketing.jpg?s=612x612&w=0&k=20&c=pw4ldVcLcyV7YGEUt3C4eQSSBrIFid2iTKe3h38CAPI="
                alt="Contact Us"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/3 bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-2">
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
                    onChange={(e) => setname(e.target.value)}
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
                    onChange={(e) => setemail(e.target.value)}
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
                    onChange={(e) => setsubject(e.target.value)}
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
                    onChange={(e) => setmessage(e.target.value)}
                    value={message}
                    className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#006fee] text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
