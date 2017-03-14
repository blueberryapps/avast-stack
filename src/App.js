import React from 'react';
import logo from '../assets/logo-avast.png';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Home</h1>
    <img alt="Avast Logo" src={logo} style={{ width: '100px' }} />
  </div>
);

const About = () => (
  <div>
    <h1>About</h1>
    <Link to="/">Go to Home</Link>
  </div>
);

const App = () => (
  <Router>
    <div>
      <h1>Avast Stack</h1>
      <Link to="/about">Go to About</Link>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </div>
  </Router>
);

export default App;
