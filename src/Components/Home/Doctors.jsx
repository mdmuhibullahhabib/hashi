import React from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useDoctor from '../../hooks/useDoctor';

const Doctors = () => {
  const [ doctors, refetch ] = useDoctor();

  return (
    <section className="py-16 px-6 bg-base-100 text-center">
      <h2 className="text-4xl font-bold text-primary mb-2">Our Expert Doctors</h2>
      <p className="text-gray-600 max-w-xl mx-auto mb-10">
        Meet the trusted professionals behind HASHI Dental. Each of our doctors is highly qualified and committed to your oral health.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {doctors.map((doc, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300">
            <img
              src={doc.photo}
              alt={doc.name}
              className="w-32 h-32 mx-auto object-cover rounded-full border-4 border-accent mb-4"
            />
            <h3 className="text-xl font-semibold text-primary">{doc.name}</h3>
            <p className="text-sm text-gray-500">{doc.speciality}</p>

            {/* Rating */}
            <div className="flex justify-center items-center mt-2">
              {Array.from({ length: Math.round(doc.rating) }).map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>

            {/* Info */}
            <ul className="text-sm text-gray-600 mt-4 space-y-2">
              <li className="flex items-center justify-center gap-2">
                <FaMapMarkerAlt className="text-accent" />
                {doc.location.branch}
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaCalendarAlt className="text-accent" />
                Available: {doc.available_days?.join(', ') || 'N/A'}
              </li>
              <li className="flex items-center justify-center gap-2">
                <FaDollarSign className="text-accent" />
                Fee: ${doc.price || 20}
              </li>
            </ul>

            <Link to={`/doctor-profile/${doc._id}`} className="btn btn-outline btn-accent mt-4">
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
