import React from 'react';

function Aboutus() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl flex justify-center items-center font-['bellota']">About us</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 mt-10">
        {/* Overview Card */}
        <div className="bg-white rounded-lg relative  shadow-md overflow-hidden">
            <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>
          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">About Communify</h2>
            <p className="text-gray-700">
              Communify is a platform dedicated to connecting communities and businesses in a seamless and effective way. Our mission is to foster collaboration and growth by providing tools and resources that empower local businesses and individuals to thrive.
            </p>
          </div>
        </div>

        {/* Mission and Vision Card */}
        <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Mission and Vision</h2>
            <p className="text-gray-700">
              Our mission at Communify is to build a strong and supportive community where businesses can flourish and individuals can find resources and opportunities to succeed. We envision a future where every community is vibrant and prosperous, powered by meaningful connections and collaborations facilitated through our platform.
            </p>
          </div>
        </div>

        {/* Core Values Card */}
        <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Core Values</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Community First</li>
              <li>Innovation and Adaptability</li>
              <li>Transparency and Trust</li>
              <li>Continuous Improvement</li>
            </ul>
          </div>
        </div>

        {/* Team Card */}
        <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Our Team</h2>
            <p className="text-gray-700">
              Our team consists of passionate individuals dedicated to making a positive impact in our communities. We bring diverse expertise and backgrounds to ensure Communify meets the needs of our users effectively.
            </p>
          </div>
        </div>

        {/* Community Impact Card */}
        <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Community Impact</h2>
            <p className="text-gray-700">
              Over the years, Communify has helped countless businesses grow their reach and impact. Here are some stories from our community:
              <ul className="list-disc list-inside">
                <li>Testimonial 1</li>
                <li>Testimonial 2</li>
                <li>Testimonial 3</li>
              </ul>
            </p>
          </div>
        </div>

        {/* Contact Us Card */}
        <div className="bg-white relative rounded-lg shadow-md overflow-hidden">
        <div className="absolute w-full h-3 from-[#006fee] to bg-[#006fee]"></div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-2">Contact Us</h2>
            <p className="text-gray-700">
              Have questions or want to get in touch with us? Feel free to reach out at <a href="mailto:info@communify.com" className="text-blue-500 hover:underline">info@communify.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
