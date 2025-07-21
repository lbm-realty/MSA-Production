// import '../css/footer.css'
// import logo from '../images/msa-logo.png'
// import whatsapp from '../images/whatsapp.png'
// import email from '../images/email.png'
// import location from '../images/location.png'



// function Footer() {
//   return (
//     <div className="last-container">
//       <div className='logo-desc-2'>
//         <img src={logo} className="msa-logo" alt="" />
//         <div className="">
//           <h2 className='ttu-msa-2'>TTU MSA</h2>
//           <h2 className='ttu-basmalah-2'>Cultivate Community, Ignite Iman</h2>
//         </div>
//       </div>
//       <div className="about-footer">
//         <div className="about-header-footer">About</div>
//         <div className="about-text-footer">
//           This website is designed to help <br />
//           incoming freshmen and Tech students <br />
//           learn about the MSA and connect <br />
//           with the Muslim community at Tech.
//         </div>
//       </div>
//       <div className="connect">
//         <div className="contactHeading">Contact Us</div>
//         <ul className="list">
//           <li>
//             <img className="whatsapp" src={whatsapp} alt="" />
//             <div className="numberLink">+1 (806) 548-9637</div>
//           </li>
//           <li>
//             <img className="email" src={email} alt="" />
//             <a className="emailLink" href="mailto:texastechmsa@gmail.com">
//               texastechmsa@gmail.com
//             </a>
//           </li>
//           <li>
//             <img className="location" src={location} alt="" />
//             <div className="locationLink">3419 LaSalle Avenue, Lubbock, TX (Main Masjid)</div> 
//           </li>
//           <li>
//             <img className="location" src={location} alt="" />
//             <div className="locationLink">2222 15th Street, Lubbock, TX (Student Masjid)</div>
//           </li>
//         </ul>
//       </div>
//       {/* <div className="margin-box"></div>
//         <div className="text-box">Copyright © 2023 TTU MSA - All Rights Reserved.</div> */}
//     </div>
//   );
// }


// export default Footer;

import logo from '../images/msa-logo.png'
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 border-t">
        <div className="px-8 sm:px-6 lg:px-64">
          <div className="justify-center items-center">
            {/* Logo Section */}
            <div className="text-center md:text-center">
              <div
                style={{ background: "rgb(99, 10, 0, 0.95)" }}
                className="p-3 rounded-full inline-block mb-4 shadow-lg border-2 border-white"
              >
                <img
                  src={logo}
                  alt="TTU MSA Logo"
                  className="h-32 w-32 object-contain"
                />
              </div>
              <h3 className="text-xl mb-2 text-white">TTU MSA</h3>
              <p className="text-white italic">
                Cultivate community, ignite iman
              </p>
            </div>

            {/* About Section */}
            <div className="text-center md:text-center pt-12">
              <h3 className="text-xl font-bold mb-4 text-white border-b border-red-700 pb-2">
                About
              </h3>
              <div
                style={{ background: "rgb(99, 10, 0, 0.95)" }}
                className="p-4 rounded-lg border border"
              >
                <p className="text-white leading-relaxed">
                  This website is designed to help incoming freshmen and Tech
                  students learn about the MSA and connect with the Muslim
                  community at Tech.
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div className="md:flex-col md:items-center pt-12 md:justify-center text-center md:text-center">
              <h3 className="text-xl font-bold mb-4 text-white border-b border-red-700 pb-2">
                Contact
              </h3>
              <div className="space-y-3">
                <div
                  style={{ background: "rgb(99, 10, 0, 0.95)" }}
                  className="flex items-center justify-center md:justify-center py-3 rounded-lg border"
                >
                  <Phone size={18} className="mr-3 text-red-400" />
                  <span className="text-white">+1 (806) 548-9637</span>
                </div>
                <div
                  style={{ background: "rgb(99, 10, 0, 0.95)" }}
                  className="flex items-center justify-center md:justify-center py-3 rounded-lg border"
                >
                  <Mail size={18} className="mr-3 text-red-400" />
                  <span className="text-white">texastechmsa@gmail.com</span>
                </div>
                <div
                  style={{ background: "rgb(99, 10, 0, 0.95)" }}
                  className="flex items-start justify-center md:justify-center py-3 rounded-lg border"
                >
                  <MapPin
                    size={18}
                    className="mr-3 text-red-400 mt-1 flex-shrink-0"
                  />
                  <div className="text-white">
                    <p>3419 LaSalle Avenue, Lubbock, TX</p>
                    <p className="text-sm text-red-300">(Main Masjid)</p>
                  </div>
                </div>
                <div
                  style={{ background: "rgb(99, 10, 0, 0.95)" }}
                  className="flex items-start justify-center md:justify-center py-3 rounded-lg border"
                >
                  <MapPin
                    size={18}
                    className="mr-3 text-red-400 mt-1 flex-shrink-0"
                  />
                  <div className="text-white">
                    <p>2222 15th Street, Lubbock, TX</p>
                    <p className="text-sm text-red-300">(Student Masjid)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-red-700 mt-12 pt-8 text-center">
            <p className="text-white">
              © 2024 Texas Tech University Muslim Students Association. All
              rights reserved.
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
