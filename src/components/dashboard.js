import React, { Component } from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import '../App.css';
import FindRides from './find_rides';
import MyRides from './my_rides';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <MuiThemeProvider>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          contentContainerClassName="tab-content"
        >
          <Tab label="Find a Ride" value="a" ><FindRides /></Tab>
          <Tab label="My Rides" value="b" ><MyRides /></Tab>
        </Tabs>
      </MuiThemeProvider>  
    );
  }
}

export default Dashboard;
