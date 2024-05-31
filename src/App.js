// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Login from './components/Login'; // Assuming you have a Login component
import { Hero } from './pages/Hero';
// import Courses from './components/Courses';
import Form from './components/Form';
import {BecomeATutor} from './pages/BecomeATutor';
import { Thirdpage } from './pages/Thirdpage';
export default function App() {
  return (
    <Router>

      <div className="flex w-full">

        {/* <Sidebar /> */}
        <div className="w-full">
          {/* <Header /> */}
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Hero />} />
            <Route path="/contact" element={<Form />} />
            <Route path="/becomeATutor" element={<BecomeATutor />} />
            <Route path="/thirdpage" element={<Thirdpage />} />

            {/* <Route path="/courses" element={<Courses />} /> */}

          </Routes>
        </div>
      </div>
    </Router>
  );
}
