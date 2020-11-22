import React from 'react';
import './Reset.css';

export default function Reset(props) {
  const resetter = () => {
    props.reset();
  };

  return (
    <div id="reset">
      <button onClick={resetter}>Restart</button>
    </div>
  );
}
