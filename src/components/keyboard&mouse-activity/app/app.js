import React from 'react';

import Widget from '../../widget';
import UsersList from '../users-list';

export default function ({ users }) {
  return (
    <Widget
      title="Keyboard & Mouse Activity"
      body={<UsersList users={users} />}
      />
  );
}