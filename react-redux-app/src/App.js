import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { getQuote } from './actions/quote';

function App() {

  return (

    <div className="App">
      <Header />
    </div>
  );
}

export default App;
