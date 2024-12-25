import { useEffect, useState } from 'react';
import '../css/navbar.css'
import logo from '../images/msa-logo.png'
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 600);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }

  }, [])

  function toggleClick() {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
      <div>
        <div id="navbar" className="navbar">
          <div className="logo-desc">
            <img src={logo} className="logo" alt="MSA-logo" /><Link to='/'></Link>
            <div className="">
              <h2 className='ttu-msa'>TTU MSA</h2>
              <h2 className='ttu-basmalah'>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
            </div>
          </div>
          <div className="hyperlinks">
          <ul id="menuList" className={`menuList-${menuOpen ? 'open' : 'closed'}`}>
            <li className="navbar-text"><Link to='/'>Home</Link></li>
            <li className="navbar-text"><Link to='/about'>ABOUT</Link></li>
            <li className="navbar-text"><Link to='/events'>EVENTS</Link></li>
            <li className="navbar-text"><Link to='/faqs'>FAQS</Link></li>
            <li className="navbar-text"><Link to='/newsletter'>NEWSLETTER</Link></li>
            <li className="navbar-text"><Link to='/donations'>DONATE</Link></li>
          </ul>
          {isMobile && (
           <div id="menu-icon" onClick={toggleClick} className='menu-icon'>
            {/* <i className="fa-solid fa-bars"></i> */}
            <div className="mobile-hyperlink"></div>
            <div className="mobile-hyperlink"></div>
            <div className="mobile-hyperlink"></div>
          </div> 
          )} 
          </div>
        </div>
      </div>
    );
}

export default Navbar;