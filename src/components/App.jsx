import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home'
import Navbar from './Navbar'
import SearchResultsContainer from './containers/SearchResultsContainer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <SearchResultsContainer />
    </div>
  );
}

export default App;
