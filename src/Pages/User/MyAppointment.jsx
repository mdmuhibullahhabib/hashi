import React from 'react';
import useBookedAppointment from '../../hooks/useBookedAppointment';

const MyAppointment = () => {
  const [appointments] = useBookedAppointment();

  return (
    <div className="min-h-screen flex">
      <main className="flex-1 bg-gray-50">
        <section className="px-8 py-10">
          <h2 className="text-2xl font-semibold mb-6">My Appointments</h2>

          <div className="bg-white rounded shadow p-6">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Service</th>
                  <th className="py-2 px-4">Slot</th>
                  <th className="py-2 px-4">Date</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appt, idx) => (
                    <tr key={appt._id || idx} className="border-t hover:bg-gray-50">
                      <td className="py-2 px-4">{idx + 1}</td>
                      <td className="py-2 px-4">{appt.patientName || 'N/A'}</td>
                      <td className="py-2 px-4">{appt.service}</td>
                      <td className="py-2 px-4">{appt.slot}</td>
                      <td className="py-2 px-4">{appt.date}</td>
                      <td className="py-2 px-4 capitalize">{appt.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4 text-gray-500">
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default MyAppointment;
