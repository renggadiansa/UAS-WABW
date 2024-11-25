import React from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dasboard';
import './style.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            {/* Redirect root path to /admin/dashboard */}
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

