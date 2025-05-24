import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';

const UpdateHobby = () => {
  const { user } = useContext(AuthContext);
  const { _id, groupName, category, description, location, maxMembers, startDate, imageUrl } = useLoaderData();

  const handleUpdateGroup = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const updatedGroup = Object.fromEntries(formData.entries());
    console.log("Updated group data to send:", updatedGroup);

    fetch(`https://hobby-hub-server-fawn.vercel.app/hobbies/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedGroup)
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("Response from server:", data);

        if (data.modifiedCount && data.modifiedCount > 0) {
          toast.success("Your group has been updated", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        } else {
          toast.warn("No changes made. Your group info was not updated.", {
            position: "top-right",
            autoClose: 3000,
          });
        }
      })
      .catch(error => {
        console.error("Error updating group:", error);
        toast.error(`Update failed: ${error.message || "Please try again later."}`, {
          position: "top-right",
          autoClose: 3000,
        });
      });
  };

  return (
    <div>
      <Navbar />
      <ToastContainer />
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md my-10">
        <h2 className="text-2xl font-bold text-center mb-6">Update Hobby Group</h2>

        <form onSubmit={handleUpdateGroup} className="space-y-4">
          {/* Group Name */}
          <div>
            <label className="label font-medium">Group Name</label>
            <input
              name="groupName"
              type="text"
              className="input input-bordered w-full"
              defaultValue={groupName}
            />
          </div>

          {/* Hobby Category */}
          <div>
            <label className="label font-medium">Hobby Category</label>
            <select
              name="category"
              className="select select-bordered w-full"
              defaultValue={category}
            >
              <option value="">Select Category</option>
              <option>Drawing & Painting</option>
              <option>Photography</option>
              <option>Video Gaming</option>
              <option>Fishing</option>
              <option>Running</option>
              <option>Cooking</option>
              <option>Reading</option>
              <option>Writing</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              defaultValue={description}
              name="description"
              className="textarea textarea-bordered w-full"
              rows="3"
            ></textarea>
          </div>

          {/* Location */}
          <div>
            <label className="label font-medium">Meeting Location</label>
            <input
              name="location"
              type="text"
              className="input input-bordered w-full"
              defaultValue={location}
            />
          </div>

          {/* Max Members */}
          <div>
            <label className="label font-medium">Max Members</label>
            <input
              name="maxMembers"
              type="number"
              className="input input-bordered w-full"
              defaultValue={maxMembers}
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="label font-medium">Start Date</label>
            <input
              name="startDate"
              type="date"
              className="input input-bordered w-full"
              defaultValue={startDate}
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="label font-medium">Image URL</label>
            <input
              name="imageUrl"
              type="text"
              className="input input-bordered w-full"
              defaultValue={imageUrl}
            />
          </div>

          {/* User Info (Read-only) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label font-medium">User Name</label>
              <input
                type="text"
                value={user?.displayName || "Anonymous"}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
            <div>
              <label className="label font-medium">User Email</label>
              <input
                type="email"
                value={user?.email || "unknown@example.com"}
                readOnly
                className="input input-bordered w-full bg-gray-100"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button type="submit" className="btn btn-primary w-full">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateHobby;
