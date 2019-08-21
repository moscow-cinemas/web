import React from 'react';
import data from './data.js';
import './App.css';

function App() {
  return (
    <div className="App">
      {data.map(t => (
        <figure>
          <h2>{t.name}</h2>
          <small>{t.id}</small>
          <p>{t.description}</p>
          <p>{t.location.address}</p>
          <p>{t.timeline.filter(d => d.date).map(d => (d.date)).join(' — ')}</p>
        </figure>
      ))}
    </div>
  );
}

export default App;
