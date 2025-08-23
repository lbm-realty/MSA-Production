// import { useEffect, useState } from 'react';
// import '../css/navbar.css'
// import logo from '../images/msa-logo.png'
// import { Link, useLocation } from 'react-router-dom';

// function Navbar() {
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     function handleResize() {
//       setIsMobile(window.innerWidth < 600);
//     }

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     }

//   }, [])

//   function toggleClick() {
//     setMenuOpen(!menuOpen);
//   }

//   useEffect(() => {
//     setMenuOpen(false);
//   }, [location]);

//   return (
//       <div>
//         <div id="navbar" className="navbar">
//           <div className="logo-desc">
//             <img src={logo} className="logo" alt="MSA-logo" /><Link to='/'></Link>
//             <div className="">
//               <h2 className='ttu-msa'>TTU MSA</h2>
//               <h2 className='ttu-basmalah'>Cultivate Community, Ignite iman</h2>
//             </div>
//           </div>
//           <div className="hyperlinks">
//           <ul id="menuList" className={`menuList-${menuOpen ? 'open' : 'closed'}`}>
//             <li className="navbar-text"><Link to='/'>Home</Link></li>
//             <li className="navbar-text"><Link to='/about'>ABOUT</Link></li>
//             <li className="navbar-text"><Link to='/events'>EVENTS</Link></li>
//             <li className="navbar-text"><Link to='/faqs'>FAQS</Link></li>
//             <li className="navbar-text"><Link to='/newsletter'>NEWSLETTER</Link></li>
//             <li className="navbar-text"><Link to='/donations'>DONATE</Link></li>
//             {/* <li className="navbar-text"><Link to='/shop'>SHOP</Link></li> */}
//           </ul>
//           {isMobile && (
//            <div id="menu-icon" onClick={toggleClick} className='menu-icon'>
//             {/* <i className="fa-solid fa-bars"></i> */}
//             <div className="mobile-hyperlink"></div>
//             <div className="mobile-hyperlink"></div>
//             <div className="mobile-hyperlink"></div>
//           </div> 
//           )} 
//           </div>
//         </div>
//       </div>
//     );
// }

// export default Navbar;



import logo from '../images/msa-logo.png'
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Newsletter', href: '/newsletter' },
    { name: 'Faqs', href: '/faqs' },
    { name: 'Events', href: '/events' },
    { name: 'Donate', href: '/donations' },
    { name: 'Shop', href: '/shop' }
  ];

  return (
    <nav className="fixed bg-black py-4 w-full z-50 shadow-lg">
      <div style={{"background": "rgb(99, 10, 0, 0.95)"}} className="max-w-7xl mx-auto px-4 py-4 sm:px-6 sm:py-1 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="TTU MSA Logo" 
              className="h-20 w-20 bg-gray-100 rounded-full object-contain"
            />
            <div className="text-white flex flex-col justify-center">
              <p className="text-xl">TTU MSA</p>
              <p className="text-sm text-gray-300 italic">Cultivate community, ignite iman</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                href={link.href}
                onClick={ () => { window.location.href = link.href } }
                key={link.name}
                className="cursor-pointer text-white text-lg hover:text-red-300 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-red-500 hover:bg-transparent transition-colors m-0"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
                
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden text-center flex justify-center backdrop-blur-sm">
            <div className="mt-2 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block border-b px-16 py-3 text-white hover:text-red-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;