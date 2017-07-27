import React from 'react';

import Header from '../header';
import Body from '../body';
import Footer from '../footer';

import './app.css';

export default function ({title, body, footer}) {
  return (
    <div className="widget">
      <Header title={title} />
      <Body>{ body }</Body>
      <Footer component={footer} />
    </div>
  );
}