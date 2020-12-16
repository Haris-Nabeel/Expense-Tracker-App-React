import React from 'react';
import './App.css';
import { ContextProvider } from './TransContext.js';
import Child from './ExpenseTracker.js'


function App() {

  return (
    <ContextProvider>
    <Child />
    </ContextProvider>
  );
}

export default App;