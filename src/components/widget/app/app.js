import React from 'react';

import Header from '../header';
import Body from '../body';
import Footer from '../footer';

import './app.css';

export default function ({title, body, footer}) {
  return (
    <div className="widget">
      <Header title="title" />
      <Body component={body} />
      <Footer component={footer} />
    </div>
  );
}