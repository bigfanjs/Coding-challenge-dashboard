import React from 'react';

import './more-users.css';

export default function () {
  return (
    <div className="activity_footer">
      <div className="images">
        <img src="/images/user1-avatar.png" alt="Avatar" />
        <img src="/images/user2-avatar.png" alt="Avatar" />
        <img src="/images/user3-avatar.png" alt="Avatar" />
      </div>
      <span>+10 more</span>
    </div>
  );
}