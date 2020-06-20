import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import About from './Components/About'
import Post from './Components/post'

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Nav />
<Switch>    
      <Route path='/Home' component={Home} />
      <Route path='/Contact' component={Contact} />
      <Route path='/About' component={About} />
      <Route path="/:post_id" component={Post} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
