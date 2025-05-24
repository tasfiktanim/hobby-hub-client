import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const CreateGroup = () => {
    const { user } = useContext(AuthContext);

    const handleCreateGroup = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newHobby = Object.fromEntries(formData.entries());
        console.log(newHobby);

        // send to db
        fetch('https://hobby-hub-server-fawn.vercel.app/hobbies', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newHobby)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('added successfully.')

                    Swal.fire({
                        title: "Hobby group created successfully.",
                        icon: "success",
                        draggable: true
                    });
                }
            });
    };

    return (
        <div>
            <Navbar />
            <div className="max-w-3xl mx-auto p-6 bg-base-100 shadow-md rounded-md my-10">
                <h2 className="text-2xl font-bold text-center mb-6 text-base-content">Create a Hobby Group</h2>

                <form onSubmit={handleCreateGroup} className="space-y-4">
                    {/* Group Name */}
                    <div>
                        <label className="label font-medium text-base-content">Group Name</label>
                        <input
                            name="groupName"
                            type="text"
                            className="input input-bordered w-full bg-base-100 text-base-content"
                            required
                        />
                    </div>

                    {/* Hobby Category */}
                    <div>
                        <label className="label font-medium text-base-content">Hobby Category</label>
                        <select
                            name="category"
                            className="select select-bordered w-full bg-base-100 text-base-content"
                            required
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
                        <label className="label font-medium text-base-content">Description</label>
                        <textarea
                            name="description"
                            className="textarea textarea-bordered w-full bg-base-100 text-base-content"
                            rows="3"
                            required
                        ></textarea>
                    </div>

                    {/* Location */}
                    <div>
                        <label className="label font-medium text-base-content">Meeting Location</label>
                        <input
                            name="location"
                            type="text"
                            className="input input-bordered w-full bg-base-100 text-base-content"
                            required
                        />
                    </div>

                    {/* Max Members */}
                    <div>
                        <label className="label font-medium text-base-content">Max Members</label>
                        <input
                            name="maxMembers"
                            type="number"
                            min="1"
                            className="input input-bordered w-full bg-base-100 text-base-content"
                            required
                        />
                    </div>

                    {/* Start Date */}
                    <div>
                        <label className="label font-medium text-base-content">Start Date</label>
                        <input
                            name="startDate"
                            type="date"
                            className="input input-bordered w-full bg-base-100 text-base-content"
                            required
                        />
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="label font-medium text-base-content">Image URL</label>
                        <input
                            name="imageUrl"
                            type="text"
                            className="input input-bordered w-full bg-base-100 text-base-content"
                            required
                        />
                    </div>

                    {/* User Info (Read-only) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="label font-medium text-base-content">User Name</label>
                            <input
                                type="text"
                                value={user?.displayName || "Anonymous"}
                                readOnly
                                className="input input-bordered w-full bg-base-200 text-base-content"
                            />
                        </div>
                        <div>
                            <label className="label font-medium text-base-content">User Email</label>
                            <input
                                type="email"
                                value={user?.email || "unknown@example.com"}
                                readOnly
                                className="input input-bordered w-full bg-base-200 text-base-content"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button type="submit" className="btn btn-primary w-full">
                            Create
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default CreateGroup;