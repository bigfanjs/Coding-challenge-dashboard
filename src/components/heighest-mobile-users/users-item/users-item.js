import React from 'react';

import './users-item.css';

export default function ({name, weeklyMobileUsage, color}) {
  return (
    <li className="mobile_users_item">
      <div className="mobile_user_circle" style={{backgroundColor: color}}></div>
      <div className="mobile_user_content">
        <p>{ name }</p>
        <h5>{ weeklyMobileUsage }</h5>
      </div>
    </li>
  );
}