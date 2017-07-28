import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

import './pie-chart.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%) rotate(-90deg)'
};

export default function ({colors}) {
  return (
    <div className="pie-chart">
      {[...Array(10)].map((item, idx) => (
        <CircularProgress
          key={idx}
          thickness={6}
          mode="determinate"
          color={idx > 4 ? colors[4-(idx%5)] : '#dcdcdc'}
          size={((idx%5)+2)*30-(15*(idx%5))}
          value={idx > 4 ? ((idx%5)+1)*17+(40-((idx%5)*10)) : 100}
          style={style} />
      ))}
    </div>
  );
}