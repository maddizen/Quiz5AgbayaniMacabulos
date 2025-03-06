import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserScreen = ({ match }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await axios.get(`/api/users/${match.params.id}/`);
      setUser(data);
    };
    fetchUser();
  }, [match.params.id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
      <p>First Name: {user.first_name}</p>
      <p>Last Name: {user.last_name}</p>
      <p>Admin: {user.is_admin ? 'Yes' : 'No'}</p>
      <p>Active: {user.is_active ? 'Yes' : 'No'}</p>
    </div>
  );
};

export default UserScreen;
