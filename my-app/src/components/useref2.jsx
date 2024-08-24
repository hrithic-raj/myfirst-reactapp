import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


function RenderCounter() {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;    
  });

  return (
    <div>
      <p>Render Count: {renderCount.current}</p>
      <Button onClick={() => setCount(count + 1)}>Increment Count</Button>
      <p>Count: {count}</p>
    </div>
  );
}

export default RenderCounter;


