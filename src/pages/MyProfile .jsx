import React, { useState, useEffect } from 'react';
import { getAuth, updateProfile, onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MyProfile = () => {
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                setDisplayName(currentUser.displayName || '');
                setPhotoURL(currentUser.photoURL || '');
            }
        });
        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile(auth.currentUser, {
                displayName,
                photoURL,
            });
            setMessage('✅ Profile updated successfully!');
        } catch (err) {
            console.error(err);
            setMessage('❌ Failed to update profile.');
        }
    };

    if (!user) {
        return <div className="text-center">Loading user info...</div>;
    }

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="max-w-md mx-auto p-6 bg-white shadow-md text-gray-900 mt-10 mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-center">My Profile</h2>
                    <img
                        src={photoURL || 'https://via.placeholder.com/100'}
                        alt="User"
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <p className="text-center mb-4"><strong>Email:</strong> {user.email}</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Name</label>
                            <input
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                className="mt-1 w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Photo URL</label>
                            <input
                                type="text"
                                value={photoURL}
                                onChange={(e) => setPhotoURL(e.target.value)}
                                className="mt-1 w-full px-3 py-2 border rounded-md"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-[#111110]  text-white py-2 rounded-md hover:bg-red-600"
                        >
                            Save Changes
                        </button>
                        {message && <p className="text-center mt-2">{message}</p>}
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default MyProfile;