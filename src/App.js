// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './components/Login'; // Assuming you have a Login component
import { Hero } from './components/Hero';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen w-full">
        <Sidebar />
        <div className="w-full">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/hero" element={<Hero />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
