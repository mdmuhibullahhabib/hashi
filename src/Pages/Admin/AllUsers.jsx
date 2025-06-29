import React, { useState } from 'react';

const AllUsers = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: 'debbie.baker@example.com', job: '', favouriteColor: '', isAdmin: false },
    { id: 2, name: 'nathan.roberts@example.com', job: '', favouriteColor: '', isAdmin: false },
    { id: 3, name: 'georgia.young@example.com', job: '', favouriteColor: '', isAdmin: false },
    { id: 4, name: 'debra.holt@example.com', job: '', favouriteColor: '', isAdmin: false },
    { id: 5, name: 'tim.jennings@example.com', job: '', favouriteColor: '', isAdmin: false },
    { id: 6, name: 'sara.cruz@example.com', job: '', favouriteColor: '', isAdmin: false },
    { id: 7, name: 'willie.jennings@example.com', job: '', favouriteColor: '', isAdmin: false },
  ]);

  const handleMakeAdmin = (id) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, isAdmin: true } : user
    ));
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex justify-center items-start">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-xl overflow-hidden border border-blue-200">
        <div className="p-6 bg-white rounded-t-xl">
          <h2 className="text-xl font-semibold text-gray-800">All Users : {users.length < 10 ? `0${users.length}` : users.length}</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead className="bg-blue-50">
              <tr className="text-gray-600">
                <th className="font-medium"></th>
                <th className="font-medium">NAME</th>
                <th className="font-medium">Job</th>
                <th className="font-medium">Favourite Color</th>
                <th className="font-medium"></th> {/* For actions */}
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="font-bold text-gray-700">{user.id < 10 ? `0${user.id}` : user.id}</td>
                  <td className="text-gray-700">{user.name}</td>
                  <td>{user.job}</td>
                  <td>{user.favouriteColor}</td>
                  <td className="flex space-x-2 justify-end pr-4 py-2">
                    {!user.isAdmin && (
                      <button
                        className="btn btn-sm bg-green-700 hover:bg-green-800 text-white border-none rounded-md px-4 py-2"
                        onClick={() => handleMakeAdmin(user.id)}
                      >
                        Make Admin
                      </button>
                    )}
                    <button
                      className="btn btn-sm bg-gray-700 hover:bg-gray-800 text-white border-none rounded-md px-4 py-2"
                      onClick={() => handleRemoveUser(user.id)}
                    >
                      Remove User
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AllUsers;
