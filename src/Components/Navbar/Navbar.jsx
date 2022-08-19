import React from 'react';
import { NavLink } from 'react-router-dom';
import icon1 from '../image/icon-music.png';
import './Navbar.css';
import heart from './Icons/heart.svg';
import settings from './Icons/настройки.svg';
import message from './Icons/message.svg';
import world from './Icons/world.svg';
import profile from './Icons/profile.svg';

const Navbar = () => {
    return (
        <div className='nav'>
            <NavLink className='nav-icon-text' to='/musiclist'>
                <img width={40} src={icon1} alt="icon" />
                Code-U-Music
            </NavLink>
            <div className='nav-text'>
                <NavLink className="link-nav" to='/'>
                    <img className='img-text' src={profile} alt="profile" />
                    Profile
                </NavLink>
                <NavLink className='link-nav' to='/likedsongs'>
                    <img className='img-text' src={heart} alt="like songs" />
                    Liked Songs
                </NavLink>
                <NavLink className="link-nav" to='/add'>
                    <img className='img-text' src={world} alt="language" />
                    Add Music
                </NavLink>
                <NavLink className="link-nav" to='/contactUs'>
                    <img className='img-text' src={message} alt="message" />
                    Contact us
                </NavLink>
                <NavLink className="link-nav" to='/settings'>
                    <img className='img-text' src={settings} alt="settings" />
                    Settings
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;