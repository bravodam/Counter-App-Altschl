// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter from './components/Counter';
import NotFound from './components/NotFound';
import ErrorBoundaryTest from './components/ErrorBoundaryTest';
import './App.css';

const App = () => {
  return (

<BrowserRouter>
      <Routes>
        
          <Route index element={<Counter />} />
          <Route path="error" element={<ErrorBoundaryTest />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
};

export default App;
