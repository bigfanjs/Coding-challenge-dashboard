import React from 'react';

import Header from '../header';

import './app.css';

export default function ({title, footer, children}) {
  return (
    <div className="widget">
      <Header title={title} />
      { children }
      <div className="widget_footer">{ footer }</div>
    </div>
  );
}