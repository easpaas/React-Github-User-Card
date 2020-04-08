import React from 'react';
import './styles.css';
import FollowerCard from './FollowerCard';

function MyFollowers({followers}) {
  return (
    <div className="followers-container">
      <h2>Followers</h2>
      <div className="followers">
      {
        followers.map(follower => {
          return (
              <FollowerCard 
                name={follower.login} 
                photo={follower.avatar_url}
              />
          );
        })
      }
      </div>
    </div>
  )
}

export default MyFollowers;