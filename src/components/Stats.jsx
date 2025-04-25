import React, { useEffect, useState } from "react";
import "./Stats.css"; // Import the CSS file

const Stats = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 100; // Final value for Client Satisfaction
    const duration = 2000; // 2 seconds for smooth animation
    const stepTime = duration / end;

    const interval = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-item">
          <div className="stats-count">{count}%</div>
          <div>Client Satisfaction</div>
        </div>
        <div className="stats-item">
          <div className="stats-count">{count / 2 - 39}</div>
          <div>Projects Delivered</div>
        </div>
        <div className="stats-item">
          <div className="stats-count">{count / 10}</div>
          <div>Happy Clients</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
