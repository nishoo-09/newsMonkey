import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
export default class App extends Component {
  state = {
    progress: 10
  };
  setProgress = (progress) => {
    this.setState({progress: progress});
  }
  render() {
    return (
      <Router>
        <div>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={this.state.progress}
        />
          <Navbar></Navbar>
          
          <Switch>
            <Route exact path="/">
              <News setProgress={this.setProgress}/>
            </Route>
            <Route exact path="/business">
              <News setProgress={this.setProgress} pageSize={5} category="business" key="business" />
            </Route>
            <Route exact path="/technology">
              <News setProgress={this.setProgress} pageSize={5} category="technology" key="technology"/>
            </Route>
            <Route exact path="/sports">
              <News setProgress={this.setProgress} pageSize={5} category="sports" key="sports"/>
            </Route>
            <Route exact path="/science">
              <News  setProgress={this.setProgress} pageSize={5} category="science" key="science"/>
            </Route>
            <Route exact path="/health">
              <News  setProgress={this.setProgress} pageSize={5} category="health" key="health"/>
            </Route>
            <Route exact path="/general">
              <News  setProgress={this.setProgress} pageSize={5} category="general" key="general"/>
            </Route>
            <Route exact path="/entertainment">
              <News  setProgress={this.setProgress} pageSize={5} category="entertainment" key="entertainment"/>
            </Route>
          </Switch>
          
        </div>
      </Router>
    )
  }
}

