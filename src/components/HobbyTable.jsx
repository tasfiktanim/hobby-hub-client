import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const HobbyTable = ({ hobby, hobbies, setHobbies }) => {
  const { _id, groupName, category, imageUrl, location, startDate } = hobby;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {


      if (result.isConfirmed) {

        // Start deleting 
        fetch(`https://hobby-hub-server-fawn.vercel.app/hobbies/${_id}`, {
          method: 'delete'
        })
          .then(res => res.json()).then(data => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success"
              });
              // remove the hobby
              const remainingHobbies = hobbies.filter(hob => hob._id !== _id);
              setHobbies(remainingHobbies);
            }
          })

      }
    });


  }
  return (
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">Image</th>
              <th className="py-2 px-4 border">Name</th>
              <th className="py-2 px-4 border">Category</th>
              <th className="py-2 px-4 border">Location</th>
              <th className="py-2 px-4 border">Start Date</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="py-2 px-4 border">
                <img src={imageUrl} alt={groupName} className="w-20 h-20 object-cover rounded-md mx-auto" />
              </td>
              <td className="py-2 px-4 border">{groupName}</td>
              <td className="py-2 px-4 border">{category}</td>
              <td className="py-2 px-4 border">{location}</td>
              <td className="py-2 px-4 border">{startDate}</td>
              <td className="py-2 px-4 border space-y-1">
                <Link to={`/updateGroup/${_id}`}>
                  <button className="bg-blue-500 text-white px-3 py-1 rounded inline-block">Update</button>
                </Link>
                <br />
                <button onClick={() => handleDelete(_id)} className="bg-red-500 text-white px-3 py-1 rounded inline-block">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HobbyTable;


