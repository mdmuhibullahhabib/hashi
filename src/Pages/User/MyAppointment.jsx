import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useBookedAppointment from '../../hooks/useBookedAppointment';


const MyAppointment = () => {
    const [appointments] = useBookedAppointment();
    const [selectedDate, setSelectedDate] = useState(new Date('2022-05-10'));

    const formattedDate = selectedDate.toISOString().split('T')[0];
    const filteredAppointments = dummyAppointments.filter(
        (appt) => appt.date === formattedDate
    );

    return (
        <div className="min-h-screen flex">

            <main className="flex-1 bg-gray-50">
                {/* Content */}
                <section className="px-8 py-10">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-semibold">My Appointment</h2>
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            className="border px-3 py-1 rounded cursor-pointer"
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>

                    <div className="bg-white rounded shadow p-6">
                        <table className="w-full text-left border-collapse">
                            <thead className="bg-gray-200 text-gray-700">
                                <tr>
                                    <th className="py-2 px-4">#</th>
                                    <th className="py-2 px-4">NAME</th>
                                    <th className="py-2 px-4">SERVICE</th>
                                    <th className="py-2 px-4">TIME</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredAppointments.length > 0 ? (
                                    filteredAppointments.map((appt, idx) => (
                                        <tr key={appt.id} className="border-t">
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
