import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Button from './components/Button';
import LoginForm from './LoginForm';
import logo from '../assets/logo-avast.png';

const Home = () => (
  <div>
    <h1>Home</h1>
    <Button>Super button</Button>
    <img alt="Avast Logo" src={logo} style={{ width: '100px' }} />
  </div>
);

const About = props => (
  <div>
    <h1>About</h1>
    {JSON.stringify(props)}
    <Link to="/">Go to Home</Link>
  </div>
);

const App = () => (
  <Router>
    <div>
      <h1>Avast Stack</h1>
      <Link to="/about/ssss">Go to About</Link>
      <Link to="/login">Log in</Link>
      <Route exact path="/" component={Home} />
      <Route exact path="/about/:super" component={About} />
      <Route exact path="/login" component={LoginForm} />
    </div>
  </Router>
);

export default App;
