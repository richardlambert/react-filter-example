import { useContext } from 'react';
import UserContext from './UserContext';
import UserListItem from './UserListItem';

const UserList = () => {
  const { users, userFilter } = useContext(UserContext);
  return (
    <div>
      {users
        .filter((user) => user.name.toLowerCase().includes(userFilter.toLowerCase()))
        .map((user) => (
          <UserListItem key={user.id} user={user} />
        ))}
    </div>
  );
};

export default UserList;
