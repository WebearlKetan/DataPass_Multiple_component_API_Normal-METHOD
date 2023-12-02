
import React from 'react';

const FirstComponent = ({ userList }) => {
  return (
    <div>
      <h2>AnotherComponent</h2>
      <ul>
        {userList.map(user => (
          <li key={user.id}>
            <p>{`${user.firstName} ${user.lastName}`}</p>
            <p>{user.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FirstComponent;
