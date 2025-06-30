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
              <NavLink to="/dashboard/admin-dashboard" className="flex items-center gap-2 w-full btn btn-outline">
                <FaUserCog />
                Dashboard
              </NavLink>
              <NavLink to="/dashboard/manage-doctors" className="flex items-center gap-2 w-full btn btn-outline">
                <FaTasks />
                Manage Doctors
              </NavLink>
              <NavLink to="/dashboard/add-doctor" className="flex items-center gap-2 w-full btn btn-outline">
                <FaPlusCircle />
                Add Doctor
              </NavLink>
              <NavLink to="/dashboard/all-users" className="flex items-center gap-2 w-full btn btn-outline">
                <FaUsers />
                All Users
              </NavLink>
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