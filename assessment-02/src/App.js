import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 5);
  });

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Initial count bug</h1>
      {/* Implement the buttons once bug is fixed. */}
      <button>Increment by 5</button>
      &nbsp;
      <button> Decrement by 5</button>
      {/* BUG: Counter keeps on running. Please fix it. */}
      <p>Count: {count}</p>
    </div>
  );
}

export default App;
