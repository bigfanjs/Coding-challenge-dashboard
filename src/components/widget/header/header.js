import React from 'react';

import './header.css';

export default function ({title}) {
  return (
    <div className="widget_header">
      <h5>{ title }</h5>
      <div style={{marginLeft: '100px'}}>Monthly</div>
      <img src="/images/more.svg" alt="More" />
    </div>
  );
}