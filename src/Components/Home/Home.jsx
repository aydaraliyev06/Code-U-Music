import React from 'react';
import './Home.css';
import img1 from '../image/goril.png';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <img className='img-home' width={515} src={img1} alt="" />
            <div className="home-start">
                <h1 className='home-title'>Welcome</h1>
                <Link to='/auth'>
                    <button className='home-btn'>Get Started</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;