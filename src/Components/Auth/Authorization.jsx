import React from 'react';
import './Authorization.css';
import img2 from '../image/goril3.png';
import { authContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Authorization = () => {
    const { 
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignUp,
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError,
      } = useContext(authContext)
    
      const navigate = useNavigate()
    
      const signIn = () =>{
        handleLogin()
        navigate('/')
      }
    return (
        <div className='Auth'>
            <div className='imgs-auth'>
                <img className='img-auth' src={img2} alt="" />
            </div>
            <div className='inputs-auth'>
                {
                    hasAccount ? (
                        <h1 className='int-text'>Login to Your Account</h1>
                    ):(
                        <h1 className='int-text'>Create Your Account</h1>
                    )
                }
                <input type="text" placeholder='@email' value={email} onChange={(e)=>setEmail(e.target.value)} className="inp-auth" />
                <span style={{width:'200px'}}>{emailError}</span>
                <span style={{width:'200px'}}>{passwordError}</span>
                <input type="text" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className="inp-auth" />
                {
                    hasAccount ? (
                        <button className='btn-auth' onClick={signIn}>Sing In</button>
                    ):(
                        <button className='btn-auth' onClick={handleSignUp}>Sing Up</button>
                    )
                }

                {
                  hasAccount ? (
                    <Link to='#' onClick={()=>setHasAccount(!hasAccount)}
                      href="#" variant="body2">
                      {"Already have an account! Sign In"}
                    </Link>
                  ) : (
                    <Link to='#' onClick={()=>setHasAccount(!hasAccount)}
                      href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  )
                }
            </div>
        </div>
    );
};

export default Authorization;