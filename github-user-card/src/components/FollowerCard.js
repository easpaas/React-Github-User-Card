import React from 'react';
import './styles.css';

function FollowerCard(props) {
  return (
    <div className="follower-card">
      <div className="image">
        <img src={props.photo} alt={`${props.name} profile avatar`} />
      </div>
      <a href={props.html_url}><h4>{props.name}</h4></a>
    </div>
  );
}

export default FollowerCard;