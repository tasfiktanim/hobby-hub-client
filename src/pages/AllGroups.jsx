import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';
import { Fade, Zoom, Slide } from 'react-awesome-reveal';

const AllGroups = () => {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch('https://hobby-hub-server-fawn.vercel.app/hobbies')
      .then(res => res.json())
      .then(data => setGroups(data))
      .catch(err => console.error('Failed to fetch groups:', err));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="px-4 py-10 max-w-7xl mx-auto">
        <Fade direction="down" triggerOnce>
          <h2 className="text-3xl font-bold text-center mb-10 text-base-content">All Hobby Groups</h2>
        </Fade>

        <Slide direction="up" triggerOnce cascade damping={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {groups.map(group => (
              <Zoom key={group._id} triggerOnce>
                <div className="bg-base-100 rounded-xl shadow-md overflow-hidden flex flex-col h-full">
                  <Fade triggerOnce>
                    <img
                      src={group.imageUrl}
                      alt={group.groupName}
                      className="w-full h-48 object-cover"
                    />
                  </Fade>
                  <Fade cascade triggerOnce damping={0.05}>
                    <div className="flex flex-col justify-between p-5 flex-1 space-y-2 text-base-content">
                      <div>
                        <h3 className="text-xl font-bold">{group.groupName}</h3>
                        <p><span className="font-semibold">Category:</span> {group.category}</p>
                        <p><span className="font-semibold">Description:</span> {group.description}</p>
                        <p><span className="font-semibold">Location:</span> {group.location}</p>
                        <p><span className="font-semibold">Max Members:</span> {group.maxMembers}</p>
                        <p><span className="font-semibold">Start Date:</span> {group.startDate}</p>
                      </div>
                      <Link to={`/group/${group._id}`}>
                        <button className="btn btn-primary mt-2 w-full">
                          See More
                        </button>
                      </Link>
                    </div>
                  </Fade>
                </div>
              </Zoom>
            ))}
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default AllGroups;