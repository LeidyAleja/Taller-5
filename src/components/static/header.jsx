import React from 'react';
import '../../assets/header.css'

import { FaFacebook, FaSearch, FaBell, FaUserCircle, FaHome, FaCommentDots } from 'react-icons/fa'; // Iconos

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <FaFacebook size={32} color="#1877f2" />
      </div>
    </header>
  );
};

export default Header;
