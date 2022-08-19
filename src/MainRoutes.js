import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Authorization from './Components/Auth/Authorization';
import ContactUs from './Components/ContactUS/ContactUs';
import Error from './Components/Error/Error';
import FaceProf from './Components/FaceProf/FaceProf';
import Home from './Components/Home/Home';
import LikedSongs from './Components/LikedSongs/LikedSongs';
import MusicAdd from './Components/MusicAdd/MusicAdd';
import AudioPlayer from './Components/MusicCard/AudioPlayer/AudioPlayer';
import MusicCrad from './Components/MusicCard/MusicCrad';
import MusicList from './Components/MusicList/MusicList';
import Profile from './Components/Profile/Profile';
import Settings from './Components/Settings/Settings';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/settings' element={<Settings/>} />
            <Route path='/likedsongs' element={<LikedSongs/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='/auth' element={<Authorization/>} />
            <Route path='/add' element={<MusicAdd/>} />
            <Route path='/face' element={<FaceProf/>} />
            <Route path='/musiclist' element={<MusicList/>} />
            <Route path='*' element={<Error/>} />
            <Route path='/contactUs' element={<ContactUs/>} />
            <Route path='/onemusic/:id' element={<MusicCrad/>} />
            <Route path='/onemusic/:id/edit/:id' element={<AudioPlayer/>}/>
        </Routes>
    );
};

export default MainRoutes;