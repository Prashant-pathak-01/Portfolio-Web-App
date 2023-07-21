import React, { useState } from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

function Header() {
  function toggleDarkMode() {
    const root = document.documentElement;
    root.classList.toggle('dark');
  }

  const [showMenu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu((prevState) => !prevState);
  }

  return (
    <div className='header'>
      <Link to="/"><div className='logo'></div></Link>

      <div className={`menu ${showMenu ? "show" : "hide"}`} id="Menu">
        <button onClick={toggleMenu}><CloseIcon fontSize='large' className='MenuButtonIcon'></CloseIcon></button>
        <Link to='/' className='menu-h1' onClick={toggleMenu}>About Me</Link>
        <Link to='/Projects' className='menu-h1' onClick={toggleMenu}>My Projects</Link>
        <Link to='/contactMe' className='menu-h1' onClick={toggleMenu}>Contact Me</Link>
        <Link to='/Platforms' className='menu-h1' onClick={toggleMenu}>Platforms</Link>
      </div>
      <div className='themeBtn'>
        <button className="ThemeButton" onClick={toggleDarkMode}></button>
      </div>
      <button className="MenuButton" onClick={toggleMenu}><MenuIcon fontSize='large' className='MenuButtonIcon'></MenuIcon></button>
    </div>
  );
}

export default Header;
