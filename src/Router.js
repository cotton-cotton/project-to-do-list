import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Main from './pages/Main/Main';
import CreatingList from './pages/CreatingList/CreatingList';
import CheckingList from './pages/CheckingList/CheckingList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/list/creating" element={<CreatingList />} />
        <Route path="/list/checking" element={<CheckingList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
