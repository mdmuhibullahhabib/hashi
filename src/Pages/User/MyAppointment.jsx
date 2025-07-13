import React, { useState, useMemo } from 'react';
import DatePicker from 'react-datepicker';
import useBookedAppointment from '../../hooks/useBookedAppointment';

const MyAppointment = () => {
  const [appointments] = useBookedAppointment();

  return (
    <div className="min-h-screen flex">
      <main className="flex-1 bg-gray-50">
        <section className="px-8 py-10">

          <div className="bg-white rounded shadow p-6">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="py-2 px-4">#</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Service</th>
                  <th className="py-2 px-4">Time</th>
                </tr>
              </thead>
              <tbody>
                {appointments.length > 0 ? (
                  appointments.map((appt, idx) => (
                    <tr key={appt._id || idx} className="border-t">
                      <td className="py-2 px-4">{idx + 1}</td>
                      <td className="py-2 px-4">{appt.name}</td>
                      <td className="py-2 px-4">{appt.service}</td>
                      <td className="py-2 px-4">{appt.time}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4 text-gray-500">
                      No appointments on this date
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
