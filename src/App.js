// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Signup from './auth/Signup';
import Login from './auth/Login';
import Auth from './auth/Auth';
import BirdNest from './components/BirdNest';
import Nav from './components/Nav';



function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'));
    }
  }, [])
  
  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken);
    setSessionToken(newToken);
    console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
  }

  const protectedViews = () => {
    return ( sessionToken === localStorage.getItem('token') ? <BirdNest token={sessionToken}/>
    : <Auth updateToken={updateToken}/>)
  }

  return (
    <div>
      <Nav clickLogout={clearToken}/>
      {protectedViews()}
    </div>
  );
}

  // return (
  //   <div className="App">
  //     <Auth/>
  //   </div>
  // );


export default App;
