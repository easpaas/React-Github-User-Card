import React from 'react';

function UserCard({userData}) {
  return(
    <div>
      <h1>User Card</h1>
        <div>{`Hello, my name is ${userData.name} and I'm a ${userData.title}`}</div>
    </div>
  );
}

export default UserCard;