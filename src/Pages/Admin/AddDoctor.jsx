import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi'; 

// AddDoctor Component
const AddDoctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    specialty: 'Teeth Orthodontics', // Default value
    photo: null,
  });

  const specialties = [
    'Teeth Orthodontics',
    'Cardiology',
    'Dermatology',
    'Pediatrics',
    'Neurology',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this formData to an API
    console.log('Form Data Submitted:', formData);
    alert('Doctor added successfully! (Check console for data)');
    // Optionally reset form
    setFormData({
      name: '',
      email: '',
      specialty: 'Teeth Orthodontics',
      photo: null,
    });
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Add a New Doctor</h2>

        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="input input-bordered w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your email"
              className="input input-bordered w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
              required
            />
          </div>

          {/* Specialty Dropdown */}
          <div className="mb-6">
            <label htmlFor="specialty" className="block text-gray-700 text-sm font-medium mb-2">
              Specialty
            </label>
            <select
              id="specialty"
              name="specialty"
              value={formData.specialty}
              onChange={handleChange}
              className="select select-bordered w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
            >
              {specialties.map((specialty) => (
                <option key={specialty} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
          </div>

          {/* Photo Upload Area */}
          <div className="mb-8 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-500 transition duration-200">
            <label htmlFor="photo-upload" className="flex flex-col items-center justify-center cursor-pointer">
              <FiUpload className="text-gray-400 text-4xl mb-3" />
              <span className="text-gray-600 font-medium">Upload Your Photo</span>
              <input
                type="file"
                id="photo-upload"
                name="photo"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden" // Hide the default file input
              />
            </label>
            {formData.photo && (
              <p className="mt-2 text-sm text-gray-500">Selected: {formData.photo.name}</p>
            )}
          </div>

          {/* Add Button */}
          <button
            type="submit"
            className="btn w-full bg-green-800 hover:bg-green-900 text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-200"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddDoctor;
