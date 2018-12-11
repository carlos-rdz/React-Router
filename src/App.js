import React, { Component } from 'react';
import './App.css';


import Navbar from './Navbar';

import Onemovie from './Onemovie';

import Action from './Action';
import Horror from './Horror';
import Sci_Fi from './Sci-Fi';
import Drama from './Drama';

import {
  BrowserRouter as Router, 
  Route,
  // Link
  } from 'react-router-dom';



class App extends Component {

  constructor(props){
    super(props)
    this.state = {

      genres : {
      'Horror': {'Saw':"In it, Elwes and Whannell portray two men who awake to find themselves chained in a large dilapidated bathroom, with one being ordered to kill the other or his family will die",'IT':"Clown movie"},
      'Sci_Fi': {'The Matrix':"Morpheus awakens Neo to the real world, a ravaged wasteland where most of humanity have been captured by a race of machines ", 'Alien':"Alien is a 1979 science fiction horror film directed by Ridley Scott and written by Dan O'Bannon."},
      'Action': ['Die Hard', 'The Dark Knight'],
      'Drama': ['The Godfather', 'Forest Gump'],
    }}

  }

  render() {
    return (

      <Router>
      <div className="App">
        
        <Navbar/>

        <Route path="/Horror" render={(props) => {
              return <Horror genres={Object.keys(this.state.genres.Horror)} {...props}/> }}/>
        <Route path="/Horror/:name" render={(props) => {
          return <Onemovie movies={this.state.genres.Horror} {...props}/> }}/>
        <Route path="/Sci-Fi" render={(props) => {
          return <Sci_Fi genres={Object.keys(this.state.genres.Sci_Fi)} {...props}/> }}/>
        <Route path="/Sci-Fi/:name" render={(props) => {
          return <Onemovie movies={this.state.genres.Sci_Fi} {...props}/> }}/>
        <Route path="/Action" component={Action}/>
        <Route path="/Drama" component={Drama}/>



      </div>
      </Router>
    );
  }
}

export default App;
