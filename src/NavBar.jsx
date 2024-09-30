import React, { useState,useEffect } from 'react';
import './NavBar.css';
import logo from './assets/logo.png';
import Login from './Login';
import SignUp from './SignUp';

export default function NavBar() {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  
  const toggleIcon = () => {
    setIsResponsive(!isResponsive);
  };
  const toggleLogin = () => {
    setIsLoginOpen(!isLoginOpen);
    setIsSignUpOpen(false);  
  };

  const toggleSignUp = () => {
    setIsSignUpOpen(!isSignUpOpen);
    setIsLoginOpen(false); 
  };
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setBackgroundColor(" rgba( 255, 255, 255, 0.3 )");
      
    } else {
      setBackgroundColor("transparent"); 
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  

  return (
    <div className="NavBar" style={{ backgroundColor, transition: 'background-color 0.5s ease' }}>
      <div className="logo">
        <img src={logo} alt='Logo' />
      </div>
    
      <ul className={isResponsive ? 'navlink mobile' : 'navlink'}>
        <li><a href="#home">Home</a></li>
        <li><a href="#explore">Explore</a></li>
        <li><a href="#About">About US</a></li>
        <li><a href="#Contact">Contact Us</a></li>
      </ul>

      
      <div className="resp-buttons">
        <Login onClick={toggleLogin}/>
        <SignUp onClick={toggleSignUp}/>
      </div>

      <button className="menu-icon" onClick={toggleIcon}>
        {isResponsive ? <>&#10005;</> : <>&#9776;</>}
      </button>
      {isLoginOpen && <Login />}
      {isSignUpOpen && <SignUp />}
    </div>
  );
}
