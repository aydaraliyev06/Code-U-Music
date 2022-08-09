import React from 'react';
import { NavLink } from 'react-router-dom';
import icon1 from '../image/icon-music.png';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <NavLink className='nav-icon-text' to='/'>
                <img width={40} src={icon1} alt="icon" />
                Code-U-Music
            </NavLink>
            <div className='nav-text'>
                <NavLink className="link-nav" to='/'>
                    <img className='img-text' src="https://cdn-user-icons.flaticon.com/76594/76594925/1660063611800.svg?token=exp=1660064513~hmac=26c1254115a99d2f21c67233bcb8842d" alt="" />
                    Profile
                </NavLink>
                <NavLink className='link-nav' to='/likedsongs'>
                    <img className='img-text' src="https://cdn-user-icons.flaticon.com/76594/76594925/1660062366843.svg?token=exp=1660063269~hmac=ce85d262257abf146a2b504b8dbd14fa" alt="" />
                    Liked Songs
                </NavLink>
                <NavLink className="link-nav" to='/'>
                    <img className='img-text' src="https://cdn-user-icons.flaticon.com/76594/76594925/1660063800604.svg?token=exp=1660064702~hmac=9e690b9ebc38f597a9573cd39e42b84f" alt="" />
                    Language
                </NavLink>
                <NavLink className="link-nav" to='/'>
                    <img className='img-text' src="https://cdn-user-icons.flaticon.com/76594/76594925/1660064162308.svg?token=exp=1660065064~hmac=c208e360bb76d9a662dd9d9921f355b6" alt="" />
                    Contact us
                </NavLink>
                <NavLink className="link-nav" to='/'>
                    <img className='img-text' src="https://cdn-user-icons.flaticon.com/76594/76594925/1660064228498.svg?token=exp=1660065130~hmac=8f85b9a807d9a4f2e74c0b99161f0ad2" alt="" />
                    Settings
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;