import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/Dashboard.css';
import SignIn from './components/SignIn';
import Dashboard from './pages/Dashboard';
import SignInPage from './pages/SignInPage';
import Router from './components/Router';

// TODO useEffect hook to set state success if user is signed in 200

function App() {

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
