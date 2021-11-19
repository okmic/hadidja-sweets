import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import { BiHome } from "react-icons/bi";
import { RiGalleryLine } from "react-icons/ri";
import { MdCall } from "react-icons/md";
import { GiBasket } from "react-icons/gi";




function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <NavLink to="/Home" activeClassName="activeLink">
            <div className="links__container_header" >
              <div className="links__icon_header">
                <BiHome />
              </div>
              <div className="links__description_header" >
                <span>Главная</span>
              </div>
            </div>
          </NavLink>
          
          <NavLink to="/Gallery" activeClassName="activeLink">
            <div className="links__container_header" >
              <div className="links__icon_header">
                <RiGalleryLine />
              </div>
              <div className="links__description_header" >
                <span>Галерея</span>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Contacts" activeClassName="activeLink">
            <div className="links__container_header" >
              <div className="links__icon_header">
                <MdCall />
              </div>
              <div className="links__description_header" >
                <span>Контакты</span>
              </div>
            </div>
          </NavLink>

          <NavLink to="/Basket" activeClassName="activeLink">
            <div className="links__container_header" >
              <div className="links__icon_header">
              <GiBasket />
              </div>
              <div className="links__description_header" >
                <span>Корзина</span>
              </div>
            </div>
          </NavLink>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;