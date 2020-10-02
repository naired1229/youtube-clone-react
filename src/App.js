import React from 'react';
import Header from './Header';
import SearchPage from './SearchPage';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app_page">
              <Sidebar/>
              <SearchPage/>
            </div>
          </Route>
          <Route path="/"> 
            <div className="app_page">
              <Sidebar/>
              <RecommendedVideos/>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
