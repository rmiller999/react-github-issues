import React from 'react';
import './App.css';
import Home from './Home';
import Issues from './Issues';
import Show from './Show';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import axios from 'axios';

class App extends React.Component{
  sate = {
    issues: []
  }

  componentDidMount() {
    //e.preventDefault();
    axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=100')
    .then(result => {
      let issues = result.data;
      this.setState({
        issues
      })
    })
  }

  render() {
    return (
      <Router>
        <nav>
          <Link to='/'>Home</Link>
        </nav>
        <Route exact path='/' component={Home} />
        <Route exact path='/issues'
          render={() => <Issues issues={this.state.issues}/>} />
        <Route exact path='/issues/:id'
          render={(props) => <Show issues={this.state.issues} {...props}/>} />
      </Router>
    );
  }
}


export default App;
