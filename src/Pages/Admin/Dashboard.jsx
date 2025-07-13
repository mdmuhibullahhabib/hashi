import React, { useMemo } from 'react';
import { FiUsers, FiUser, FiFileText } from 'react-icons/fi';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import useUser from '../../hooks/useUser';
import useDoctor from '../../hooks/useDoctor';
import useBookedAppointment from '../../hooks/useBookedAppointment';

const AdminDashboard = () => {
  const [users] = useUser(); // Assuming users include patients
  const [doctors] = useDoctor();
  const [appointments] = useBookedAppointment();

  // Group users by year based on 'createdAt'
  const patientData = useMemo(() => {
    const counts = {};
    users.forEach(user => {
      const year = new Date(user.createdAt).getFullYear();
      counts[year] = (counts[year] || 0) + 1;
    });

    return Object.entries(counts).map(([year, count]) => ({
      name: year,
      value: count
    }));
  }, [users]);

  // Count appointments by status (e.g., pending, confirmed, completed)
  const appointmentData = useMemo(() => {
    const statusCount = { pending: 0, confirmed: 0, completed: 0 };

    appointments.forEach(app => {
      const status = app.status?.toLowerCase() || 'pending';
      if (statusCount[status] !== undefined) {
        statusCount[status]++;
      }
    });

    return [
      { name: 'Pending', value: statusCount.pending },
      { name: 'Confirmed', value: statusCount.confirmed },
      { name: 'Completed', value: statusCount.completed },
    ];
  }, [appointments]);

  const COLORS = ['#FF6B6B', '#4CAF50', '#FFD700'];

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Cards */}
        {/* ... same card layout for Doctors, Patients, and Appointments ... */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Patient Line Chart */}
        <div className="card bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Patients Joined Per Year</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={patientData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
              <XAxis dataKey="name" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Appointment Pie Chart */}
        <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Appointment Status</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={appointmentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {appointmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
