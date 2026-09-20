import React from 'react';
import logo from './logo.svg';
import './App.css';

import WaDateInput from "@awesome.me/webawesome-pro/dist/react/date-input/index.js"

function App() {
  const foobar = new Date()
  return (
    <div className="App">
      <WaDateInput value={new Date()} />
    </div>
  );
}

export default App;
