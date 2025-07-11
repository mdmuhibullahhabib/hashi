import React, { useContext, useState } from 'react';
import { FaTooth } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AuthContext } from '../Provider/Authprovider';
import useRole from '../hooks/useRole';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

const [isRole] = useRole()
  
  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(error => console.log(error));
  }

  return (
    <div className="bg-[#003b3f] text-white">
      <div className="navbar px-4 md:px-10 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex-1">
          <Link to="/" className="flex items-center text-xl md:text-2xl font-bold">
            H<span><FaTooth className="text-3xl text-accent" /></span>SHI
          </Link>
        </div>

        {/* D */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="hover:text-orange-400">Home</Link>
          <Link to="/about" className="hover:text-orange-400">About</Link>
          <Link to="/appointment" className="hover:bg-orange-400">Appointment</Link>
          <Link to="/reviews" className="hover:text-orange-400">Reviews</Link>
          <Link to="/contact" className="hover:text-orange-400">Contact Us</Link>

          {/* Conditional Auth */}
          {user && user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full ring ring-white ring-offset-2">
                  <img src={user.avatar} alt="User Avatar" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-3 shadow menu menu-sm dropdown-content bg-base-100 text-black rounded-box w-52"
              >
                <li className="mb-1">
                  <span className="font-semibold">{user?.displayName}</span>
                  <p className="text-sm text-gray-500">{user?.email}</p>
                </li>
                {
                    isRole === 'admin' ? <>
                      <li><Link to="/dashboard/admin-dashboard">Dashboard</Link></li>
                    </> : <>
                      <li><Link to="/dashboard/my-appointment">Dashboard</Link></li>
                    </>
                  }
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/signin" className="btn btn-sm bg-orange-400 text-white hover:bg-orange-500">Login</Link>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FaBars className="text-xl" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 text-black rounded-box w-52"
          >
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            {user?.isLoggedIn ? (
              <>
                <li className="mt-2 border-t pt-2">
                  <span className="font-semibold">{user.name}</span>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><button onClick={() => alert('Logged out')}>Logout</button></li>
              </>
            ) : (
              <li><Link to="/signin">Login</Link></li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
