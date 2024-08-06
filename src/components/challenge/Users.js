import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    setUsers(data);
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {Array.isArray(users) && users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
