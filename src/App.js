import './App.css';

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  let PageSize = 7;
  let apiKey = "dc90e7066eaa4b1fa627bd1e130b663f";
  // apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  
  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" PageSize={PageSize} country="us" category="general" />} />
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" PageSize={PageSize} country="us" category="business" />} />
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" PageSize={PageSize} country="us" category="entertainment" />} />
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" PageSize={PageSize} country="us" category="sports" />} />
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" PageSize={PageSize} country="us" category="health" />} />
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" PageSize={PageSize} country="us" category="technology" />} />
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" PageSize={PageSize} country="us" category="science" />} />
          <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" PageSize={PageSize} country="us" category="general" />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;