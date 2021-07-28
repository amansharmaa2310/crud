import React from 'react'
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './layout/Navbar';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
import NotFound from './NotFound';
import View from './user/View';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

 function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/user/add" component={AddUser}/>
          <Route exact path="/user/edit/:id" component={EditUser}/>
          <Route exact path="/user/:id" component={View}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
