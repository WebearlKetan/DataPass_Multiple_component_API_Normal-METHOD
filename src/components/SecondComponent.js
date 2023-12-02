
import React from 'react';

const SecondComponent = ({ userList }) => {
  return (
    <div>
      <h2>YourComponent</h2>
      <ul>
        {userList.map(user => (
          <li key={user.id}>
            <img src={user.image} alt={user.username} />
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SecondComponent;