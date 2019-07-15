import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = props => (
  <div id="home">
    <h2>👋Want to submit an issue to bookface/actre?</h2>
    <p>If you have a bug or an idea, read the contributing guidelines before opening an issue.</p>
    <p>If you're ready to tackle some open issues, we've collected some good first issues for you .</p>
    <Link to="/issues"><button>Go to Issues</button></Link>
  </div>
)

export default Home;