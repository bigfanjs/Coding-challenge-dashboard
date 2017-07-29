import React from 'react';

import More from '../more';
import DropDown from '../drop-down';

import './app.css';

export default function ({title}) {
  return (
    <div className="widget_header">
      <h5>{ title }</h5>
      <div className="widget_header_actions">
        <DropDown />
        <More />
      </div>
    </div>
  );
}