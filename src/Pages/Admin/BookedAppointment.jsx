import React from 'react';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { FaCalendarAlt, FaCheck, FaTrashAlt } from 'react-icons/fa';

const BookedAppointment = () => {
  const axiosSecure = useAxiosSecure();

  const { data: appointments = [], refetch } = useQuery({
    queryKey: ['appointments'],
    queryFn: async () => {
      const res = await axiosSecure.get('/appointments');
      return res.data;
    },
  });

  const handleCancel = (appointmentId) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to cancel this appointment?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/appointments/${appointmentId}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire('Cancelled!', 'The appointment has been cancelled.', 'success');
            refetch();
          }
        });
      }
    });
  };

  const handleMarkCompleted = (appointmentId) => {
    axiosSecure.patch(`/appointments/status/${appointmentId}`, { status: 'completed' }).then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire('Completed!', 'Appointment marked as completed.', 'success');
        refetch();
      }
    });
  };

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaCalendarAlt /> Booked Appointments
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full table-zebra">
          <thead>
            <tr>
              <th>#</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {appointments.length > 0 ? (
              appointments.map((appt, index) => (
                <tr key={appt._id}>
                  <td>{index + 1}</td>
                  <td>{appt.patientName}</td>
                  <td>{appt.doctorName}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td>
                    <span
                      className={`badge ${
                        appt.status === 'completed'
                          ? 'badge-success'
                          : appt.status === 'cancelled'
                          ? 'badge-error'
                          : 'badge-info'
                      }`}
                    >
                      {appt.status}
                    </span>
                  </td>
                  <td className="flex gap-2">
                    {appt.status !== 'completed' && (
                      <button
                        onClick={() => handleMarkCompleted(appt._id)}
                        className="btn btn-xs btn-success"
                      >
                        <FaCheck />
                      </button>
                    )}
                    <button
                      onClick={() => handleCancel(appt._id)}
                      className="btn btn-xs btn-error"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center text-gray-500 py-6">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookedAppointment;
