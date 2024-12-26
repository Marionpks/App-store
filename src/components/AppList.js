import React from 'react';

const AppList = ({ apps }) => {
  return (
    <ul className="apps-list">
      {apps.map((app) => (
        <li className="app-item" key={app.name}>
          <a href={app.url} target="_blank" rel="noopener noreferrer">
            <img className="app-image" src={app.image} alt={app.name} />
            <p className="app-name">{app.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default AppList;

