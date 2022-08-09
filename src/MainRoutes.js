import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authorization from './Components/Auth/Authorization';
import Home from './Components/Home/Home';
import LikedSongs from './Components/LikedSongs/LikedSongs';
import Profile from './Components/Profile/Profile';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/likedsongs' element={<LikedSongs/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/auth' element={<Authorization/>} />
        </Routes>
    );
};

export default MainRoutes;