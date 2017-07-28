import React from 'react';

import Widget from '../../widget';
import UsersList from '../users-list';
import MoreUsers from '../more-users';

export default function ({ users }) {
  return (
    <Widget
      title="Keyboard & Mouse Activity"
      footer={<MoreUsers />}>
      <UsersList users={users} />
    </Widget>
  );
}