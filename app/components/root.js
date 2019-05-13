import React from 'react';
import CandiesList from './CandiesList';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Root = () => {
  return (
    <Router>
      <div>
        <nav>
          <Button type="button" color="inherit">
            <Link to="/" className="navlink">
              Home
            </Link>
          </Button>
          <Button type="button" color="inherit">
            <Link to="/candies" className="navlink">
              Candies
            </Link>
          </Button>
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
