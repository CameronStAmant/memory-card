import React from 'react';

export default function Reset(props) {
  const resetter = () => {
    props.reset();
  };

  return (
    <div>
      <button onClick={resetter}>Restart</button>
    </div>
  );
}
