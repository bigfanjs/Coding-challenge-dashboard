import React from 'react';

import './header.css';

export default function ({title}) {
  return (
    <div className="widget_header">
      <h4>{ title }</h4>
      <div>Monthly</div>
      <img src="/images/more.svg" alt="More" />
    </div>
  );
}