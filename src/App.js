import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './pages/Header'
import Bands from './pages/bands/Bands'
import Footer from './pages/Footer'

import Create from './pages/bands/Create'
import Edit from './pages/bands/Edit'
import Show from './pages/bands/Show'

export default function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <nav>
          <ul>
            <li style={{marginBottom: '10px', listStyleType: 'none' }}>
              <Link to="/" style={{textDecoration: 'none'}}>All bands</Link>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <Link to="/bands/create" style={{textDecoration: 'none'}}>Create new band</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Bands}/>
          <Route path="/bands/create" component={Create}/>
          <Route path="/bands/:id/edit" component={Edit}/>
          <Route path="/bands/:id/show" component={Show}/>
        </Switch>
        
      </div>
      <Footer></Footer>
    </Router>
  );
}
