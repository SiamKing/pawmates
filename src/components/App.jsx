import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

import Home from './Home'
import NavigationBar from './Navbar'
import SearchResultsContainer from './containers/SearchResultsContainer';
import About from './About'

const Wildcard = () => {
  return <Redirect to="/" />
}

const App = ({ history, context }) => {
  return (
        <>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pawmates" component={SearchResultsContainer} />
            <Route exact path="/about" component={About} />
            <Route exact path="/*" component={Wildcard} />
          </Switch>
        </>
  );
}

export default App;
