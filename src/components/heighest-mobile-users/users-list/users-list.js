import React from 'react';

import UsersItem from '../users-item';

import './users-list.css';

export default function ({users, colors}) {
  return (
    <ul className="mobile_users_list">
      {
        users
          .filter((user) => user.weeklyMobileUsage != null)
          .map((user, idx) => (<UsersItem key={user._id} {...user} color={colors[idx]} />))
      }
    </ul>
  );
}