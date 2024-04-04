import React, { useEffect, useState } from 'react';
import './header.css';
import logo from '../../assets/angusT.PNG';
import { links } from '../../Data';
import {Link} from 'react-scroll';
import {FaStream} from "react-icons/fa";


const Header = () => {
  const [scrollHeader, setScrollHeader] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeHeader = ()=>{
    if(window.scrollY >= 80){
      setScrollHeader(true);
    }else{
      setScrollHeader(false);
  }
}

useEffect(()=>{
  window.addEventListener('scroll', changeHeader)
}, [])
  return (
    <div>
      <header className={`${scrollHeader ? 'scroll-header' : ''} header`} >
        <nav className="nav container">
          <a href="/" className="nav__logo">
            {/* <img src={logo} alt="" className="nav__logo-img" /> */}
            <h1>BAKERY CAFE</h1>
            </a>


            <div className={`${showMenu ? 'show-menu' : ''} nav__menu`}>
              <ul className="nav__list">
                {links.map(({name,path},index)=>{
                    return (
                      <li className='nav__item' key={index}>
                          <Link to={path} spy={true} smooth={true} offset={50} duration={500} className='nav__link' onClick={()=>setShowMenu(!showMenu)}>{name}</Link>
                      </li>
                    )
                })}
              </ul>
            </div>

            <div className="nav__toggle" onClick={()=>setShowMenu(!showMenu)}>
              <FaStream />
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
