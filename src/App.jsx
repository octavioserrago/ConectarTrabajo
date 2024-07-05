import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import CustomerDashboard from './pages/CustomerDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={< CustomerDashboard />} />
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
