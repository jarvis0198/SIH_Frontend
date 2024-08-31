import React from 'react';
import '../css/Monitor.css'

function Monitor() {
  return (
    <div className="monitoring-container">
      <header className="monitoring-header">Monitoring</header>
      <div className="content-container">
        <div className="left-panel">
          <div className="card">Audio Detection</div>
          <div className="functions">
            <button className="function-button">Function1</button>
            <button className="function-button">Function1</button>
            <button className="function-button">Function1</button>
            <button className="function-button">Function1</button>
          </div>
        </div>
        <div className="right-panel">
          <div className="card">Audio Detection</div>
          <div className="card">Results:</div>
        </div>
      </div>
    </div>
  );
}

export default Monitor;