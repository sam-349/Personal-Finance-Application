import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/HomePage/Home';
import Budgets from './components/pages/Budgets';
import Profile from './components/pages/Profile';
import Stocks from './components/pages/Stocks';
import Gold from './components/pages/Gold';
import LandingPage from './components/pages/LandingPage/LandingPage';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
     
      <div className="p-4">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/gold" element={<Gold />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
