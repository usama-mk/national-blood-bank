import './App.css';
import React, { useContext } from 'react';
import Author from './pages/Author';
import Blood from './pages/Blood';
import Contact from './pages/Contact';
import Donation from './pages/Donation';
import Home from './pages/Home';
import Patients from './pages/Patients';
import {Route, Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom'
import Login from './pages/Login/Login';
import { firebaseApp } from './firebase';
import { LoginContext } from './pages/Login/LoginContext';

function App() {
  const [user, setUser] = useContext(LoginContext);
  return (
    <div className="App">
   
    <BrowserRouter>
     <Switch>
     {
       user ?
       <div>
         <Route exact path='/home' render={()=><Home/>}  />
     <Route exact path='/author' render={()=><Author/>}  />
     <Route exact path='/patients' render={()=><Patients/>}  />
     <Route exact path='/donation' render={()=><Donation/>}  />
     <Route exact path='/blood' render={()=><Blood/>}  />
     <Route exact path='/contact' render={()=><Contact/>}  />
     <Route exact path='/' render={()=><Home/>}  />
       </div>
       :
       <div>
        <Route exact path='/' render={()=> <Login/> }  />
       </div>
     }
       </Switch>
   </BrowserRouter>
     
     

    </div>
  );
}

export default App;
