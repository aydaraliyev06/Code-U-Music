import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authorization from './Components/Auth/Authorization';
import FaceProf from './Components/FaceProf/FaceProf';
import Home from './Components/Home/Home';
import LikedSongs from './Components/LikedSongs/LikedSongs';
import MusicAdd from './Components/MusicAdd/MusicAdd';
import MusicList from './Components/MusicList/MusicList';
import Profile from './Components/Profile/Profile';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/likedsongs' element={<LikedSongs/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/auth' element={<Authorization/>} />
            <Route path='/add' element={<MusicAdd/>} />
            <Route path='/face' element={<FaceProf/>} />
            <Route path='/musiclist' element={<MusicList/>} />
        </Routes>
    );
};

export default MainRoutes;