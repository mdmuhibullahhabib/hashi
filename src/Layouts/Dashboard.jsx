import React from 'react'
import { Outlet, NavLink } from 'react-router-dom';
import { FaUserCog, FaTasks, FaUsers, FaUser, FaSuitcase, FaPen, FaPlusCircle, FaUserTie} from 'react-icons/fa';
import useRole from '../hooks/useRole';

const Dashboard = () => {

const [isRole] = useRole();
console.log(isRole)
  
  return (
    <div className="flex">

      {/* Sidebar */}
      <aside className="w-64 min-h-screen bg-base-200 p-4">
        <nav className="space-y-2">
          {
            isRole === 'admin' ? <>
              <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>
      <nav className="space-y-4 mb-8">
        <NavLink
          to="/dashboard/admin-dashboard"
          className={({ isActive }) =>
            `flex items-center gap-2 w-full btn btn-outline ${isActive ? 'btn-primary ' : ''}`
          }
        >
          <FaUserCog />
          Dashboard
        </NavLink>

        <NavLink
          to="/dashboard/manage-doctors"
          className={({ isActive }) =>
            `flex items-center gap-2 w-full btn btn-outline ${isActive ? 'btn-primary ' : ''}`
          }
        >
          <FaTasks />
          Manage Doctors
        </NavLink>

        <NavLink
          to="/dashboard/add-doctor"
          className={({ isActive }) =>
            `flex items-center gap-2 w-full btn btn-outline ${isActive ? 'btn-primary ' : ''}`
          }
        >
          <FaPlusCircle />
          Add Doctor
        </NavLink>

        <NavLink
          to="/dashboard/all-users"
          className={({ isActive }) =>
            `flex items-center gap-2 w-full btn btn-outline ${isActive ? 'btn-primary ' : ''}`
          }
        >
          <FaUsers />
          All Users
        </NavLink>

        <NavLink
          to="/dashboard/booked-appointments"
          className={({ isActive }) =>
            `flex items-center gap-2 w-full btn btn-outline ${isActive ? 'btn-primary ' : ''}`
          }
        >
          <FaUsers />
          Booked Appointments
        </NavLink>
              </nav>
            </> : <>
              <h2 className="text-xl font-bold mb-4">Dashboard</h2>
              <NavLink to="/dashboard/my-appointment" className="btn btn-ghost justify-start gap-2 w-full">
                <FaSuitcase className="text-lg" /> My Appointment
              </NavLink>
              <NavLink to="/dashboard/my-reviews" className="btn btn-ghost justify-start gap-2 w-full">
                <FaPlusCircle className="text-lg" /> My Review
              </NavLink>
            </>
          }
          <div className="divider"></div>
          <NavLink to="/" className="  block btn btn-ghost w-full text-left"> Home</NavLink>

        </nav>
      </aside>

      <main className="flex-1 p-6 bg-base-100">
        <Outlet></Outlet>
      </main>
    </div>
  )
};

export default Dashboard