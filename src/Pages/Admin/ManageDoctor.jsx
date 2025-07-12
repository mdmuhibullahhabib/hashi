import React, { useState } from 'react';
import useDoctor from '../../hooks/useDoctor';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

// ManageDoctor Component
const ManageDoctor = () => {

  const axiosSecure = useAxiosSecure();
  const [doctors, refetch] = useDoctor();

   const handleDeleteDoctor = id => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to delete this Doctor?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`)
          .then(res => {
            refetch()
            console.log(res)
            if (res.data.deletedCount > 0) {
              Swal.fire('Deleted!', 'Doctor has been Delete.', 'success');
            }
          });
      }
    });
  }

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
                <tr key={doctor._id} className="border-b border-gray-200 hover:bg-gray-50">
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
                      onClick={() => handleDeleteDoctor(doctor._id)}
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
