import { useEffect, useState } from 'react';
import UserContext from './UserContext';
import UserFilter from './UserFilter';
import UserList from './UserList';

const UserLanding = () => {
  const [users, setUsers] = useState([]);
  const [userFilter, setUserFilter] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <UserContext.Provider value={{ users, userFilter, setUserFilter }}>
      <UserFilter />
      <UserList />
    </UserContext.Provider>
  );
};

export default UserLanding;
