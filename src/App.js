import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AuthContextProvider from './context/AuthContext';
import MainRoutes from './MainRoutes';

const App = () => {
  return (
    <AuthContextProvider>
      <Navbar/>
      <MainRoutes/>
      <Footer/>
    </AuthContextProvider>
  );
};

export default App;