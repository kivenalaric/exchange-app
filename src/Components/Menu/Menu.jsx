/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

import './Menu.css';
import { useNavigate } from 'react-router-dom';

export default function Menu() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const navigate = useNavigate();
  const toXchange = () => {
    navigate('/exchange');
  };

  const toHome = () => {
    navigate('/');
  };

  const toProfile = () => {
    navigate('/profile');
  };

  return (
    <nav className="menu__main">
      <button onClick={handleToggle} type="button">
        {navbarOpen ? (
          <MdClose
            style={{ color: '#7b7b7b', width: '30px', height: '30px' }}
          />
        ) : (
          <FiMenu style={{ color: '#fff', width: '30px', height: '30px' }} />
        )}
      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        <li
          className="menu__li"
          onClick={() => {
            toHome();
            closeMenu();
          }}
        >
          Home
        </li>
        <li
          className="menu__li"
          onClick={() => {
            toProfile();
            closeMenu();
          }}
        >
          Profile
        </li>
        <li
          className="menu__li"
          onClick={() => {
            toXchange();
            closeMenu();
          }}
        >
          Xchange
        </li>
      </ul>
    </nav>
  );
}
