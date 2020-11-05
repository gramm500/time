import React, { useState } from "react";

function App() {
  let now = new Date().toLocaleTimeString();
  let [time, setTime] = useState(now);

  setInterval(showTime, 1000);

  function showTime() {
    let newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
    </div>
  );
}

export default App;
