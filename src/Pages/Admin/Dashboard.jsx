import React from 'react';
import { FiUsers, FiUser, FiFileText } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import useUser from '../../hooks/useUser';
import useDoctor from '../../hooks/useDoctor';

const AdminDashboard = () => {
  const [users] = useUser()
  const [doctors] = useDoctor()
  // Sample data for the charts
  const patientData = [
    { name: '2013', value: 70 },
    { name: '2014', value: 90 },
    { name: '2015', value: 140 },
    { name: '2016', value: 80 },
    { name: '2017', value: 95 },
    { name: '2018', value: 160 },
  ];

  const appointmentData = [
    { name: 'Red', value: 400, color: '#FF0000' },
    { name: 'Green', value: 300, color: '#82ca9d' },
    { name: 'Yellow', value: 200, color: '#FFD700' },
  ];

  const COLORS = ['#FF0000', '#82ca9d', '#FFD700']; // Matching the pie chart colors in the image

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Doctor Card */}
        <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-pink-100 p-3 rounded-full">
              <FiUser className="text-pink-500 text-2xl" />
            </div>
            <span className="text-4xl font-bold text-gray-800">{doctors.length}</span>
          </div>
          <p className="text-gray-600 text-lg mb-2">Doctor</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div className="bg-pink-500 h-1.5 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </div>

        {/* Patients Card */}
        <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-green-100 p-3 rounded-full">
              <FiUsers className="text-green-500 text-2xl" />
            </div>
            <span className="text-4xl font-bold text-gray-800">487</span>
          </div>
          <p className="text-gray-600 text-lg mb-2">Patients</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </div>

        {/* Appointment Card */}
        <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-yellow-100 p-3 rounded-full">
              <FiFileText className="text-yellow-500 text-2xl" />
            </div>
            <span className="text-4xl font-bold text-gray-800">95</span>
          </div>
          <p className="text-gray-600 text-lg mb-2">Appointment</p>
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div className="bg-yellow-500 h-1.5 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Patient Chart Card */}
        <div className="card bg-white shadow-lg rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Patient</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart
              data={patientData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} stroke="#888" />
              <YAxis axisLine={false} tickLine={false} stroke="#888" />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Appointment Pie Chart Card */}
        <div className="card bg-white shadow-lg rounded-xl p-6 flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Appointment</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={appointmentData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
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
}

export default AdminDashboard;
