import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useLoaderData } from 'react-router';
import HobbyTable from '../components/HobbyTable';
import Footer from '../components/Footer';

const MyGroup = () => {
    const initialHobbies = useLoaderData();
    const [hobbies, setHobbies] = useState(initialHobbies);




    return (
        <div>
            <nav><Navbar></Navbar></nav>
            <main>
                <h2 className="text-2xl font-semibold mb-4 mt-4 text-center">Group Details</h2>
                <div>
                    {
                        hobbies.map(hobby => <HobbyTable key={hobby._id} 
                            hobbies={hobbies}
                            setHobbies={setHobbies}
                            hobby={hobby}></HobbyTable>)
                    }
                </div>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default MyGroup;