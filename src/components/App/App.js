import { useState, useEffect } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';
import Search from '../Search';
import Favorites from '../Favorites/Favorites';
function App () {



  
  return (
    <div>
      <Router>
      <h1>Giphy Search</h1>
      <Route exact path="/">
      <Search />
      </Route>
      <Route exact path="/favorites">
      <Favorites />
      </Route>
      </Router>
    </div>
  );

}

export default App


 