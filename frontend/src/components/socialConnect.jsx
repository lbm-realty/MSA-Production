import '../css/socialConnect.css';
import discord from '../images/discord-logo.png';
import youtube from '../images/youtube-logo.png';
import instagram from '../images/instagram-logo.png';
import facebook from '../images/facebook-logo.png';

function SocialConnect() {
  return (
    <div class="connect-container">
      <div class="connect-header">
        <h1>Connect With Us!</h1>
      </div>
      <div class="socials-connect">
        <div class="connect-discord">
          <a href="https://discord.com/channels/1002380266339307600/1002380266792300635">
            <img src={discord} class="discord-logo" alt="" />
          </a>
          <h3 class="discord-header">Discord</h3>
        </div>
        <div class="connect-instagram">
          <a href="https://www.instagram.com/msa_ttu/">
            <img src={instagram} class="instagram-logo" alt="" />
          </a>
          <h3 class="instagram-header">Instagram</h3>
        </div>
        <div class="connect-youtube">
          <a href="https://www.youtube.com/@texastechuniversitymuslims4754">
            <img src={youtube} class="youtube-logo" alt="" />
          </a>
          <h3 class="youtube-header">YouTube</h3>
        </div>
        <div class="connect-facebook">
          <a href="https://www.facebook.com/TexasTechMSA">
            <img src={facebook} class="facebook-logo" alt="" />
          </a>
          <h3 class="facebook-header">Facebook</h3>
        </div>
      </div>
    </div>
  );
}

export default SocialConnect;