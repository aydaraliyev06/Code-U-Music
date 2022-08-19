import React from 'react';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import AuthContextProvider from './context/AuthContext';
import MusicContextProvider from './context/MusicContextProvider';
import MainRoutes from './MainRoutes';

const App = () => {
  return (
    <AuthContextProvider>
      <MusicContextProvider>
        <Navbar/>
        <div style={{paddingTop: '90px'}}>
          <MainRoutes/>
        </div>
        <Footer/>
      </MusicContextProvider>
    </AuthContextProvider>
  );
};

export default App;