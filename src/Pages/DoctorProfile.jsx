import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Navbar from '../Components/Navbar';

const DoctorProfile = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      {/* Banner */}
      <div className="bg-[#013c36] text-white py-12 px-6">
      <Navbar></Navbar>
        <div className="max-w-6xl mx-auto mt-10">
          <h2 className="text-xl">Home / Doctor Profile</h2>
          <h1 className="text-4xl font-bold mt-2">Doctor Profile</h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="max-w-6xl mx-auto mt-10 px-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Doctor Image */}
            <div className="w-32 h-32 bg-gray-200 rounded-md"></div>

            {/* Doctor Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-bold">Dr. Ruby Perrin</h2>
              <p className="text-sm text-gray-600">MBBS, MD - General Medicine</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-1 text-orange-500">
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                <span className="text-gray-500 ml-2">(35)</span>
              </div>

              {/* Location */}
              <p className="text-sm mt-1 text-gray-600">
                Dhanmondi, Dhaka, Bangladesh - <span className="text-blue-600 underline">Get Directions</span>
              </p>

              {/* Button Group */}
              <div className="flex flex-wrap gap-2 mt-4">
                <button className="btn btn-outline btn-sm">Dental Filling</button>
                <button className="btn btn-outline btn-sm">Teeth Whitening</button>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs and Content */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <div className="tabs tabs-boxed mb-6">
            <a className="tab tab-active">Overview</a>
            <a className="tab">Locations</a>
            <a className="tab">Reviews</a>
            <a className="tab">Business Hours</a>
          </div>

          {/* About Me */}
          <div>
            <h3 className="text-xl font-semibold mb-2">About Me</h3>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minus facilis, voluptatibus
              iusto nihil, debitis eligendi dolorem? Ullam ad officiis amet repellendus non earum deserunt.
            </p>
          </div>

          {/* Grid Info */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Education */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Education</h4>
              <ul className="text-sm text-gray-700 list-disc pl-5">
                <li>American Dental Medical University - DDS - 2005</li>
                <li>American Dental Medical University - MBBS - 2000</li>
              </ul>
            </div>

            {/* Awards */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Awards</h4>
              <ul className="text-sm text-gray-700 list-disc pl-5">
                <li>July 2019 - Humanitarian Award</li>
                <li>March 2018 - Certificate of Appreciation</li>
              </ul>
            </div>

            {/* Work Experience */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Work & Experience</h4>
              <ul className="text-sm text-gray-700 list-disc pl-5">
                <li>Glowing Smiles Dental Clinic (2010 - Present)</li>
                <li>Comfort Care Dental Clinic (2007 - 2010)</li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Services</h4>
              <ul className="text-sm text-gray-700 list-disc pl-5">
                <li>Tooth Cleaning</li>
                <li>Root Canal Therapy</li>
                <li>Teeth Whitening</li>
                <li>Braces</li>
              </ul>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="text-lg font-semibold mb-1">Specializations</h4>
              <ul className="text-sm text-gray-700 list-disc pl-5">
                <li>Children Care</li>
                <li>Dental Care</li>
                <li>Oral and Maxillofacial Surgery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;