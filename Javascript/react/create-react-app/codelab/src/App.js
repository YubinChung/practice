import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Routes/Home'
import About from './Routes/About'
import Posts from './Routes/Posts'
import Login from './Routes/Login'
import Mypage from './Routes/Mypage'
import Search from './Routes/Search'
import NotFound from './Routes/NotFound'

import Contact from './components/Contact'
import TopMenus from './components/TopMenus'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <TopMenus />
          <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about/:username" component={About} />
          <Route path="/posts" component={Posts} />
          <Route path="/login" component={Login} />
          <Route path="/me" component={Mypage} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
