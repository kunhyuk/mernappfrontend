import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Welcome from './components/Welcome';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <React.Fragment>
   <header>
    <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/user" element={<Welcome/>} />

      </Routes>
    </main>
    </React.Fragment>
  );
}

export default App;
