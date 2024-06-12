import React, { useState } from 'react';

function PostBusinessForm() {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    location: '',
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className=" py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-light text-center  mb-8">Post Your Business</h2>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                Business Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                placeholder="Enter business name"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                placeholder="Enter business description"
              ></textarea>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
                placeholder="Enter business location"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-teal-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
              >
                Post Business
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default PostBusinessForm;
