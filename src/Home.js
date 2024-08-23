import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Onebox from './Onebox';

function Home() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // If no user data, redirect to login
      navigate('/');
    }
  }, [navigate]);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold mb-8">Welcome, {user.name}!</h2>
        <p className="text-lg">Email: {user.email}</p>
      </div> */}

      <Onebox />
    </div>
  );
}

export default Home;
