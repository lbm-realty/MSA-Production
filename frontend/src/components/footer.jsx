import '../css/footer.css'
import logo from '../images/msa-logo.png'
import whatsapp from '../images/whatsapp.png'
import email from '../images/email.png'
import location from '../images/location.png'



function Footer() {
  return (
    <div className="last-container">
      <div className='logo-desc-2'>
        <img src={logo} className="msa-logo" alt="" />
        <div className="">
          <h2 className='ttu-msa-2'>TTU MSA</h2>
          <h2 className='ttu-basmalah-2'>Cultivate Community, Ignite Iman</h2>
        </div>
      </div>
      <div className="about-footer">
        <div className="about-header-footer">About</div>
        <div className="about-text-footer">
          This website is designed to help <br />
          incoming freshmen and Tech students <br />
          learn about the MSA and connect <br />
          with the Muslim community at Tech.
        </div>
      </div>
      <div className="connect">
        <div className="contactHeading">Contact Us</div>
        <ul className="list">
          <li>
            <img className="whatsapp" src={whatsapp} alt="" />
            <div className="numberLink">+1 (806) 548-9637</div>
          </li>
          <li>
            <img className="email" src={email} alt="" />
            <a className="emailLink" href="mailto:texastechmsa@gmail.com">
              texastechmsa@gmail.com
            </a>
          </li>
          <li>
            <img className="location" src={location} alt="" />
            <div className="locationLink">3419 LaSalle Avenue, Lubbock, TX (Main Masjid)</div> 
          </li>
          <li>
            <img className="location" src={location} alt="" />
            <div className="locationLink">2222 15th Street, Lubbock, TX (Student Masjid)</div>
          </li>
        </ul>
      </div>
      {/* <div className="margin-box"></div>
        <div className="text-box">Copyright © 2023 TTU MSA - All Rights Reserved.</div> */}
    </div>
  );
}


export default Footer;