import React, {Component} from 'react';

import Widget from '../../widget';
import UsersList from '../users-list';
import PieChart from '../pie-chart';

class HeighestMobileUsers extends Component {
  constructor(props) {
    super(props);

    this.colors = [
      '#ffc107',
      '#E91E63',
      '#35d5f6',
      '#4d5cef',
      '#009688'
    ];
  }

  render() {
    return (
      <Widget title="Heighest Mobile Users">
        <UsersList
          colors={this.colors}
          users={this.props.users}/>
        <PieChart colors={this.colors} />
      </Widget>
    );
  }
}

export default HeighestMobileUsers;