import React from 'react';

import UsersItem from '../users-item';

import './users-list.css';

export default function ({ users }) {
  return (
    <ul className="activity_users_list">
      {
        users.map(user => (
          <UsersItem key={user._id} {...user} />
        ))
      }
    </ul>
  );
}