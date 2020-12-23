import './App.css';
import React, { useEffect, useState } from 'react';
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

function App() {
  const [user, setUser] = useState("");

    useEffect(()=>{
        authListener(); 
    },[]);

    const authListener = ()=>{
      firebaseApp.auth().onAuthStateChanged((user)=>{
          if(user){
              
              setUser(user);
          }
          else{
              setUser("");
          }
      })
  }
  return (
    <div className="App">
    
      <BrowserRouter>
     <Switch>
     {
       user ?
       <div>
         <Route exact path='/' render={()=><Home/>}  />
     <Route exact path='/author' render={()=><Author/>}  />
     <Route exact path='/patients' render={()=><Patients/>}  />
     <Route exact path='/donation' render={()=><Donation/>}  />
     <Route exact path='/blood' render={()=><Blood/>}  />
     <Route exact path='/contact' render={()=><Contact/>}  />
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
