import React from 'react';
import CandiesList from './CandiesList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <AppBar position="fixed">
            <Toolbar>
              <Button color="inherit">
                <Link className="navlink" to="/">
                  Home
                </Link>
              </Button>
              <Button color="inherit">
                <Link className="navlink" to="/candies">
                  Candies
                </Link>
              </Button>
            </Toolbar>
          </AppBar>
        </nav>

        <main>
          <h1>Welcome to the Goodie Bag!</h1>
          <p>What a nice home page for your goodies!</p>
        </main>

        <Switch>
          <Route exact path="/" />
          <Route exact path="/candies" component={CandiesList} />
        </Switch>
      </div>
    </Router>
  );
};

export default Root;
