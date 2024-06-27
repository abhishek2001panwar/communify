import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaLocationArrow, FaClock, FaArrowLeft } from 'react-icons/fa';
import { FiImage } from 'react-icons/fi';
function Detail() {
  const { id } = useParams();
  const [business, setbusiness] = useState({
    title: '',
    image: '',
    description: '',
    location: '',
    openingTime: '',
    closingTime: ''
  });

  useEffect(() => {
    const getOnePost = async () => {
      try {
        const response = await fetch(`/api/v1/posts/getOnePost/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setbusiness(data.post);
      } catch (error) {
        console.log("Failed to fetch the post:", error);
      }
    };
    getOnePost();
  }, [id]);

  const handleback = () => {


    window.history.back();
  };

  return   (
    

    <>
 <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md mt-10">
      <button
        className="flex items-center px-4 py-2 mb-4 rounded-full bg-blue-600 text-white border-2 border-blue-700 font-['bellota'] hover:bg-blue-800"
        onClick={handleback}
      >
        <FaArrowLeft className="mr-2" />
        Go back
      </button>
      <h2 className="text-2xl font-bold mb-6 text-center">{business.title}</h2>
      <div className="mb-4 flex justify-center">
        <div className="relative w-52 h-52">
          <img
            src={business.image}
            alt={business.title}
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* <FiImage className="text-6xl text-gray-300" /> */}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mb-4 space-x-4">
        <div className="flex items-center">
          <FaLocationArrow className="text-gray-600 mr-2" />
          <span className="text-gray-600">{business.location}</span>
        </div>
        <div className="flex items-center">
          <FaClock className="text-gray-600 mr-2" />
          <span className="text-gray-600 mr-2">{business.openingTime}</span>
          <FaClock className="text-gray-600 mr-2" />

          <span className="text-gray-600">{business.closingTime}</span>

        </div>
      </div>
      <p className="text-gray-700 text-center">{business.description}</p>
    </div>
  </>
  )
}

export default Detail;
