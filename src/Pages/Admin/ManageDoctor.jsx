import React, { useState } from 'react';

// ManageDoctor Component
const ManageDoctor = () => {
  // Sample doctor data
  const [doctors, setDoctors] = useState([
    { id: 1, avatar: 'https://placehold.co/40x40/FFD700/FFFFFF?text=J', name: 'Jacob Jones', speciality: 'Teeth Cleaning' },
    { id: 2, avatar: 'https://placehold.co/40x40/D2B48C/FFFFFF?text=B', name: 'Bessie Cooper', speciality: 'Teeth Cleaning' },
    { id: 3, avatar: 'https://placehold.co/40x40/ADD8E6/FFFFFF?text=K', name: 'Kristin Watson', speciality: 'Teeth Cleaning' },
    { id: 4, avatar: 'https://placehold.co/40x40/9932CC/FFFFFF?text=C', name: 'Courtney Henry', speciality: 'Teeth Cleaning' },
    { id: 5, avatar: 'https://placehold.co/40x40/FFA500/FFFFFF?text=B', name: 'Brooklyn Simmons', speciality: 'Teeth Cleaning' },
    { id: 6, avatar: 'https://placehold.co/40x40/FFD700/FFFFFF?text=J', name: 'Jane Cooper', speciality: 'Teeth Cleaning' },
    { id: 7, avatar: 'https://placehold.co/40x40/FF7F50/FFFFFF?text=A', name: 'Arlene McCoy', speciality: 'Teeth Cleaning' },
    { id: 8, avatar: 'https://placehold.co/40x40/D2B48C/FFFFFF?text=W', name: 'Wade Warren', speciality: 'Teeth Cleaning' },
  ]);

  const handleDeleteDoctor = (id) => {
    // In a real application, you'd likely send a request to a backend here
    // For this example, we'll just filter the doctor from the state
    setDoctors(doctors.filter(doctor => doctor.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
        <div className="p-6 bg-white rounded-t-xl">
          <h2 className="text-xl font-semibold text-gray-800">Manage Doctors: {doctors.length < 10 ? `0${doctors.length}` : doctors.length}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* Table head */}
            <thead className="bg-gray-50">
              <tr className="text-gray-600">
                <th className="font-medium text-left px-6 py-3"></th> {/* For index */}
                <th className="font-medium text-left px-6 py-3">AVATAR</th>
                <th className="font-medium text-left px-6 py-3">NAME</th>
                <th className="font-medium text-left px-6 py-3">SPECIALITY</th>
                <th className="font-medium text-right px-6 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {doctors.map(doctor => (
                <tr key={doctor.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="font-bold text-gray-700 px-6 py-3">{doctor.id < 10 ? `0${doctor.id}` : doctor.id}</td>
                  <td className="px-6 py-3">
                    <div className="avatar">
                      <div className="mask mask-circle w-10 h-10">
                        <img src={doctor.avatar} alt={`Avatar of ${doctor.name}`} className="rounded-full" />
                      </div>
                    </div>
                  </td>
                  <td className="text-gray-700 font-medium px-6 py-3">{doctor.name}</td>
                  <td className="text-gray-500 px-6 py-3">{doctor.speciality}</td>
                  <td className="text-right px-6 py-3">
                    <button
                      className="btn btn-sm bg-red-500 hover:bg-red-600 text-white border-none rounded-md px-4 py-2"
                      onClick={() => handleDeleteDoctor(doctor.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageDoctor;
