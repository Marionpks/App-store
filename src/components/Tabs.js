import React from 'react';

const Tabs = ({ activeTab, onTabChange }) => {
  const tabs = ['Social', 'Games', 'News', 'Food'];

  return (
    <ul className="tabs-list">
      {tabs.map((tab) => (
        <li className="tab-item" key={tab}>
          <button
            type="button"
            className={`tab-button ${activeTab === tab ? 'active' : ''}`}
            onClick={() => onTabChange(tab)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
