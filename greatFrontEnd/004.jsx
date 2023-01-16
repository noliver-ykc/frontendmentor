import React, { useState } from "react";
import './styles.css';


export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }
  return (
    <div>
      <button onClick={handleClick}>Clicks: {count}</button>
    </div>
  );
}
