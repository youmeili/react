import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/about">关于</Link></li>
                </ul>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                </Switch>
            </div>
        </Router>
    );
  }
}

export default App;
