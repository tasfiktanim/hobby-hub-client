import React from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router';
import HobbyTable from '../components/HobbyTable';

const Group = () => {
    const hobbies = useLoaderData();
    console.log(hobbies);
    return (
        <div>
            <main>
             <div>
                {
                    hobbies.map(hobby=> <HobbyTable key={hobby._id} hobby={hobby}></HobbyTable>)
                }
             </div>
            </main>
        </div>
    );
};

export default Group;