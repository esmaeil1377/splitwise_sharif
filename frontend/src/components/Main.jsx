import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
import LandingPage from './LandingPage';
import Profile from './Profile';
import Home from './Home';
import NewGroup from './NewGroup';
import Groups from './Groups';
import GroupDetails from './GroupDetails';
import RecentActivity from './RecentActivity';

class Main extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/newgroup" component={NewGroup} />
        <Route path="/groups" component={Groups} />
        <Route path="/groupdetails" component={GroupDetails} />
        <Route path="/recentactivity" component={RecentActivity} />
      </div>
    );
  }
}

export default Main;
