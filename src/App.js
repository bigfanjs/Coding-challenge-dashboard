import React, { Component } from 'react';
import './App.css';

import Header from './components/header';
import ActionBar from './components/action-bar';
import Activity from './components/keyboard&mouse-activity';
import HeighestMobileUsers from './components/heighest-mobile-users';

const dummyData = [
  {
    _id: 0,
    name: 'Samuel Barret',
    monthlyActivity: '98%',
    avatar: {
      name: 'user1-avatar',
      url: '/images/user1-avatar.png'
    },
    weeklyMobileUsage: null
  },
  {
    _id: 1,
    name: 'Scott Love',
    monthlyActivity: '88%',
    avatar: {
      name: 'user2-avatar',
      url: '/images/user2-avatar.png'
    },
    weeklyMobileUsage: null
  },
  {
    _id: 2,
    name: 'Michael McDaniel',
    monthlyActivity: '81%',
    avatar: {
      name: 'user3-avatar',
      url: '/images/user3-avatar.png'
    },
    weeklyMobileUsage: null
  },
  {
    _id: 3,
    name: 'Alejandro Wilkerson',
    monthlyActivity: '78%',
    avatar: {
      name: 'user4-avatar',
      url: '/images/user4-avatar.png'
    },
    weeklyMobileUsage: null
  },
  {
    _id: 4,
    name: 'Ivan Folwler',
    monthlyActivity: '71%',
    avatar: {
      name: 'user4-avatar',
      url: '/images/user5-avatar.png'
    },
    weeklyMobileUsage: null
  },
  {
    _id: 5,
    name: 'Benjamin Tyler',
    avatar: {
      name: 'user4-avatar',
      url: '/images/user5-avatar.png'
    },
    weeklyMobileUsage: '20h 45m'
  },
  {
    _id: 6,
    name: 'Darrell Hart',
    weeklyMobileUsage: '20h 45m'
  },
  {
    _id: 7,
    name: 'Lester Douglas',
    weeklyMobileUsage: '20h 45m'
  },
  {
    _id: 8,
    name: 'Georgia Harper',
    weeklyMobileUsage: '20h 45m'
  },
  {
    _id: 9,
    name: 'Olga Simpson',
    weeklyMobileUsage: '20h 45m'
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <ActionBar />
        <Activity users={dummyData} />
        <HeighestMobileUsers users={dummyData} />
      </div>
    );
  }
}

export default App;