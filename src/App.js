import React, { Component } from 'react';
//import PostJobs from './postjobs';
import logo from './logo.svg';
import './App.css';

// import {bindActionCreators} from 'redux';
// import { connect } from 'react-redux';
// import {  } from './action/users-Action';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <button className="click-button" onClick={()=>this.PostJobs.bind(this)} >click me</button> */}
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

      </div>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   console.log(props)
//   return{
//     postjobs: state.postjobs
//   }
// }

// const mapActionsToProps = {
//     postjobs : postjobs
// }

export default (App);
