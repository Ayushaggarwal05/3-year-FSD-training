import React, { useState } from 'react';
import { User, Cpu, Server, HardDrive, Activity } from 'lucide-react';

const Work = () => {
  const [activeData, setActiveData] = useState(null);
  const [activeLabel, setActiveLabel] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (endpoint, label) => {
    setLoading(true);
    setError(null);
    setActiveLabel(label);
    setActiveData(null);
    try {
      const response = await fetch(`http://localhost:3000/api/os/${endpoint}`);
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      const data = await response.json();
      setActiveData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderData = () => {
    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">{error}</div>;
    if (!activeData) return <div className="placeholder">Select a category to view system information</div>;

    return (
      <div className="data-display">
        <h3>{activeLabel}</h3>
        <pre>{JSON.stringify(activeData, null, 2)}</pre>
      </div>
    );
  };

  return (
    <div className="page-container work-page">
      <h2>IOS with React.JS</h2>
      
      <div className="button-grid">
        <button onClick={() => fetchData('user', 'User Info')} className="info-btn">
          <User size={24} />
          <span>User Info</span>
        </button>
        <button onClick={() => fetchData('arch', 'Architecture')} className="info-btn">
          <Cpu size={24} />
          <span>Architecture</span>
        </button>
        <button onClick={() => fetchData('hostname', 'Hostname')} className="info-btn">
          <Server size={24} />
          <span>Hostname</span>
        </button>
        <button onClick={() => fetchData('memory', 'Total Memory')} className="info-btn">
          <HardDrive size={24} />
          <span>Memory Info</span>
        </button>
        <button onClick={() => fetchData('memory', 'Free Memory')} className="info-btn">
          <Activity size={24} />
          <span>Free Memory</span>
        </button>
      </div>

      <div className="result-container">
        {renderData()}
      </div>
    </div>
  );
};

export default Work;
