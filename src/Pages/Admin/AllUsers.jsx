import React, { useState } from 'react';
import { FaSearch, FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useRole from '../../hooks/useRole';
import useUser from '../../hooks/useUser';

const AllUsers = () => {
  const [users, refetch] = useUser();
  const [isRole] = useRole();
  const axiosSecure = useAxiosSecure();
  const [search, setSearch] = useState('');
  // const [roleFilter, setRoleFilter] = useState('');

  // const filteredUsers = users.filter(
  //   (user) =>
  //     (user.name?.toLowerCase().includes(search.toLowerCase()) ||
  //       user.email?.toLowerCase().includes(search.toLowerCase())) &&
  //     (roleFilter === '' || user.role === roleFilter)
  // );

  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Make ${user.name} an Admin?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, make Admin!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/role/${user._id}`, { role: 'admin' }).then((res) => {
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire('Updated!', `${user.name} is now an Admin.`, 'success');
          }
        });
      }
    });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Delete user: ${user.name}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete!',
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire('Deleted!', 'User has been removed.', 'success');
          }
        });
      }
    });
  };

  if (!isRole) {
    return (
      <div className="p-8 text-center text-red-600 font-semibold">
        Access Denied: Admins Only
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        <FaUsers /> All Users
      </h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <FaSearch />
          <input
            type="text"
            placeholder="Search by name or email"
            className="input input-bordered w-64"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {/* <select
          className="select select-bordered w-60"
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="student">Student</option>
          <option value="consultant">Consultant</option>
          <option value="admin">Admin</option>
        </select> */}
      </div>

      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={user.photoURL || 'https://via.placeholder.com/40'}
                      alt="User"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="capitalize">
                    {user.role === 'admin' ? (
                      <span className="badge badge-success">Admin</span>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-xs btn-outline"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
