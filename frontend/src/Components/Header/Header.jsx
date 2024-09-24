import React from 'react';
import './Header.css';

import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <>
    <header className='main'>
        <nav className="container navbar w100">
            <a href="/"><span className="logo">Proxile AI</span></a>
            <a href="https://github.com/bishalsaraniah/Proxile-AI"><span className="headericon"><FaGithub /></span></a>
        </nav>
    </header>
    </>
  )
}

export default Header