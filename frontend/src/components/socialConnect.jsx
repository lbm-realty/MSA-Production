// import '../css/socialConnect.css';
// import discord from '../images/discord-logo-2.png';
// import youtube from '../images/youtube-logo.png';
// import instagram from '../images/instagram-logo-2.png';
// import facebook from '../images/facebook-logo.png';

// function SocialConnect() {
//   return (
//     <div class="connect-container">
//       <div class="connect-header">
//         <h3>Connect With Us!</h3>
//       </div>
//       <div class="socials-connect">
//         <div class="connect-discord">
//           <a href="https://discord.com/channels/1002380266339307600/1002380266792300635">
//             <img src={discord} class="discord-logo" alt="" />
//           </a>
//           <h3 class="discord-header">Discord</h3>
//         </div>
//         <div class="connect-instagram">
//           <a href="https://www.instagram.com/msa_ttu/">
//             <img src={instagram} class="instagram-logo" alt="" />
//           </a>
//           <h3 class="instagram-header">Instagram</h3>
//         </div>
//         <div class="connect-youtube">
//           <a href="https://www.youtube.com/@texastechuniversity_msa ">
//             <img src={youtube} class="youtube-logo" alt="" />
//           </a>
//           <h3 class="youtube-header">YouTube</h3>
//         </div>
//         <div class="connect-facebook">
//           <a href="https://www.facebook.com/TexasTechMSA">
//             <img src={facebook} class="facebook-logo" alt="" />
//           </a>
//           <h3 class="facebook-header">Facebook</h3>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default SocialConnect;

import '../css/socialConnect.css';
import { Instagram, Youtube, Facebook, MessageCircle } from "lucide-react";

const SocialConnect = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/msa_ttu/",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://www.youtube.com/@texastechuniversity_msa",
      color: "hover:text-red-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://www.facebook.com/TexasTechMSA",
      color: "hover:text-blue-500",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      url: "https://discord.com/channels/1002380266339307600/1002380266792300635",
      color: "hover:text-purple-500",
    },
  ];

  return (

    <section className="connect-section">
      <div className="connect-container">
        <div className="connect-header">
          <h2>Connect With Us</h2>
          <p>Stay updated with our latest activities and events</p>
        </div>

        <div className="social-grid">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-card ${link.color}`}
              >
                <IconComponent size={48} className="social-icon" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>

  );
};

export default SocialConnect;
