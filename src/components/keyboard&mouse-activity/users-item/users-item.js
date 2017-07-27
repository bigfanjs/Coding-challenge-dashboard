import React from 'react';
import LinearProgress from 'material-ui/LinearProgress';

import './users-item.css';

const styles = {
  progress: {
    width: '145px',
    height: '10px',
    position: 'absolute',
    left: '197px'
  }
};

export default function ({name, avatar, monthlyActivity}) {
  return (
    <li className="activity_users_item">
      <img src={avatar.url} alt="avatar" />
      <span>{ name }</span>
      <LinearProgress
        mode="determinate"
        value={parseInt(monthlyActivity)}
        color="#5cb35c"
        style={styles.progress}
        />
      <h4>{monthlyActivity}</h4>
    </li>
  );
}