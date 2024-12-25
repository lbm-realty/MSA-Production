import Banner from '../components/banner'
import SocialConnect from "../components/socialConnect";
import Quote from "../components/quote";
import AboutContainer from '../components/aboutAndLogo';
import DonateHome from '../components/donateHome';

function Home() {
  return (
    <>
      <Banner />
      <AboutContainer />
      <SocialConnect />
      <DonateHome />
    </>
  );
}

export default Home;
