import React from 'react';

import Widget from '../../widget';
import UsersList from '../users-list';
import PieChart from '../pie-chart';

export default function ({ users }) {
  return (
    <Widget title="Heighest Mobile Users">
      <UsersList users={users} />
      <PieChart />
    </Widget>
  );
}