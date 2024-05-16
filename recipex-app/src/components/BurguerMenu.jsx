import { FaBars } from "react-icons/fa6"; 
import { FaTimes } from "react-icons/fa";

import React, { useState } from 'react';
import './BurguerMenu.scss'; 

const BurguerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
    return (
      <div className="menu-container">
        <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <FaTimes className="close-icon" onClick={toggleMenu}/>
          <ul>
            <li>Receitas</li>
            <li>Reviews</li>
            <li>cadastrar</li>
          </ul>
        </div>
        <FaBars className="burguer-menu" onClick={toggleMenu}/>
      </div>
    );
  };

export default BurguerMenu;
