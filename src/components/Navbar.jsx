import React from 'react'
import '../css/Navbar.css'
import { CgMenuRight, CgClose } from "react-icons/cg";
import { useState} from 'react';

const Navbar = () => {
  const [mobile,setmobile] = useState(false);
  return (
    <header>
      <nav>
        <p className='brand'>Gravisolution</p>
        <ul className={mobile ? "navListActive" : "navList"}>
          <li>Home</li>
          <li>Vision & Mission</li>
          <li>About</li>
          <li>Products</li>
          <li>Certifications</li>
          
        </ul>
      </nav>
      <div className="menuItem" onClick={() => setmobile(!mobile)}>
        {mobile ? (
          <CgClose className="close" />
        ) : (
          <CgMenuRight className="open" />
        )}
      </div>
    </header>
  );
}

export default Navbar
