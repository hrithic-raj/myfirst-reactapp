import React, { useState, useEffect, useRef } from 'react';


function PreviousStateExample() {
  const [name, setName] = useState('');
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div>
        <h1>PreviousState</h1>
        <br />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Current Name: {name}</p>
      <p>Previous Name: {prevName.current}</p>
    </div>
  );
}

export default PreviousStateExample;