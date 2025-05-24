import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../components/Navbar';
import { Fade, Zoom } from 'react-awesome-reveal';

const GroupDetails = () => {
  const group = useLoaderData();

  const handleJoinGroup = () => {
    alert(`You joined "${group.groupName}"`);
  };

  const isGroupActive = () => {
    const today = new Date();
    const groupStartDate = new Date(group.startDate);
    return groupStartDate >= today;
  };

  return (
    <div className="min-h-screen bg-base-100">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <Zoom triggerOnce>
          <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden">
            <Fade triggerOnce>
              <img
                src={group.imageUrl}
                alt={group.groupName}
                className="w-full h-64 object-cover"
              />
            </Fade>
            <Fade cascade triggerOnce damping={0.1}>
              <div className="p-6 space-y-4 text-base-content">
                <h1 className="text-3xl font-bold">{group.groupName}</h1>
                <p><span className="font-semibold">Category:</span> {group.category}</p>
                <p><span className="font-semibold">Description:</span> {group.description}</p>
                <p><span className="font-semibold">Location:</span> {group.location}</p>
                <p><span className="font-semibold">Max Members:</span> {group.maxMembers}</p>
                <p><span className="font-semibold">Start Date:</span> {group.startDate}</p>
                {isGroupActive() ? (
                  <button
                    onClick={handleJoinGroup}
                    className="btn btn-primary w-full"
                  >
                    Join Group
                  </button>
                ) : (
                  <p className="text-error font-semibold">This group is no longer active.</p>
                )}
              </div>
            </Fade>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default GroupDetails;