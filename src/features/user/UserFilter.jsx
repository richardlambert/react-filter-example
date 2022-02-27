import { useContext } from 'react';
import UserContext from './UserContext';

const UserFilter = () => {
  const { userFilter, setUserFilter } = useContext(UserContext);

  return (
    <input type='text' value={userFilter} onChange={(e) => setUserFilter(e.target.value)} placeholder='Search Users' />
  );
};

export default UserFilter;
