import React from 'react';
import data from './data.js';
import { GoogleMap, Marker } from './components/GoogleMap';

import './App.css';

function App() {
  return (
    <div className="App">
      <GoogleMap >
        {data.map((t, key) => {
          return t.location ? (
            <Marker
              onClick={() => {
                window.location.hash = t.id;
              }}
              title={t.name}
              key={key}
              position={{ lat: t.location.lat, lng: t.location.lng }}
            />
          ) : false
        })}
      </GoogleMap>
      <div>
      {data.map(t => (
        <figure>
          <h2 id={t.id}>{t.name}</h2>
          <small>{t.id}</small>
          <p>{t.description}</p>
          <p>{t.location.address}</p>
          <p>{t.timeline.filter(d => d.date).map(d => (d.date)).join(' — ')}</p>
        </figure>
      ))}
      </div>
    </div>
  );
}

export default App;
