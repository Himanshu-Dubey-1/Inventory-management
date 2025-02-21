import React from "react";
import {IUser} from '../models/IUser'


interface IProps  {
  users: IUser[]
}

const UserTable: React.FC<IProps> = ({users}) => {

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Users</h2>
          <p className="text-gray-600">A list of all the users in your enterprise including their name, email, and role.</p>
        </div>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
          Add user
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">Name</th>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">Email</th>
              <th className="text-left px-4 py-3 text-gray-700 font-medium">Role</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-gray-900">{user.username}</td>
                <td className="px-4 py-3 text-gray-500">{user.email}</td>
                <td className="px-4 py-3 text-gray-500">{user.role}</td>
                {/* <td className="px-4 py-3 text-right">
                  <button className="text-indigo-600 hover:text-indigo-900 transition">Edit</button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
