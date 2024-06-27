// import React from 'react';
// import Navbar from './Navbar';

// function About() {
//   return (
//     <>
//     <Navbar />
//     <section className=" py-16">
//       <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
//         <div className="md:w-1/2 md:pr-8">
//           <h2 className="text-3xl font-bold">About Communify</h2>
//           <p className="mt-4 text-lg">
//             Communify is dedicated to fostering connections between local businesses and their communities. Our platform provides a space for businesses to showcase their products and services, making it easier for residents to discover and support local enterprises.
//           </p>
//           <p className="mt-4 text-lg">
//             Our mission is to enhance the local economy by promoting local businesses and encouraging community engagement. We believe that strong local businesses lead to vibrant communities, and we're here to make that connection stronger.
//           </p>
//           <p className="mt-4 text-lg">
//             Whether you're looking for a new restaurant to try, a unique shop to explore, or a reliable service provider, Communify is your go-to platform. Join us in supporting the local economy and building a thriving community.
//           </p>
//         </div>
//         <div className="md:w-1/2 mt-8 md:mt-0">
//           <img src="https://media.istockphoto.com/id/1398632693/photo/website-and-internet-contact-us-page-concept-with-phone-chat-email-icons-symbol-telephone.jpg?s=612x612&w=0&k=20&c=WpA28KbL6YbNsHoSHe6EBKzdh_meddJcux3DRq6BYDc=" alt="Community" className="w-full rounded-lg shadow-lg" />
//         </div>
//       </div>
//     </section>
//     </>
//   );
// }

// export default About;
import React from 'react';
import Navbar from './Navbar';

function About() {
  return (
    <>
      <Navbar />
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <h2 className="text-4xl font-bold text-gray-900">About Communify</h2>
            <p className="mt-4 text-lg text-gray-700">
              Communify is dedicated to fostering connections between local businesses and their communities. Our platform provides a space for businesses to showcase their products and services, making it easier for residents to discover and support local enterprises.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our mission is to enhance the local economy by promoting local businesses and encouraging community engagement. We believe that strong local businesses lead to vibrant communities, and we're here to make that connection stronger.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Whether you're looking for a new restaurant to try, a unique shop to explore, or a reliable service provider, Communify is your go-to platform. Join us in supporting the local economy and building a thriving community.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1606770347230-a92fa8ef8d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGNvbW11bml0eXxlbnwwfHx8fDE2NTAyMjc0MjQ&ixlib=rb-1.2.1&q=80&w=1080" 
              alt="Community" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

