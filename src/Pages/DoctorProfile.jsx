import React, { useState } from 'react';
import { FaMapMarkerAlt, FaStar, FaClock, FaEnvelope, FaPhone } from 'react-icons/fa';
import useDoctor from '../hooks/useDoctor';
import { useParams } from 'react-router-dom';
import Header from '../Components/Header';


const tabs = ['Overview', 'Locations', 'Reviews', 'Business Hours'];

const DoctorProfile = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const { id } = useParams();
  const [doctors, refetch] = useDoctor();
  console.log(id, doctors)

  const doctor = doctors.find(doc => doc._id === id);
  console.log(doctor)


  const TabButton = ({ label }) => (
    <button
      className={`px-4 py-2 rounded-t-lg font-semibold border-b-2 transition-all duration-200 ${activeTab === label ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-primary'
        }`}
      onClick={() => setActiveTab(label)}
    >
      {label}
    </button>
  );

  return (
    <div>
      <Header
        maps={"Doctor Profile"}
        name={"Doctor Profile"}
      ></Header>
      <div className="max-w-5xl mx-auto p-4 md:p-8 bg-base-100 rounded-lg shadow-lg">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <img
            src={doctor?.photo}
            alt={doctor?.name}
            className="w-32 h-32 object-cover rounded-full border-4 border-accent shadow-md"
          />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-primary">{doctor?.name}</h2>
            <p className="text-gray-600">{doctor?.degree} - {doctor?.speciality}</p>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
              <FaStar className="text-yellow-400" />
              <span>{doctor?.rating} ({doctor?.reviews.length} reviews)</span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2 mt-1 text-sm text-gray-500">
              <FaMapMarkerAlt className="text-accent" />
              <span>{doctor?.location.address}</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-2">
              {doctor?.services.map((s, i) => (
                <span key={i} className="badge badge-outline badge-accent text-sm">{s}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 border-b mb-4 overflow-x-auto">
          {tabs.map(tab => <TabButton key={tab} label={tab} />)}
        </div>

        {/* Tab Contents */}
        <div>
          {activeTab === 'Overview' && (
            <div className="space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold text-primary">About Me</h3>
              <p>{doctor?.about}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-1">Education</h4>
                  <ul className="list-disc list-inside">
                    {doctor?.education.map((edu, idx) => (
                      <li key={idx}>{edu.institute} - {edu.degree} ({edu.years})</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Awards</h4>
                  <ul className="list-disc list-inside">
                    {doctor?.awards.map((a, idx) => (
                      <li key={idx}>{a.title} ({a.date})</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-1">Experience</h4>
                  <ul className="list-disc list-inside">
                    {doctor?.experience.map((exp, idx) => (
                      <li key={idx}>{exp.position} at {exp.organization} ({exp.years})</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Specializations</h4>
                  <ul className="list-disc list-inside">
                    {doctor?.specializations.map((spec, idx) => (
                      <li key={idx}>{spec}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Locations' && (
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold text-primary mb-2">Clinic Location</h3>
              <p>{doctor?.location.branch}</p>
              <p>{doctor?.location.address}</p>
              <a
                href={doctor?.location.map_url}
                className="text-accent underline text-sm mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Map
              </a>
            </div>
          )}

          {activeTab === 'Reviews' && (
            <div className="space-y-4 text-gray-700">
              <h3 className="text-xl font-semibold text-primary mb-2">Patient Reviews</h3>
              {doctor?.reviews.map((review, idx) => (
                <div key={idx} className="bg-base-200 p-4 rounded-md shadow-sm">
                  <p className="font-semibold text-base">{review.name}</p>
                  <div className="flex items-center text-yellow-400 text-sm mb-1">
                    {Array.from({ length: Math.round(review.rating) }).map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="text-sm text-gray-600 italic">{review.date}</p>
                  <p className="mt-1">{review.comment}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'Business Hours' && (
            <div className="text-gray-700">
              <h3 className="text-xl font-semibold text-primary mb-2">Weekly Business Hours</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {Object.entries(doctor?.business_hours).map(([day, time], idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaClock className="text-accent" />
                    <span className="font-medium w-28">{day}:</span>
                    <span>{time}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Contact Footer */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center bg-base-200 p-4 rounded-xl">
          <div className="flex items-center gap-2">
            <FaPhone className="text-primary" />
            <span>{doctor?.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-0">
            <FaEnvelope className="text-primary" />
            <span>{doctor?.contact.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
