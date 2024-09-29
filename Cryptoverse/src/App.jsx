import React from 'react';
import Header from './components/Common/Header/Header';
import Footer from './components/Common/Footer/Footer';
import Maincomp from './components/LandingPage/Maincomp/Maincomp';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinPage from './pages/CoinPage';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path ="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
