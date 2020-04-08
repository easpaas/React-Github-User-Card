import React from 'react';
import './styles.css';

function UserCard({userData}) {
  return(
    <div>
      <h1>My GitHub</h1>
      <div className="card">
        <div className="image">
          <img src={`${userData.avatar_url}`} alt={`profile of ${userData.name}`} />
        </div>
        <h2>{`Hello, my name is ${userData.name}!`}</h2> 
        <p>{userData.bio}</p>
      </div>
    </div>
  );
}

export default UserCard;