// components/Profile.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@nextui-org/react";

function Profile() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("/api/v1/user/profile"); // Adjust URL as per your backend setup
        setUser(res.data.user);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError(error);
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await axios.get("/api/v1/posts/getposts"); // Adjust URL as per your backend setup
        setPosts(res.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError(error);
      }
    };

    fetchProfile();
    fetchPosts();
  }, []);

  if (!user || !posts) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="max-w-4xl font-['billota'] mx-auto px-4 py-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-4">
          <h1 className="text-3xl font-bold mb-2">Welcome, {user.name}!</h1>
          {user.businessName && (
            <div className="mb-4">
              <div
                className="bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                role="alert"
              >
                <p className="font-bold">Business Name:</p>
                <p className="text-sm">{user.businessName}</p>
              </div>
            </div>
          )}
          <div className="border-b border-gray-200 mb-6"></div>
          <h2 className="text-xl font-bold mb-2">
            Your bussiness: {posts.length}
          </h2>
          <ul>
            {posts.map((post) => (
              <li key={post._id} className="mb-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-gray-600">{post.description}</p>
                    <div className="flex justify-center gap-10 mt-10 items-center">
                      <Button
                        className="ml-2"
                       
                        size="sm"
                        color="primary"
                        variant="ghost"
                      >
                        edit
                      </Button>
                      <Button
                        className="ml-2"
                       
                        size="sm"
                        color="primary"
                        variant="ghost"
                      >
                        delete
                      </Button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
