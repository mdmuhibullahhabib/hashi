import React from 'react';
import dayjs from 'dayjs';

const Calendar = () => {
  const today = dayjs();
  const startOfMonth = today.startOf('month');
  const endOfMonth = today.endOf('month');
  const startDay = startOfMonth.day(); // 0 = Sunday
  const daysInMonth = endOfMonth.date();

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const calendarDays = [];

  // Add empty slots for alignment
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }

  // Add actual days
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow w-full">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold">{today.format('MMMM YYYY')}</h2>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center font-semibold text-gray-600 mb-2">
        {daysOfWeek.map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 text-center">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`py-2 rounded ${
              day === today.date() ? 'bg-pink-500 text-white font-bold' : 'text-gray-700'
            }`}
          >
            {day ? day : ''}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
