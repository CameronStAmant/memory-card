import React from 'react';

export default function Reset(props) {
  const resetter = () => {
    props.onClick(0);
  };

  return (
    <div>
      <button onClick={resetter}>Restart</button>
    </div>
  );
}
