import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Tabs from './components/Tabs';
import AppList from './components/AppList';

const appsData = [
  { 
    name: 'Facebook', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-facebook.png', 
    url: 'https://www.facebook.com' 
  },
  { 
    name: 'Messenger', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-messenger.png', 
    url: 'https://www.messenger.com' 
  },
  { 
    name: 'WhatsApp', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-whatsapp.png', 
    url: 'https://www.whatsapp.com' 
  },
  { 
    name: 'Instagram', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-instagram.png', 
    url: 'https://www.instagram.com' 
  },
  { 
    name: 'Snapchat', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-snapchat.png', 
    url: 'https://www.snapchat.com' 
  },
  { 
    name: 'Twitter', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-twitter.png', 
    url: 'https://www.twitter.com' 
  },
  { 
    name: 'Pinterest', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-pinterest.png', 
    url: 'https://www.pinterest.com' 
  },
  { 
    name: 'WeChat', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-wechat.png', 
    url: 'https://www.wechat.com' 
  },
  { 
    name: 'LinkedIn', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-linkedin.png', 
    url: 'https://www.linkedin.com' 
  },
  { 
    name: 'Telegram', 
    category: 'Social', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/social-telegram.png', 
    url: 'https://www.telegram.org' 
  },

  // News Apps
  { 
    name: 'Inshorts', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-inshorts.png', 
    url: 'https://www.inshorts.com' 
  },
  { 
    name: 'Way2News', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-way2news.png', 
    url: 'https://www.way2news.com' 
  },
  { 
    name: 'Google News', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-google-news.png', 
    url: 'https://news.google.com' 
  },
  { 
    name: 'Flipboard', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-flipboard.png', 
    url: 'https://www.flipboard.com' 
  },
  { 
    name: 'BBC News', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-bbc-news.png', 
    url: 'https://www.bbc.com/news' 
  },
  { 
    name: 'CNN News', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-cnn-news.png', 
    url: 'https://www.cnn.com' 
  },
  { 
    name: 'Daily Wire', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-daily-wire.png', 
    url: 'https://www.dailywire.com' 
  },
  { 
    name: 'AP News', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-ap-news.png', 
    url: 'https://apnews.com' 
  },
  { 
    name: 'News Break', 
    category: 'News', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/news-news-break.png', 
    url: 'https://www.newsbreak.com' 
  },
  // Games Apps
  { 
    name: 'Subway Surfers', 
    category: 'Games', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/games-subway-surfers.png', 
    url: 'https://subwaysurfers.com' 
  },
  { 
    name: 'Crossy Road', 
    category: 'Games', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/games-crossy-road.png', 
    url: 'https://crossyroad.com/' 
  },
  { 
    name: 'Super Chef', 
    category: 'Games', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/games-super-chef.png', 
    url: 'https://www.superchef.com' 
  },
  { 
    name: 'Angry Birds', 
    category: 'Games', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/games-angry-birds.png', 
    url: 'https://www.angrybirds.com/' 
  },
  { 
    name: 'Hill Climb 2', 
    category: 'Games', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/games-hill-climb-2.png', 
    url: 'https://www.fingersoft.com/game/hill-climb-racing-2/' 
  },
  { 
    name: 'Temple Run', 
    category: 'Games', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/games-temple-run.png', 
    url: 'https://www.imangistudios.com/' 
  },
  { 
    name: 'Dr. Driving', 
    category: 'Games', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/games-dr-driving.png', 
    url: 'https://www.sudinc.com/dr-driving' 
  },
  { 
    name: 'Smurfs Bubble', 
    category: 'Games', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/games-smurfs-bubble.png', 
    url: 'https://www.smurfs.com/games/' 
  },

  // Education Apps
  { 
    name: 'Grade Learning', 
    category: 'Education', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/education-grade-learning.png', 
    url: 'https://www.gradelearning.ca/' 
  },
  { 
    name: 'My Talking Tom', 
    category: 'Education', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/education-my-talking-tom.png', 
    url: 'https://outfit7.com/apps/my-talking-tom/' 
  },
  // Food Apps
  { 
    name: 'Zomato', 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-zomato.png', 
    url: 'https://www.zomato.com' 
  },
  { 
    name: 'Swiggy', 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-swiggy.png', 
    url: 'https://www.swiggy.com' 
  },
  { 
    name: "Domino's Pizza", 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dominos.png', 
    url: 'https://www.dominos.com' 
  },
  { 
    name: 'All in One', 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-all-in-one.png', 
    url: 'https://www.allinone.com' 
  },
  { 
    name: 'Saucey', 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-saucey.png', 
    url: 'https://www.saucey.com' 
  },
  { 
    name: 'Waitr', 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-waitr.png', 
    url: 'https://www.waitrapp.com' 
  },
  { 
    name: 'Grubhub', 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-grubhub.png', 
    url: 'https://www.grubhub.com' 
  },
  { 
    name: 'Mercato', 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-mercato.png', 
    url: 'https://www.mercato.com' 
  },
  { 
    name: 'DOT', 
    category: 'Food', 
    image: 'https://assets.ccbp.in/frontend/react-js/app-store/food-dot.png', 
    url: 'https://www.dot.com' 
  },
  // Add more apps as needed
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('Social');

  // Filter the apps based on search query and active tab
  const filteredApps = appsData.filter(
    (app) =>
      app.category === activeTab &&
      app.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1 className="heading">App Store</h1>
      <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      <Tabs activeTab={activeTab} onTabChange={setActiveTab} />
      <AppList apps={filteredApps} />
    </div>
  );
}

export default App;

